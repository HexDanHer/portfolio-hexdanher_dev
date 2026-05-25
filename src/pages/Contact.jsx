// frontend/src/pages/Contact.jsx

import React, { useState } from 'react';
import useContact from '../hooks/useContact';
import styles from './Contact.module.css';

export default function Contact() {
  const { sendMessage, loading, success, error } = useContact();

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(form);
    if (!error) setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>¿Trabajamos juntos?</h1>
        <p className={styles.subtitle}>Cuéntame sobre tu proyecto o propuesta</p>
      </div>

      <div className={styles.grid}>
        {/* ── Formulario ── */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input
              id="name" name="name" type="text"
              placeholder="Tu nombre completo"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email" name="email" type="email"
              placeholder="correo@ejemplo.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Asunto</label>
            <input
              id="subject" name="subject" type="text"
              placeholder="¿En qué te puedo ayudar?"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message" name="message"
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {success && (
            <p className={styles.successMsg}>✓ ¡Mensaje enviado! Te responderé pronto.</p>
          )}
          {error && (
            <p className={styles.errorMsg}>✗ {error}</p>
          )}
        </form>

        {/* ── Info de contacto ── */}
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>O encuéntrame en</h2>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉</span>
            <span>hexdanher_dev@outlook.com</span>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <span>Colombia · Disponible remoto</span>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>⚡</span>
            <span>Respuesta en menos de 24h</span>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/daniel-hernando-hernandez-alarcon-376ab0405/?skipRedirect=true" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              LinkedIn
            </a>
            <a href="https://github.com/HexDanHer" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
