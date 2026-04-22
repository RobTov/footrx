import { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES_EXPLAINED, WHATSAPP_LINK } from '../../../infrastructure/data/content';
import Modal from '../../components/Modal/Modal';
import type { ServiceDetail } from '../../../domain/entities/types';
import './ServicesExplained.css';

export default function ServicesExplained() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const openModal = (service: ServiceDetail) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <section className="services-explained-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h1>👣 Our Services Explained</h1>
            <p className="hero-subtitle">Intentional Foot Care. Clinical Standards. Lasting Protection</p>
            <p className="hero-description">
              At Foot RX Health & Wellness, our services are designed with one priority in mind: 
              protecting the health and integrity of your feet.
            </p>
            <p className="hero-description">
              We provide nurse-led, preventative foot care in a professional setting where 
              safety, precision, and conservative treatment come first.
            </p>
            <p className="hero-description">
              Every service is structured to maintain comfort, reduce risk, and support 
              long-term mobility — without unnecessary cosmetic procedures.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="services-explained-content">
        <div className="container">
          <div className="services-gallery">
            {SERVICES_EXPLAINED.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openModal(service)}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                  <div className="service-overlay">Click for details</div>
                </div>
                <div className="service-caption">
                  <h3>{service.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="cta-container">
            <a href={WHATSAPP_LINK} className="btn btn-whatsapp">
              Have Questions? Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={!!selectedService} 
        onClose={closeModal} 
        title={selectedService?.name || ''}
      >
        {selectedService && (
          <div className="service-detail-modal">
            <img 
              src={selectedService.image} 
              alt={selectedService.name} 
              className="modal-image"
            />
            <p className="modal-description">{selectedService.description}</p>
          </div>
        )}
      </Modal>
    </motion.div>
  );
}