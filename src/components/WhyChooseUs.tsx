import styles from './WhyChooseUs.module.css';

const features = [
  { id: 1, title: 'High Precision', desc: 'Tolerance levels down to microns for the most demanding parts.' },
  { id: 2, title: 'Advanced Machinery', desc: 'Latest CNC & VMC machines ensuring top-notch finish.' },
  { id: 3, title: 'Skilled Engineers', desc: 'A team of highly qualified and experienced professionals.' },
  { id: 4, title: 'Fast Turnaround', desc: 'Optimized processes to deliver your parts on schedule.' },
  { id: 5, title: 'Competitive Pricing', desc: 'Cost-effective manufacturing without compromising on quality.' },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.whyUsSection}>
      <div className={`container ${styles.whyUsContainer}`}>
        <div className={styles.contentCol}>
          <h4 className="section-subtitle">Why Choose Us</h4>
          <h2 className="section-title">The Partner You Can Trust</h2>
          <p className={styles.description}>
            With years of experience in the machining industry, we understand the critical nature of 
            your projects. Our commitment to quality, combined with our advanced technological 
            capabilities, makes us the ideal manufacturing partner.
          </p>
          
          <ul className={styles.featureList}>
            {features.map(f => (
              <li key={f.id} className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageCol}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.statsBox}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>Quality Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
