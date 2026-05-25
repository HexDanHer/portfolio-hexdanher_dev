// frontend/src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.logo}>&lt;hexdanher_dev/&gt;</span>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Menú"
      >
        <span /><span /><span />
      </button>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <NavLink to="/"          className={({ isActive }) => isActive ? styles.active : ''} end>Inicio</NavLink>
        <NavLink to="/proyectos" className={({ isActive }) => isActive ? styles.active : ''}>Proyectos</NavLink>
        <NavLink to="/contacto"  className={({ isActive }) => isActive ? styles.active : ''}>Contacto</NavLink>
        <a
          href="/cv-daniel-hernandez.pdf"
          download
          className={styles.cvBtn}
        >
          CV download
        </a>
      </div>
    </nav>
  );
}
