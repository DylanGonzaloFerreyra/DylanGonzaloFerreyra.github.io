import { motion } from 'framer-motion';
import { education } from '../lib/data';
import { GraduationCap, Landmark, MapPin, Calendar } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

export default function EducationSection() {
  return (
    <div className="fade-in-section is-visible" style={{ animation: "portfolioReveal 0.8s ease-out both", animationTimeline: "view()", animationRange: "entry 0% cover 30%" }}>
      <style>{`@keyframes portfolioReveal { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }`}</style>
      <section id="education" className="education-section">
      <MotionWrapper>
        <h2 className="section-title"><GraduationCap size={20} /> Education</h2>
      </MotionWrapper>
      <div className="edu-cards">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="edu-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="edu-head">
              <span className="edu-degree"><GraduationCap size={16} /> {edu.degree}</span>
              <span className="edu-institution"><Landmark size={16} /> {edu.institution}</span>
              <span className="edu-location"><MapPin size={16} /> {edu.location}</span>
            </div>
            <div className="period-badge">
              <span><Calendar size={14} /> {edu.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
      </section>
    </div>
  );
}
