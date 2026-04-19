"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            Swarajya<span>Industries</span>
          </Link>
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="#home" onClick={closeMenu}>Home</Link></li>
            <li><Link href="#about" onClick={closeMenu}>About</Link></li>
            <li><Link href="#services" onClick={closeMenu}>Services</Link></li>
            <li><Link href="#gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link href="#clients" onClick={closeMenu}>Clients</Link></li>
            <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
        <div 
          className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
