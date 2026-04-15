import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Rocket, Github } from 'lucide-react';
import { projects } from '../lib/data';
import MotionWrapper from './MotionWrapper';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsSection({ showAll = false }) {
  const items = showAll ? projects : projects.slice(0, 4);

  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  const revealStyle = showAll
    ? { animation: 'portfolioReveal 0.8s ease-out both' }
    : { animation: 'portfolioReveal 0.8s ease-out both', animationTimeline: 'view()', animationRange: 'entry 0% cover 30%' };

  return (
    <div className="fade-in-section is-visible" style={revealStyle}>
      <style>{`@keyframes portfolioReveal { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }`}</style>
      <section id="projects" className="projects-section">
      {!showAll && (
        <MotionWrapper>
          <h2 className="section-title"><Rocket size={20} /> Projects</h2>
        </MotionWrapper>
      )}
      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        {rows.map((row, ri) => (
          <div key={ri} className="projects-row">
            {row.map((p, pi) => (
              <motion.div key={pi} className="project-card" variants={itemVariants}>
                <div className="project-card-img-wrap">
                  {p.image ? (
                    <div
                      className="project-card-img"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                  ) : (
                    <div className="project-card-img project-card-img--empty">
                      <Smartphone size={32} color="#71717A" />
                    </div>
                  )}
                  {p.github && (
                    <div className="project-card-overlay">
                      <motion.a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-overlay-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} /> View on GitHub
                      </motion.a>
                    </div>
                  )}
                </div>
                <div className="project-card-content">
                  <span className="project-card-title">{p.title}</span>
                  <p className="project-card-desc">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
      {!showAll && (
        <MotionWrapper delay={0.3}>
          <div className="view-all-wrap">
            <Link to="/projects" className="view-all-btn">
              <span>View all projects ({projects.length})</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </MotionWrapper>
      )}
      </section>
    </div>
  );
}
