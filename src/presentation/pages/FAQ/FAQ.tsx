import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { FAQ_ITEMS, WHATSAPP_LINK } from '../../../infrastructure/data/content';
import './FAQ.css';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <section className="faq-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h1>Frequently Asked Questions</h1>
            <p className="hero-subtitle">
              Find answers to common questions about our foot care services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                className={`faq-item ${openId === item.id ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (item.id - 1) * 0.1 }}
              >
                <button className="faq-question" onClick={() => toggle(item.id)}>
                  <span className="faq-number">{item.id}.</span>
                  <span className="faq-text">{item.question}</span>
                  <FiChevronDown className="faq-icon" />
                </button>
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="faq-cta">
            <p>Still have questions?</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Chat with Us
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}