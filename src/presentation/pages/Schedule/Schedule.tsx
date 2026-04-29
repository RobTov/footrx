import { motion } from 'framer-motion';
import { SCHEDULE_SLOTS, BOOKING_LINK } from '../../../infrastructure/data/content';
import './Schedule.css';

export default function Schedule() {
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
            <h1>Book an Appointment</h1>
            <p className="hero-subtitle">
              Find a time that works for you and schedule your visit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="schedule-content">
        <div className="container">
          <div className="schedule-grid">
            {SCHEDULE_SLOTS.map((slot, index) => (
              <motion.div
                key={slot.day}
                className="schedule-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="schedule-day">{slot.day}</div>
                <div className="schedule-times">
                  {slot.times.map((time, idx) => (
                    <span key={idx} className="time-slot">{time}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="booking-cta">
            <a 
              href={BOOKING_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-large"
            >
              Book Your Appointment
            </a>
          </div>

          <div className="schedule-note">
            <p>Note: Schedule is subject to availability. For urgent care or same-day appointments, please contact us directly.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}