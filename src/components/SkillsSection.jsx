import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../lib/data';
import { Wrench, Laptop, Settings, Database, Cloud, BarChart3 } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const skillIconMap = { Laptop, Settings, Database, Cloud, BarChart3, Wrench };

function SkillTagWithTooltip({ tag, index = 0 }) {
  const tagRef = useRef(null);
  const tooltipRef = useRef(null);
  const [xOffset, setXOffset] = useState(0);

  const handleMouseEnter = () => {
    if (!tagRef.current || !tooltipRef.current) return;
    const tagRect = tagRef.current.getBoundingClientRect();
    const tipW = tooltipRef.current.offsetWidth;
    const center = tagRect.left + tagRect.width / 2;
    const tipLeft = center - tipW / 2;
    const tipRight = center + tipW / 2;
    const margin = 12;
    let dx = 0;
    if (tipLeft < margin) dx = margin - tipLeft;
    else if (tipRight > window.innerWidth - margin) dx = window.innerWidth - margin - tipRight;
    setXOffset(dx);
  };

  return (
    <motion.div
      ref={tagRef}
      className="skill-tag"
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <span>{tag.name}</span>
      {tag.tooltip && (
        <div
          ref={tooltipRef}
          className="skill-tooltip"
          style={{ '--tip-x': `${xOffset}px`, '--arrow-x': `${-xOffset}px` }}
        >
          {tag.tooltip}
        </div>
      )}
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <div className="fade-in-section is-visible" style={{ animation: "portfolioReveal 0.8s ease-out both", animationTimeline: "view()", animationRange: "entry 0% cover 30%" }}>
      <style>{`@keyframes portfolioReveal { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }`}</style>
      <section id="skills" className="skills-section">
      <MotionWrapper>
        <h2 className="section-title"><Wrench size={20} /> Skills</h2>
      </MotionWrapper>
      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills.map((cat, i) => {
          const Icon = skillIconMap[cat.icon];
          return (
            <motion.div
              key={i}
              className="skill-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <span className="skill-card-title">{Icon && <Icon size={16} />} {cat.title}</span>
              <div className="skill-tags">
                {cat.tags.map((tag, j) => (
                  <SkillTagWithTooltip key={j} tag={tag} index={j} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      </section>
    </div>
  );
}
