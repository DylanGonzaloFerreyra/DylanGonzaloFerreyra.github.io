import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo, about } from '../lib/data';
import MotionWrapper from './MotionWrapper';

const titles = personalInfo.title.split(' / ');

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const textVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-in-section is-visible" style={{ animation: "portfolioReveal 0.8s ease-out both", animationTimeline: "view()", animationRange: "entry 0% cover 30%" }}>
      <style>{`@keyframes portfolioReveal { from { opacity: 0; transform: translateY(28px); filter: blur(6px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }`}</style>
      <section className="hero-section">
      <motion.div
        className="hero-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-left">
          <motion.h1 id="hero-name" className="hero-name" variants={childVariants}>
            {personalInfo.name}
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              className="hero-title"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              {titles[titleIndex]}
            </motion.p>
          </AnimatePresence>
          <motion.div className="hero-info" variants={childVariants}>
            <div className="hero-info-item">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
            <motion.a href={`mailto:${personalInfo.email}`} className="hero-info-item" whileHover={{ scale: 1.05 }}>
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </motion.a>
            <motion.a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-info-item" whileHover={{ scale: 1.05 }}>
              <Github size={16} />
              <span>GitHub</span>
            </motion.a>
            <motion.a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-info-item" whileHover={{ scale: 1.05 }}>
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <MotionWrapper delay={0.5}>
        <div className="about-card">
          <div className="about-inner">
            <div className="about-bar" />
            <p className="about-text">{about}</p>
          </div>
        </div>
      </MotionWrapper>
      </section>
    </div>
  );
}
