"use client";

import Link from "next/link";
import styles from "./page.module.css";

const FILE_URL = "/recursos/KYR.pdf";

export default function TarjetasPage() {
  return (
    <div className={styles.container}>
      
      {/* Back */}
      <Link href="/inmigracion/recursos" className={styles.backLink}>
        ← Regresar a Recursos
      </Link>

      {/* Header */}
      <h1 className={styles.title}>
        Tarjetas Conozca Sus Derechos
      </h1>

      <p className={styles.subtitle}>
        Puede ver las tarjetas abajo o descargarlas para usarlas en su teléfono o imprimirlas.
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
          src={FILE_URL}
          className={styles.iframe}
          title="Tarjetas Conozca Sus Derechos"
        />
      </div>

    </div>
  );
}