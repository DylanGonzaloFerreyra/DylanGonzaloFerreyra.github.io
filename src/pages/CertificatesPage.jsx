import Header from '../components/Header';
import CertificatesSection from '../components/CertificatesSection';
import Footer from '../components/Footer';
import { ScrollText } from 'lucide-react';

export default function CertificatesPage() {
  return (
    <div className="page-frame">
      <Header />
      <div className="certs-page-content">
        <h1 className="section-title"><ScrollText size={20} /> All Certificates</h1>
        <p className="certs-page-subtitle">Browse all my professional certifications and completed courses</p>
        <CertificatesSection showAll />
      </div>
      <Footer />
    </div>
  );
}
