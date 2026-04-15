import { motion } from 'framer-motion';
import { experience } from '../lib/data';
import { Briefcase, Code2, Globe, Calendar } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

export default function ExperienceSection() {
  return (
    <div className="fade-in-section is-visible" style={{ animation: "portfolioReveal 0.8s ease-out both", animationTimeline: "view()", animationRange: "entry 0% cover 30%" }}>
      <style>{`@keyframes portfolioReveal { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }`}</style>
      <section id="experience" className="experience-section">
      <MotionWrapper>
        <h2 className="section-title"><Briefcase size={20} /> Work Experience</h2>
      </MotionWrapper>
      <div className="exp-cards">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            className="exp-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="exp-head">
              <div className="exp-head-left">
                <span className="exp-role"><Code2 size={16} /> {exp.role}</span>
                <span className="exp-location"><Globe size={16} /> {exp.location}</span>
              </div>
              <div className="period-badge">
                <span><Calendar size={14} /> {exp.period}</span>
              </div>
            </div>
            <div className="exp-list">
              {exp.items.map((item, j) => (
                <motion.p
                  key={j}
                  className="exp-list-item"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: j * 0.1 }}
                >
                  • {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      </section>
    </div>
  );
}
