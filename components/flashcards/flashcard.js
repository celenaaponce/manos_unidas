"use client";
import styles from "./flashcard.module.css";

export default function Flashcard({ flashcard, onWatch }) {

  function handleClick() {
    if (flashcard.link && onWatch) {
      onWatch(flashcard.link);
    }
  }

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {/* IMAGE */}
      <div className={styles.image}>
        {flashcard.image && (
          <img
            src={flashcard.image}
            alt={flashcard.word}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }}
          />
        )}

        {flashcard.link && (
          <div className={styles.watchOverlay}>
            🎥 Ver
          </div>
        )}
      </div>

      {/* WORD + SYNONYMS */}
      <div className={styles.headerText}>
        <h2>{flashcard.word}</h2>

        {flashcard.synonyms?.length > 0 && (
          <div className={styles.synonyms}>
            <span className={styles.synonymLabel}>
              Sinónimos:
            </span>{" "}
            {flashcard.synonyms.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}