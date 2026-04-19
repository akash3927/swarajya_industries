import styles from './Services.module.css';

const servicesData = [
  {
    id: 1,
    title: 'CNC Machining',
    description: 'High-speed, high-precision CNC turning and milling for complex geometries and tight tolerances.',
    icon: '⚙️', // Placeholder for actual icon
  },
  {
    id: 2,
    title: 'VMC Machining',
    description: 'Advanced Vertical Machining Centers providing exceptional surface finish and multi-axis capabilities.',
    icon: '🏭',
  },
  {
    id: 3,
    title: 'Custom Parts Mfg',
    description: 'End-to-end manufacturing of bespoke parts tailored specifically to your industrial requirements.',
    icon: '🔧',
  },
  {
    id: 4,
    title: 'Prototype Development',
    description: 'Rapid prototyping services to help you iterate designs quickly and cost-effectively before mass production.',
    icon: '📐',
  }
];

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={`container`}>
        <div className={styles.sectionHeader}>
          <h4 className="section-subtitle">Our Expertise</h4>
          <h2 className="section-title">Comprehensive Machining Services</h2>
        </div>
        
        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconContainer}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className={styles.readMoreBtn}>Learn More &rarr;</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
