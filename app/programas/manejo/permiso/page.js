"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function PermisoPage() {
  return (
    <div className={styles.container}>
      
      <Link href="/programas/manejo" className={styles.backLink}>
        ← Regresar a Manejo
      </Link>

      <h1 className={styles.title}>
        Registrarse para la clase de permiso
      </h1>

      <p className={styles.subtitle}>
        Complete este formulario para registrarse en la clase de permiso en ASL.
      </p>

      <div className={styles.viewer}>
        <iframe
          src="https://celenaponce.aidaform.com/permit-class-registration-march-2026"
          className={styles.iframe}
          title="Registro para clase de permiso"
        />
      </div>

    </div>
  );
}