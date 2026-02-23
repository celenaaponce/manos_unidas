"use client";

import Link from "next/link";
import styles from "./page.module.css";

const categories = [
  {
    title: "Talleres en Español",
    description:
      "Talleres sobre inmigración presentados en español.",
    href: "/inmigracion/talleres/espanol",
    thumbnail:
      "https://i.ytimg.com/vi/HtGJV_g29fo/maxresdefault.jpg",
  },
  {
    title: "Talleres en Lengua de Señas",
    description:
      "Talleres presentados en ASL y otras lenguas de señas.",
    href: "/inmigracion/talleres/senas",
    thumbnail:
      "https://i.ytimg.com/vi/PQ6k3tcVPjk/maxresdefault.jpg",
  },
];

export default function TalleresPage() {
  return (
    <div className={styles.container}>
      
      {/* Back button */}
      <Link href="/inmigracion" className={styles.backLink}>
        ← Regresar a Inmigración
      </Link>

      <h1 className={styles.title}>
        Talleres
      </h1>

      <p className={styles.subtitle}>
        Talleres sobre inmigración en español y lengua de señas.
      </p>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.href}
            className={styles.card}
          >
            <div className={styles.thumbnailContainer}>
              <img
                src={category.thumbnail}
                alt={category.title}
                className={styles.thumbnail}
              />
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                {category.title}
              </div>

              <div className={styles.cardDescription}>
                {category.description}
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}