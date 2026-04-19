import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.contactInfo}>
          <h4 className="section-subtitle">Get In Touch</h4>
          <h2 className="section-title">Ready to Start Your Project?</h2>
          <p className={styles.description}>
            Contact us today to discuss your machining requirements. Our team of experts 
            is ready to provide you with a comprehensive quote and timeline for your project.
          </p>
          
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.icon}>📍</div>
              <div>
                <h4>Our Workshop</h4>
                <p>123 Industrial Area, Phase II<br />Pune, Maharashtra 411001</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.icon}>📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210<br />+91 87654 32109</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.icon}>✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@swarajyaindustries.com<br />sales@swarajyaindustries.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.contactForm}>
          <form>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Tell us about your project requirements..." rows={5} required></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
      
      {/* Google Maps Placeholder */}
      <div className={styles.mapPlaceholder}>
        <div className={styles.mapText}>Interactive Google Map Area</div>
      </div>
    </section>
  );
};

export default ContactUs;
