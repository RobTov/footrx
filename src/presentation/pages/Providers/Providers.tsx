import { motion } from 'framer-motion';
import { PROVIDERS, WHATSAPP_LINK } from '../../../infrastructure/data/content';
import './Providers.css';

export default function Providers() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="providers-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Our Nursing-Led Approach</h1>
            <p className="hero-subtitle">
              Dedicated to providing compassionate, professional foot care.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="providers-content">
        <div className="container">
          <div className="providers-grid">
            {PROVIDERS.map((provider, index) => (
              <motion.div
                key={provider.id}
                className="provider-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="provider-header">
                  <h2>{provider.name}</h2>
                  <span className="provider-title">{provider.title}</span>
                </div>
                <div className="provider-description">
                  {provider.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="providers-cta">
        <div className="container">
          <div className="cta-box">
            <h3>Ready to Experience Quality Foot Care?</h3>
            <p>Schedule your appointment today and let our nursing team take care of your feet.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Book Your Visit
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}