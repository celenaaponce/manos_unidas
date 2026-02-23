"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const stories = [
  {
    key: "door",
    title: "ICE en la puerta",
    description:
      "Historia social sobre qué hacer si ICE llega a su casa.",
    esFile: "/recursos/ICE at the door Spanish.pdf",
    enFile: "/recursos/ICE at the door.pdf",
    thumbnail: "/images/ice_door.png",
  },
  {
    key: "street",
    title: "ICE en la calle",
    description:
      "Historia social sobre qué hacer si ICE le detiene en la calle.",
    esFile: "/recursos/ICE in the street Spanish.pdf",
    enFile: "/recursos/ICE in the street.pdf",
    thumbnail: "/images/ice_street.png",
  },
  {
    key: "school",
    title: "ICE en la escuela",
    description:
      "Historia social sobre situaciones con ICE relacionadas a la escuela.",
    esFile: "/recursos/ICE in the school Spanish.pdf",
    enFile: "/recursos/ICE in the school.pdf",
    thumbnail: "/images/ice_school.png",
  },
  {
    key: "lovedone",
    title: "ICE tiene a un ser querido",
    description:
      "Historia social sobre qué hacer si ICE detiene a un familiar o ser querido.",
    esFile: "/recursos/ICE has your loved one Spanish.pdf",
    enFile: "/recursos/ICE has your loved one.pdf",
    thumbnail: "/images/ice_loved.png",
  },
];

// helpers: safely handle spaces in filenames
const safeUrl = (url) => encodeURI(url);

export default function HistoriasSocialesPage() {
  const defaultSelection = useMemo(() => {
    const first = stories[0];
    return {
      storyKey: first.key,
      lang: "es",
      title: `${first.title} (Español)`,
      file: first.esFile,
    };
  }, []);

  const [selected, setSelected] = useState(defaultSelection);

  const selectedFile = safeUrl(selected.file);
  const selectedTitle = selected.title;

  const handleSelect = (story, lang) => {
    const file = lang === "es" ? story.esFile : story.enFile;
    const titleSuffix = lang === "es" ? "(Español)" : "(English)";
    setSelected({
      storyKey: story.key,
      lang,
      title: `${story.title} ${titleSuffix}`,
      file,
    });

    // Scroll to viewer area for mobile friendliness
    requestAnimationFrame(() => {
      const el = document.getElementById("viewer");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className={styles.container}>
      <Link href="/inmigracion/recursos" className={styles.backLink}>
        ← Regresar a Recursos
      </Link>

      <h1 className={styles.title}>Historias sociales</h1>

      <p className={styles.subtitle}>
        Historias visuales para ayudar a familias sordas a prepararse para situaciones con ICE.
        Elija un tema y seleccione el idioma.
      </p>

      {/* GRID of stories */}
      <div className={styles.grid}>
        {stories.map((story) => {
          const isActive = selected.storyKey === story.key;

          return (
            <div key={story.key} className={styles.card}>
              <div className={styles.thumbnailContainer}>
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className={styles.thumbnail}
                />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{story.title}</div>
                <div className={styles.cardDescription}>{story.description}</div>

                <div className={styles.langButtons}>
                  <button
                    type="button"
                    onClick={() => handleSelect(story, "es")}
                    className={isActive && selected.lang === "es" ? styles.primaryButton : styles.secondaryButton}
                  >
                    🇲🇽 Español
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelect(story, "en")}
                    className={isActive && selected.lang === "en" ? styles.primaryButton : styles.secondaryButton}
                  >
                    🇺🇸 English
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ACTIONS for selected PDF */}
      <div id="viewer" className={styles.viewerBlock}>
        <h2 className={styles.sectionTitle}>📖 {selectedTitle}</h2>

        <div className={styles.actions}>
          <a
            href={selectedFile}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            🔎 Ver grande
          </a>

          <a href={selectedFile} download className={styles.secondaryButton}>
            ⬇️ Descargar
          </a>

          <a
            href={selectedFile}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            🖨️ Imprimir
          </a>
        </div>

        <div className={styles.viewer}>
          <iframe
            src={`${selectedFile}#toolbar=0`}
            className={styles.iframe}
            title={selectedTitle}
          />
        </div>
      </div>
    </div>
  );
}