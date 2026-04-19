import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <div className={styles.experienceBadge}>
              <span className={styles.years}>15+</span>
              <span className={styles.text}>Years of<br/>Excellence</span>
            </div>
            {/* Image placeholder */}
            <div className={styles.aboutImage}></div>
          </div>
        </div>
        
        <div className={styles.contentCol}>
          <h4 className="section-subtitle">About Us</h4>
          <h2 className="section-title">Forging the Future with Precision</h2>
          <p className={styles.description}>
            Swarajya Industries is a premier CNC and VMC machining facility dedicated to producing 
            high-quality, complex components. Our state-of-the-art workshop and team of expert 
            engineers ensure that every part meets the strictest tolerances.
          </p>
          <p className={styles.description}>
            Our mission is to empower global manufacturing by delivering top-tier precision 
            engineering solutions. We pride ourselves on our uncompromising quality control 
            and our ability to meet tight deadlines without sacrificing accuracy.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.iconBox}></div>
              <div className={styles.featureText}>
                <h4>Unmatched Precision</h4>
                <p>Advanced machinery ensuring micro-level accuracy.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconBox}></div>
              <div className={styles.featureText}>
                <h4>Timely Delivery</h4>
                <p>Optimized workflows for fast turnaround times.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
