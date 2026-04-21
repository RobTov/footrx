import { motion } from 'framer-motion';
import { WHY_CHOOSE_US, WHATSAPP_LINK } from '../../../infrastructure/data/content';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: 'Specialized Nursing Expertise',
      description: 'Our team consists of licensed registered nurses with specialized training in foot care, wound management, and diabetic foot health. We understand the unique needs of patients with chronic conditions.',
    },
    {
      title: 'Early Detection & Prevention',
      description: 'Regular professional foot care can detect early signs of circulation issues, nerve damage, or skin problems before they become serious complications.',
    },
    {
      title: 'Safe & Sterile Environment',
      description: 'We maintain clinical standards with proper sterilization, ensuring every visit is safe and hygienic. No salon atmosphere—just professional medical care.',
    },
    {
      title: 'Personalized Care Plans',
      description: 'Every patient is unique. We assess your specific needs and create customized care plans to address your individual foot health concerns.',
    },
    {
      title: 'Convenient Mobile Services',
      description: 'Unable to visit us? We offer mobile foot care services, bringing professional nursing care directly to your home or facility.',
    },
    {
      title: 'Insurance &Referrals',
      description: 'We work with patients with HSA/FSA accounts and can provide documentation for insurance purposes when applicable.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="why-choose-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Why Choose FOOTRX</h1>
            <p className="hero-subtitle">
              Your feet deserve the same level of care and attention as any other part of your body.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="why-choose-content">
        <div className="container">
          <div className="section-title">
            <h2>The Importance of Foot Care</h2>
            <p>
              Foot health is often overlooked until a problem becomes serious. Regular professional 
              foot care can prevent complications and maintain mobility and quality of life.
            </p>
          </div>

          <div className="importance-grid">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={item.title}
                className="importance-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Why FOOTRX Stands Out</h2>
            <p>
              We combine nursing expertise with compassionate care to provide the best possible 
              foot health services.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="benefit-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="benefit-number">{index + 1}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="cta-container">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Schedule Your Visit
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}