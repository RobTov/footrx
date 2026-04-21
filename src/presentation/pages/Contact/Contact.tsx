import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { CONTACT_INFO, WHATSAPP_LINK } from '../../../infrastructure/data/content';
import './Contact.css';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h1>Contact Us</h1>
            <p className="hero-subtitle">
              Get in touch with FOOTRX for professional foot care services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>Get In Touch</h3>
              
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Phone/WhatsApp</span>
                  <span className="contact-value">{CONTACT_INFO.phone}</span>
                </div>
              </a>
              
              <a href={`mailto:${CONTACT_INFO.email}`} target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none' }}>
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{CONTACT_INFO.email}</span>
                </div>
              </a>
              
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none' }}>
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Address</span>
                  <span className="contact-value">{CONTACT_INFO.address}</span>
                </div>
              </a>

              <div className="social-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram size={24} />
                    <span>Instagram</span>
                  </a>
                  <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaFacebook size={24} />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="map-card">
              <h3>Our Location</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.8354735274622!2d-96.94226592345677!3d32.58851977391817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e1d59b4c8e1c3%3A0x1234567890abcdef!2s1421+N+Hwy+67%2C+STE+200-C%2C+Cedar+Hill%2C+TX+75104!5e0!3m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FOOTRX Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}