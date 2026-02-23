"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function ManejoRecursosPage() {
  return (
    <div className={styles.container}>
      
      {/* Back */}
      <Link href="/programas/manejo" className={styles.backLink}>
        ← Regresar a Manejo
      </Link>

      <h1 className={styles.title}>
        Recursos para clases de manejo
      </h1>

      <p className={styles.subtitle}>
        Información sobre las clases de permiso de manejo accesibles en ASL.
      </p>

      {/* Register button */}
      <div className={styles.registerBlock}>
        <Link
          href="/programas/manejo/permiso"
          className={styles.primaryButton}
        >
          📝 Registrarse para la clase
        </Link>
      </div>

      {/* Info sections */}

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          👤 ¿Quién puede tomar la clase?
        </h2>

        <ul className={styles.list}>
          <li>Personas sordas o sordos parciales</li>
          <li>Estudiantes que usan ASL</li>
          <li>Jóvenes que quieren obtener su permiso</li>
          <li>Adultos que quieren aprender a manejar</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          🤟 Idiomas
        </h2>

        <ul className={styles.list}>
          <li>Lengua de Señas Americana (ASL)</li>
          <li>Apoyo en español disponible</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          📚 Qué incluye la clase
        </h2>

        <ul className={styles.list}>
          <li>Explicación de señales de tráfico</li>
          <li>Reglas de la carretera</li>
          <li>Preparación para el examen del permiso</li>
          <li>Clases completamente accesibles en ASL</li>
          
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          📍 Ubicación
        </h2>

        <p className={styles.text}>
          Las clases son virtuales por Zoom.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          ❓ Preguntas
        </h2>

        <p className={styles.text}>
          Si tiene preguntas, puede contactarnos.
        </p>

        <a
          href="mailto:celena.a.ponce@gmail.com"
          className={styles.secondaryButton}
        >
          ✉️ Enviar correo
        </a>
      </div>

    </div>
  );
}