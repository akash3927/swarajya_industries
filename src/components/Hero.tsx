import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.headline}>
          Precision Engineering.<br />
          <span className={styles.highlight}>Reliable Manufacturing.</span>
        </h1>
        <p className={styles.subtext}>
          Industry-leading expertise in CNC and VMC machining. We deliver high-precision 
          components with unparalleled accuracy and efficiency for global industries.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="#contact" className="btn-primary">
            Get a Quote
          </Link>
          <Link href="#services" className="btn-outline">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
