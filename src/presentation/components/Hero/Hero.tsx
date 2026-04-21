import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { WHATSAPP_LINK } from '../../../infrastructure/data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="/hero.jpg" 
          alt="Medical foot care" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <h1>FOOTRX</h1>
          <p className="hero-subtitle">Medical-Grade Foot and Nail Care!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hero-btn btn btn-whatsapp">
            Contact Us on WhatsApp
            <FiArrowRight />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="scroll-dot"></div>
      </motion.div>
    </section>
  );
}