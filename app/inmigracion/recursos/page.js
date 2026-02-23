"use client";

import Link from "next/link";
import styles from "./page.module.css";

const recursos = [
  {
    title: "Tarjetas Conozca Sus Derechos",
    description:
      "Tarjetas visuales para mostrar si habla con policía o inmigración.",
    href: "/inmigracion/recursos/tarjetas",
    thumbnail:
      "/images/kyrtarjeta.png",
  },
  {
    title: "Tableros de comunicación",
    description:
      "Herramientas visuales para comunicarse sin usar voz.",
    href: "/inmigracion/recursos/tablero",
    thumbnail:
      "/images/commun.png",
  },
  {
    title: "Plan de preparación familiar",
    description:
      "Prepare documentos importantes en caso de emergencia.",
    href: "/inmigracion/recursos/plan",
    thumbnail:
      "/images/plan.png",
  },
  {
    title: "Historias sociales",
    description:
      "Explicaciones visuales sobre encuentros con inmigración.",
    href: "/inmigracion/recursos/historias",
    thumbnail:
      "/images/socialstory.png",
  },
];

export default function RecursosPage() {
  return (
    <div className={styles.container}>
      
      {/* Back button */}
      <Link href="/inmigracion" className={styles.backLink}>
        ← Regresar a Inmigración
      </Link>

      <h1 className={styles.title}>
        Recursos
      </h1>

      <p className={styles.subtitle}>
        Herramientas visuales para ayudar a familias sordas inmigrantes.
      </p>

      <div className={styles.grid}>
        {recursos.map((recurso, index) => (
          <Link
            key={index}
            href={recurso.href}
            className={styles.card}

            rel="noopener noreferrer"
          >
            <div className={styles.thumbnailContainer}>
              <img
                src={recurso.thumbnail}
                alt={recurso.title}
                className={styles.thumbnail}
              />
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                {recurso.title}
              </div>

              <div className={styles.cardDescription}>
                {recurso.description}
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}