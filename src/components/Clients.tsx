import styles from './Clients.module.css';

const Clients = () => {
  return (
    <section id="clients" className={styles.clientsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h4 className="section-subtitle">Industries Served</h4>
          <h2 className="section-title">Trusted by Leading Brands</h2>
        </div>
        
        <div className={styles.logoGrid}>
          {/* Using placeholder divs for logos */}
          <div className={styles.logoItem}>Automotive Corp</div>
          <div className={styles.logoItem}>AeroDynamics Ltd</div>
          <div className={styles.logoItem}>TechMachine Inc</div>
          <div className={styles.logoItem}>Global Manufacturing</div>
          <div className={styles.logoItem}>Precision MedTech</div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
