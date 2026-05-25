// frontend/src/components/Footer.jsx

import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2026 Daniel Hernando Hernandez ·{' '}
        <a href="https://www.linkedin.com/in/daniel-hernando-hernandez-alarcon-376ab0405/?skipRedirect=true" target="_blank" rel="noreferrer">LinkedIn</a>
        {' · '}
        <a href="https://github.com/HexDanHer" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </footer>
  );
}
