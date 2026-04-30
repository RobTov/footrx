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
                  <span className="contact-label">Phone</span>
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

              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.addressLink)}`} target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none' }}>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4191.972990522935!2d-96.91811878465576!3d32.617385273560494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e93026722424d%3A0x53995b96a4c079ba!2sFoot%20RX%20Health%20and%20Wellness!5e1!3m2!1ses!2scu!4v1776891908792!5m2!1ses!2scu"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
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