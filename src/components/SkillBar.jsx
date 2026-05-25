// frontend/src/components/SkillBar.jsx

import React, { useEffect, useRef, useState } from 'react';
import styles from './SkillBar.module.css';

export default function SkillBar({ label, percent }) {
  const [filled, setFilled] = useState(false);
  const ref = useRef(null);

  // Animar la barra cuando entra al viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.bar} ref={ref}>
      <div className={styles.label}>
        <span>{label}</span>
        <span className={styles.percent}>{percent}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: filled ? `${percent}%` : '0%' }}
        />
      </div>
    </div>
  );
}
