import { motion } from 'framer-motion';
import { BOOKING_LINK, APPOINTMENT_BOOKING_LINK } from '../../../infrastructure/data/content';
import './Schedule.css';

export default function Schedule() {
  const availableDays = [
    { day: 'Tuesday', hours: '9:00 AM - 3:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 3:00 PM' },
  ];

  const appointmentDays = ['Monday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <section className="schedule-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h1>Office Hours</h1>
            <p className="hero-subtitle">
              Walk-in availability and scheduled appointments
            </p>
          </motion.div>
        </div>
      </section>

      <section className="schedule-content">
        <div className="container">
          <div className="schedule-layout">
            <div className="available-section">
              <motion.div
                className="schedule-card-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-header">
                  <div className="status-dot available"></div>
                  <h2>Available Walk-In Hours</h2>
                </div>
                <div className="days-grid">
                  {availableDays.map((item) => (
                    <div key={item.day} className="day-row">
                      <span className="day-name">{item.day}</span>
                      <span className="day-hours">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="appointment-section">
              <motion.div
                className="schedule-card-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="card-header">
                  <div className="status-dot appointment"></div>
                  <h2>By Appointment Only</h2>
                </div>
                <div className="appointment-days">
                  {appointmentDays.join(', ')}
                </div>
                <a
                  href={APPOINTMENT_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Request Appointment
                </a>
              </motion.div>
            </div>
          </div>

          <div className="booking-cta">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Book Your Visit
            </a>
          </div>

          <div className="schedule-note">
            <p>For same-day appointments or urgent care needs, please contact us directly.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}