// frontend/src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SkillBar from '../components/SkillBar';
import projects from '../data/projects';
import styles from './Home.module.css';

/* ── datos ─────────────────────────────────────── */
const stack = [
  { label: 'React', color: '#61dafb' },
  { label: 'Node.js', color: '#68a063' },
  { label: 'Java', color: '#3776ab' },
  { label: 'JavaScript', color: '#f7df1e' },
  { label: 'HTML/CSS', color: '#e34c26' },
  { label: 'Git', color: '#f05032' },
];

const hardSkills = [
  { label: 'React / Next.js', percent: 90 },
  { label: 'Node.js / Express', percent: 80 },
  { label: 'Python / Django', percent: 80 },
  { label: 'Bases de datos', percent: 60 },
  { label: 'DevOps / Docker', percent: 50 },
];

const softSkills = [
  { label: 'Trabajo en equipo', percent: 95 },
  { label: 'Comunicación', percent: 88 },
  { label: 'Resolución de problemas', percent: 92 },
  { label: 'Gestión del tiempo', percent: 82 },
  { label: 'Aprendizaje continuo', percent: 98 },
];

const timeline = [
  {
    period: '2024 – Actualidad',
    role: 'Ingeniería de software',
    company: 'Corporación Universitaria Iberoamericana',
    desc: 'Desarrollo de software, estructuras de datos, bases de datos y metodologías ágiles.',
    color: 'var(--accent3)',
  },
];
/* ────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>👋 Hola, soy</p>
          <h1 className={styles.name}>Daniel Hernando Hernandez</h1>
          <p className={styles.title}>Desarrollador web</p>
          <p className={styles.stack}>React · <span>Node.js</span> · Java</p>
          <div className={styles.heroBtns}>
            <Link to="/proyectos" className={styles.btnPrimary}>Ver proyectos</Link>
            <Link to="/contacto" className={styles.btnSecondary}>Contáctame</Link>
          </div>
        </div>

        <div className={styles.avatar}>
          <img src="/foto-perfil.png" alt="Daniel Hernández" className={styles.avatarImg} />
          <div className={styles.avatarRing} />
        </div>
      </section>

      {/* ── SOBRE MÍ ─────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sobre mí</h2>
        <div className={styles.aboutGrid}>
          <div>
            <p className={styles.aboutText}>
              Soy un estudiante de ingeniería de software apasionado por construir productos digitales con
              impacto real. Me especializo en aplicaciones web modernas con enfoque en
              experiencia de usuario, rendimiento y código limpio.
            </p>
            <p className={styles.aboutText} style={{ marginTop: '1rem' }}>
              Trabajo cómodamente en todo el stack: desde interfaces en React hasta APIs
              robustas con Node.js. Siempre buscando aprender y colaborar.
            </p>
            <div className={styles.stats}>
              <div><p className={styles.statNum}>3+</p><p className={styles.statLabel}>años experiencia</p></div>
              <div><p className={styles.statNum} style={{ color: 'var(--accent2)' }}>15+</p><p className={styles.statLabel}>proyectos</p></div>
              <div><p className={styles.statNum} style={{ color: 'var(--accent3)' }}>8+</p><p className={styles.statLabel}>clientes</p></div>
            </div>
          </div>

          <div>
            <p className={styles.stackLabel}>Stack tecnológico</p>
            <div className={styles.stackGrid}>
              {stack.map(({ label, color }) => (
                <div key={label} className={styles.stackItem}>
                  <span className={styles.dot} style={{ background: color }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS DESTACADOS ──────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Proyectos destacados</h2>
        <div className={styles.projectsGrid}>
          {projects.slice(0, 3).map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/proyectos" className={styles.btnSecondary}>Ver todos los proyectos →</Link>
        </div>
      </section>

      {/* ── HABILIDADES ──────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Habilidades</h2>
        <div className={styles.skillsGrid}>
          <div>
            <p className={styles.skillGroupTitle}>Hard Skills</p>
            {hardSkills.map(s => <SkillBar key={s.label} {...s} />)}
          </div>
          <div>
            <p className={styles.skillGroupTitle}>Soft Skills</p>
            {softSkills.map(s => <SkillBar key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA / EDUCACIÓN ───────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experiencia</h2>
        <div className={styles.timeline}>
          {timeline.map((item, i) => (
            <div key={i} className={styles.timelineItem}>
              <span className={styles.timelineDot} style={{ background: item.color }} />
              <p className={styles.timelinePeriod} style={{ color: item.color }}>{item.period}</p>
              <p className={styles.timelineRole}>{item.role}</p>
              <p className={styles.timelineCo}>{item.company}</p>
              <p className={styles.timelineDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
