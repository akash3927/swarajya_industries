import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    text: "Swarajya Industries has been our go-to partner for aerospace components for over 5 years. Their precision and attention to detail are simply unmatched in the industry.",
    author: "Rakesh Sharma",
    company: "AeroDynamics Ltd",
  },
  {
    id: 2,
    text: "We needed complex custom parts with an extremely tight deadline. Not only did they deliver on time, but the quality exceeded our expectations. Highly recommended.",
    author: "Amit Patel",
    company: "Automotive Corp",
  },
  {
    id: 3,
    text: "The surface finish and tolerance levels achieved by their VMC machines are remarkable. A truly professional and technically sound team.",
    author: "Sarah Jenkins",
    company: "Global Manufacturing",
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h4 className="section-subtitle">Client Success Stories</h4>
          <h2 className="section-title">What Our Partners Say</h2>
        </div>
        
        <div className={styles.testimonialGrid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}></div>
                <div>
                  <h4>{t.author}</h4>
                  <p>{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
