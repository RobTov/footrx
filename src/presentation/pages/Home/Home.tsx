import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import { WHY_CHOOSE_US, WHATSAPP_LINK } from '../../../infrastructure/data/content';
import './Home.css';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      
      <section className="home-why-choose-us" id="why-choose-us">
        <div className="container">
          <div className="section-title">
            <h2>Why Foot Care Matters</h2>
            <p>
              Your feet carry you through life. Our expert nursing-led care ensures they stay healthy, 
              comfortable, and problem-free.
            </p>
          </div>

          <div className="why-choose-grid">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={item.title}
                className="why-choose-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="why-choose-icon">
                  {index === 0 && '🏥'}
                  {index === 1 && '🛡️'}
                  {index === 2 && '💆'}
                  {index === 3 && '🚗'}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="home-cta">
            <Link to="/why-choose-us" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Professional nursing-led foot care in-office or at your home.
            </p>
          </div>

          <div className="home-services-grid">
            <Link to="/services" className="service-card-link">
              <div className="home-service-card">
                <div className="service-icon">🏥</div>
                <h3>In-Office Treatments</h3>
                <p>Visit our clinic for professional foot care services</p>
              </div>
            </Link>
            <Link to="/services" className="service-card-link">
              <div className="home-service-card">
                <div className="service-icon">🏠</div>
                <h3>Mobile Treatments</h3>
                <p>We come to you for convenient at-home care</p>
              </div>
            </Link>
          </div>

          <div className="home-cta">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}