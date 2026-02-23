"use client";

import Link from "next/link";
import styles from "./page.module.css";

const cards = [
  {
    title: "Clases para el permiso (ASL)",
    description:
      "Clases en ASL para prepararse para el examen del permiso de manejo.",
    href: "/programas/manejo/permiso",
    thumbnail: "/images/permiso.png",
  },
  {
    title: "Recursos y preguntas frecuentes",
    description:
      "Información clave, requisitos por estado y respuestas rápidas.",
    href: "/programas/manejo/recursos",
    thumbnail: "/images/faq.png",
  },
];

export default function ManejoPage() {
  return (
    <div className={styles.container}>
      {/* Back button */}
      <Link href="/programas" className={styles.backLink}>
        ← Regresar a Programas
      </Link>

      <h1 className={styles.title}>Manejo</h1>

      <p className={styles.subtitle}>
        Clases y apoyo para ayudar a la comunidad sorda a prepararse para manejar.
      </p>

      <div className={styles.grid}>
        {cards.map((card, index) => (
          <Link key={index} href={card.href} className={styles.card}>
            <div className={styles.thumbnailContainer}>
              <img
                src={card.thumbnail}
                alt={card.title}
                className={styles.thumbnail}
              />
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardDescription}>{card.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}