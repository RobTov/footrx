import { motion } from 'framer-motion';
import { IN_OFFICE_SERVICES, MOBILE_SERVICES, BOOKING_LINK, WHATSAPP_LINK } from '../../../infrastructure/data/content';
import './Services.css';

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <section className="services-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h1>Our Services</h1>
            <p className="hero-subtitle">
              Professional nursing-led foot care tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="in-office-section">
        <div className="container">
          <div className="section-title">
            <h2>IN OFFICE TREATMENTS:</h2>
            <p>Visit our clinic for comprehensive foot care services.</p>
          </div>

          <div className="services-gallery">
            {IN_OFFICE_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-gallery-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-caption">
                  <h3>{service.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="cta-container">
            <a 
              href={BOOKING_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Schedule In Office Visit
            </a>
          </div>
        </div>
      </section>

      <section className="mobile-section">
        <div className="container">
          <div className="section-title">
            <h2>MOBILE TREATMENTS</h2>
            <p>Professional foot care in the comfort of your home.</p>
          </div>

          <div className="services-gallery">
            {MOBILE_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-gallery-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-caption">
                  <h3>{service.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="cta-container">
            <a 
              href={BOOKING_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Schedule Mobile Visit
            </a>
          </div>
        </div>
      </section>

      <section className="services-contact">
        <div className="container">
          <div className="contact-box">
            <h3>Have Questions?</h3>
            <p>Contact us to learn more about our services and find the right option for you.</p>
            <a href={WHATSAPP_LINK} className="btn btn-whatsapp">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}