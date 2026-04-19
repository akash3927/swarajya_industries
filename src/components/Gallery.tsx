import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h4 className="section-subtitle">Our Workshop</h4>
          <h2 className="section-title">See Us in Action</h2>
        </div>
        
        <div className={styles.galleryGrid}>
          <div className={`${styles.galleryItem} ${styles.large}`}>
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <h4>Precision Cutting</h4>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <h4>Finished Parts</h4>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <h4>CNC Machinery</h4>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <h4>Quality Control</h4>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                <h4>Team at Work</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
