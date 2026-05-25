// frontend/src/components/ProjectCard.jsx

import React from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { name, description, tags, demoUrl, githubUrl, category } = project;

  return (
    <article className={styles.card}>
      <div className={styles.imgPlaceholder}>
        <span>[ {name} ]</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{description}</p>

        <div className={styles.tags}>
          {tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.links}>
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.demo}`}>
              Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.github}`}>
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
