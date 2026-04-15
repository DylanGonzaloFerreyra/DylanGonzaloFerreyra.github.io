import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ScrollText } from 'lucide-react';
import { certificates } from '../lib/data';
import MotionWrapper from './MotionWrapper';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CertificatesSection({ showAll = false }) {
  const items = showAll ? certificates : certificates.slice(0, 3);

  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <div className="fade-in-section is-visible" style={{ animation: "portfolioReveal 0.8s ease-out both", animationTimeline: "view()", animationRange: "entry 0% cover 30%" }}>
      <style>{`@keyframes portfolioReveal { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }`}</style>
      <section id="certificates" className="certificates-section">
      {!showAll && (
        <MotionWrapper>
          <h2 className="section-title"><ScrollText size={20} /> Certificates</h2>
        </MotionWrapper>
      )}
      <motion.div
        className="cert-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        {rows.map((row, ri) => (
          <div key={ri} className="cert-row">
            {row.map((c, ci) => (
              <motion.a
                key={ci}
                className="cert-card"
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div
                  className="cert-card-img"
                  style={{ backgroundImage: `url(${c.image})` }}
                />
                <div className="cert-card-content">
                  <span className="cert-card-title">{c.title}</span>
                  <p className="cert-card-desc">{c.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        ))}
      </motion.div>
      {!showAll && (
        <MotionWrapper delay={0.3}>
          <div className="view-all-wrap">
            <Link to="/certificates" className="view-all-btn">
              <span>View all certificates ({certificates.length})</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </MotionWrapper>
      )}
      </section>
    </div>
  );
}
