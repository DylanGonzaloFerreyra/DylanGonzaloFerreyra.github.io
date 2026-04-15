import { motion } from 'framer-motion';
import { Laptop, Heart } from 'lucide-react';
import { personalInfo } from '../lib/data';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="footer-text">© {new Date().getFullYear()} {personalInfo.name}</span>
      <span className="footer-text">
        Built with IA and{' '}
        <motion.span
          style={{ display: 'inline-block' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart size={16} />
        </motion.span>
      </span>
    </motion.footer>
  );
}
