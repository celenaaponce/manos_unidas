"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

import iphone from "public/images/iphone.png";
import android from "public/images/android.png";

const IOS_URL =
  "https://apps.apple.com/us/app/hands-united-oregon/id6747975975";

const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.createcommunity.handsunitedoregon&pcampaignid=web_share";

export default function AplicacionPage() {
  return (
    <div className={styles.container}>
      
      {/* Back */}
      <Link href="/programas" className={styles.backLink}>
        ← Regresar a Programas
      </Link>

      <h1 className={styles.title}>
        Aplicación Hands United
      </h1>

      <p className={styles.subtitle}>
        ¿Qué tipo de teléfono tiene?
      </p>

      <div className={styles.grid}>

        {/* Android */}
        <a
          href={ANDROID_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <Image
            src={android}
            alt="Android"
            className={styles.image}
          />

          <div className={styles.cardTitle}>
            Android
          </div>

          <div className={styles.cardDescription}>
            Abrir en Google Play
          </div>
        </a>

        {/* iPhone */}
        <a
          href={IOS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <Image
            src={iphone}
            alt="iPhone"
            className={styles.image}
          />

          <div className={styles.cardTitle}>
            iPhone
          </div>

          <div className={styles.cardDescription}>
            Abrir en App Store
          </div>
        </a>

      </div>

    </div>
  );
}