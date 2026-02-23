"use client";

import styles from "../page.module.css";
import Link from "next/link";

const videos = [
  {
    title: "Corte de inmigración y conozca sus derechos",
    url: "https://www.youtube.com/watch?v=HtGJV_g29fo",
    thumbnail: "https://i.ytimg.com/vi/HtGJV_g29fo/maxresdefault.jpg",
    duration: "15:15",
  },
  {
    title: "Como hacer una cuenta de USCIS y pedir una FOIA",
    url: "https://www.youtube.com/watch?v=X2fXnSP6ANs",
    thumbnail: "https://i.ytimg.com/vi/X2fXnSP6ANs/maxresdefault.jpg",
    duration: "11:03",
  },
  {
    title: "Plan de Preparación Familiar",
    url: "https://www.youtube.com/watch?v=OrbPZZwx7xY",
    thumbnail: "https://i.ytimg.com/vi/OrbPZZwx7xY/maxresdefault.jpg",
    duration: "15:13",
  },
  {
    title: "Conozca sus derechos febrero 2025",
    url: "https://www.youtube.com/watch?v=eHJDHPEvsp4",
    thumbnail: "https://i.ytimg.com/vi/eHJDHPEvsp4/maxresdefault.jpg",
    duration: "22:52",
  },
  {
    title: "Conocer sus derechos enero 2025",
    url: "https://www.youtube.com/watch?v=7wyEMrD1jRM",
    thumbnail: "https://i.ytimg.com/vi/7wyEMrD1jRM/maxresdefault.jpg",
    duration: "26:14",
  },
  {
    title: "5 formas de apoyar a personas sordas inmigrantes",
    url: "https://www.youtube.com/watch?v=xo94tZfeNLA",
    thumbnail: "https://i.ytimg.com/vi/xo94tZfeNLA/maxresdefault.jpg",
    duration: "1:50",
  },
  {
    title: "Noticias importantes sobre ICE",
    url: "https://www.youtube.com/watch?v=FkBcJtoixkQ",
    thumbnail: "https://i.ytimg.com/vi/FkBcJtoixkQ/maxresdefault.jpg",
    duration: "0:42",
  },
  {
title: "Taller de como usar ReadyNow!",
url: "https://www.youtube.com/watch?v=yyvCc2JZN8o",
thumbnail: "https://i.ytimg.com/vi/yyvCc2JZN8o/maxresdefault.jpg",
duration: "44:12"
},
];

export default function TalleresEspanolPage() {
  return (
    <div className={styles.container}>
      
      {/* Back button */}
      <Link href="/inmigracion/talleres" className={styles.backLink}>
        ← Regresar a talleres
      </Link>

      <h1 className={styles.title}>Talleres en Español</h1>

      <p className={styles.subtitle}>
        Talleres y recursos sobre inmigración presentados en español.
      </p>

      <div className={styles.grid}>
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.thumbnailContainer}>
              <img
                src={video.thumbnail}
                alt={video.title}
                className={styles.thumbnail}
              />
              <span className={styles.duration}>
                {video.duration}
              </span>
            </div>

            <div className={styles.cardTitle}>
              {video.title}
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}