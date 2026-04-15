import { motion } from 'framer-motion';

const defaultAnimations = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function MotionWrapper({ children, delay = 0, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={defaultAnimations}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  );
}
