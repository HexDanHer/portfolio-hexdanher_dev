// frontend/src/pages/Projects.jsx

import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import styles from './Projects.module.css';

const FILTERS = [
  { key: 'todos',     label: 'Todos' },
  { key: 'frontend',  label: 'Frontend' },
  { key: 'backend',   label: 'Backend' },
  { key: 'fullstack', label: 'Full Stack' },
];

export default function Projects() {
  const [active, setActive] = useState('todos');

  const filtered = active === 'todos'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mis proyectos</h1>
        <p className={styles.subtitle}>Una selección de lo que he construido</p>
      </div>

      <div className={styles.filters}>
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`${styles.filterBtn} ${active === f.key ? styles.active : ''}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>Aun no se han desarrollado proyectos en esta categoria.</p>
      )}
    </section>
  );
}
