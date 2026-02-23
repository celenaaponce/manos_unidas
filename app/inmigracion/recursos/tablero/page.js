"use client";

import Link from "next/link";
import styles from "./page.module.css";

const FILE_URL = "/recursos/ICE communication.pdf";

export default function TablerosPage() {
  return (
    <div className={styles.container}>
      
      {/* Back */}
      <Link href="/inmigracion/recursos" className={styles.backLink}>
        ← Regresar a Recursos
      </Link>

      {/* Header */}
      <h1 className={styles.title}>
        Tableros de comunicación
      </h1>

      <p className={styles.subtitle}>
        Este tablero puede ayudarle a comunicarse con policía o inmigración usando imágenes.
      </p>

      {/* Buttons */}
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

      {/* Embedded PDF */}
      <div className={styles.viewer}>
        <iframe
          src={`${FILE_URL}#toolbar=0`}
          className={styles.iframe}
          title="Tableros de comunicación"
        />
      </div>

    </div>
  );
}