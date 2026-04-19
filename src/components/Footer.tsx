import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerCol}>
          <h3>Swarajya<span>Industries</span></h3>
          <p>
            Precision engineering and reliable manufacturing solutions. 
            We specialize in advanced CNC and VMC machining to deliver 
            top-quality parts for industrial clients worldwide.
          </p>
        </div>
        
        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#gallery">Gallery</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerCol}>
          <h4>Contact Us</h4>
          <p>123 Industrial Area, Phase II</p>
          <p>Pune, Maharashtra 411001</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: info@swarajyaindustries.com</p>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Swarajya Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
