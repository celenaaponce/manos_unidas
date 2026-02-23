"use client";
import styles from "./flashcard.module.css";
import React, { useState } from "react";
import Image from "next/image";

export default function Flashcard({ flashcard }) {

  const [flip, setFlip] = useState(false);

  function getEmbedUrl(link) {
    if (!link) return "";

    let videoId = "";

    // Handle youtu.be links
    if (link.includes("youtu.be/")) {
      videoId = link.split("youtu.be/")[1].split("?")[0];
    }

    // Handle watch?v= links
    else if (link.includes("watch?v=")) {
      videoId = link.split("watch?v=")[1].split("&")[0];
    }

    // Handle shorts links
    else if (link.includes("shorts/")) {
      videoId = link.split("shorts/")[1].split("?")[0];
    }

    // Handle already embed links
    else if (link.includes("embed/")) {
      videoId = link.split("embed/")[1].split("?")[0];
    }

    if (!videoId) return "";

    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
  }

  const url = getEmbedUrl(flashcard.link);

  const addedName = `${styles.card} ${flip ? styles.flip : ""}`;

  return (
    <div className={addedName} onClick={() => setFlip(!flip)}>

      {/* FRONT */}
      <div className={styles.front}>
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
        </div>

        <div className={styles.headerText}>
          <h2>{flashcard.word}</h2>
          <p style={{ textAlign: "right" }}>Mirar otro lado →</p>
        </div>
      </div>

      {/* BACK */}
      <div className={styles.back}>

        {url && (
          <iframe
            loading="lazy"
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {flashcard.synonyms?.length > 0 && (
          <div className={styles.summary}>
            <p>Sinónimos:</p> {flashcard.synonyms[0]}
          </div>
        )}

      </div>

    </div>
  );
}