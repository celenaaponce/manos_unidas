"use client";

import Link from "next/link";
import styles from "./page.module.css";

const FILE_URL = "/recursos/Family-Preparedness-Packet-2025-ENG_SPAform.pdf";
// Replace with your actual YouTube video ID
const VIDEO_ID = "OrbPZZwx7xY";

export default function PlanPage() {
  return (
    <div className={styles.container}>
      
      <Link href="/inmigracion/recursos" className={styles.backLink}>
        ← Regresar a Recursos
      </Link>

      <h1 className={styles.title}>
        Plan de preparación familiar
      </h1>

      <p className={styles.subtitle}>
        Este documento le ayuda a preparar información importante para proteger a su familia en caso de emergencia.
      </p>

      {/* VIDEO SECTION */}
      <div className={styles.videoSection}>

        <h2 className={styles.sectionTitle}>
          🎥 Video: Cómo llenar el plan
        </h2>

        <p className={styles.sectionDescription}>
          Vea este video donde explicamos paso a paso cómo completar el documento.
        </p>

        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="Cómo llenar el plan de preparación familiar"
            allowFullScreen
            className={styles.video}
          />
        </div>

      </div>

      {/* BUTTONS */}
      <div className={styles.actions}>

        <a
          href={FILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryButton}
        >
          🔎 Ver grande
        </a>

        <a
          href={FILE_URL}
          download
          className={styles.secondaryButton}
        >
          ⬇️ Descargar
        </a>

        <a
          href={FILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryButton}
        >
          🖨️ Imprimir
        </a>

      </div>

      {/* PDF VIEWER */}
      <div className={styles.viewer}>
        <iframe
          src={`${FILE_URL}#toolbar=0`}
          className={styles.iframe}
          title="Plan de preparación familiar"
        />
      </div>

    </div>
  );
}