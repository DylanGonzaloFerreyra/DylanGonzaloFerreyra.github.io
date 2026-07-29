import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// The worker file is served from public/pdf.worker.mjs
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

export default function PdfThumbnail({ src, alt = '', className = '' }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const isPdf = src?.toLowerCase().endsWith('.pdf');

  useEffect(() => {
    if (!isPdf || !src) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    (async () => {
      try {
        // Fetch the PDF bytes ourselves (avoids potential URL-in-worker issues)
        const response = await fetch(src);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const buffer = await response.arrayBuffer();

        if (cancelled) return;

        const pdf = await pdfjsLib.getDocument({ data: buffer.slice() }).promise;
        const page = await pdf.getPage(1);

        const cardHeight = 180;
        const base = page.getViewport({ scale: 1 });
        const scale = (cardHeight * 2) / base.height;
        const viewport = page.getViewport({ scale });

        if (cancelled) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport }).promise;

        setLoading(false);
      } catch (err) {
        if (!cancelled) {
          console.warn('PDF thumbnail failed:', src, err);
          setError(true);
          setLoading(false);
        }
      }
    })();

    return () => { cancelled = true; };
  }, [src, isPdf]);

  // Not a PDF → use background-image (existing certificates with covers)
  if (!isPdf) {
    return (
      <div
        className={`cert-card-img ${className}`}
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <div className={`cert-card-img ${className}`}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loading && !error ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
        aria-label={alt}
      />
    </div>
  );
}
