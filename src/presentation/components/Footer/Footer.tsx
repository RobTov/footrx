import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { CONTACT_INFO, WHATSAPP_LINK } from '../../../infrastructure/data/content';
import Modal from '../Modal/Modal';
import './Footer.css';

const currentYear = new Date().getFullYear();

const TERMS_CONTENT = `By scheduling an appointment with Foot RX & Wellness / ACTS Health and Compliance, you acknowledge and agree to the following terms and conditions.

1. Scope of Services

All services are provided by a licensed nurse and are focused on clinical foot health, prevention, and safety. Services are not cosmetic pedicures and do not replace podiatric, medical, or surgical care.

Care provided is limited to the nurse's professional scope and may be modified or deferred based on assessment findings.

2. Appointment Selection

Clients are responsible for selecting the appropriate service level at the time of booking. If the selected service does not match clinical needs, services may be adjusted or rescheduled to ensure safe care.

If you are unsure which service to book, please contact us prior to scheduling.

3. Intake Forms & Disclosure

All required intake and consent forms must be completed prior to the appointment. Clients agree to provide accurate and complete health information, including medical conditions, medications, wounds, infections, or recent changes in health status.

Failure to disclose relevant information may result in modification or refusal of services for safety reasons.

4. Mobile Foot Care Visits

Mobile appointments are for in-home or facility visits and include a mobile service fee. A clean, safe, and well-lit environment is required. Pets must be secured during the visit.

Services may be limited or declined if the environment is deemed unsafe or inappropriate for care.

5. Payment Policy

Payment is due at the time of service unless otherwise stated. Accepted payment methods will be outlined during booking. Insurance billing is not available unless explicitly stated.

6. Cancellations & No-Shows

Appointments must be canceled or rescheduled at least 24 hours in advance.

Late cancellations or failure to show for an appointment may result in a cancellation fee. Repeated no-shows may result in refusal of future bookings.

7. Late Arrivals

Clients arriving late may receive abbreviated services or may be required to reschedule to avoid impacting subsequent appointments. Full service time cannot be guaranteed for late arrivals.

8. Right to Refuse or Discontinue Services

We reserve the right to refuse or discontinue services if care is outside scope, unsafe, or if client behavior is inappropriate or disruptive.

9. Results & Follow-Up

Outcomes may vary based on individual health conditions and compliance with care recommendations. No guarantees are made regarding results. Follow-up visits may be recommended based on assessment.

10. Acknowledgment

By booking an appointment, you acknowledge that you have read, understand, and agree to these Terms & Conditions.`;

const BRAND_CONTENT = `This website may reference multiple brands, service lines, or business names for clarity and transparency. ACTS Health & Compliance serves as the administrative and compliance umbrella for affiliated services. Foot RX Health & Wellness operates as a distinct service line providing RN-led foot care and wellness services.

Each brand maintains its own scope of services, branding, and client communications while operating in alignment with applicable regulations and professional standards.`;

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-logos">
            <img src="/log.png" alt="Logo" className="footer-logo" />
            <img src="/afcn.png" alt="AFCN" className="footer-logo" />
            <img src="/coopers-fc.png" alt="Coopers FC" className="footer-logo" />
          </div>

          <div className="footer-brand">
            <h3>FOOTRX</h3>
            <p>Medical-Grade Foot and Nail Care</p>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="contact-item">
              <FiPhone />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <FiMail />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <FiMapPin />
              <span>{CONTACT_INFO.address}</span>
            </a>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <button className="footer-link" onClick={() => setShowTerms(true)}>
            Terms and Conditions
          </button>
          <button className="footer-link" onClick={() => setShowBrand(true)}>
            Brand Relationship Disclosure
          </button>
          <p className="copyright">© {currentYear} FOOTRX. All rights reserved.</p>
        </div>
      </div>

      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)} title="Terms and Conditions">
        <div className="modal-content-scrollable">
          <p style={{ whiteSpace: 'pre-wrap' }}>{TERMS_CONTENT}</p>
        </div>
      </Modal>

      <Modal isOpen={showBrand} onClose={() => setShowBrand(false)} title="Brand Relationship Disclosure">
        <div className="modal-content-scrollable">
          <p style={{ whiteSpace: 'pre-wrap' }}>{BRAND_CONTENT}</p>
        </div>
      </Modal>
    </footer>
  );
}