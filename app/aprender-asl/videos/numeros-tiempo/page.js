import Link from "next/link";
import classes from "../page.module.css";
const videos = [

{
title: "Incorporación de Números",
url: "https://www.youtube.com/watch?v=b5p5eTdcJOE",
thumbnail: "https://img.youtube.com/vi/b5p5eTdcJOE/hqdefault.jpg",
duration: ""
},

{
title: "Como hablar de tiempo",
url: "https://www.youtube.com/watch?v=kB4Hr607sUk",
thumbnail: "https://img.youtube.com/vi/kB4Hr607sUk/hqdefault.jpg",
duration: ""
},


];

export default function Page() {
  return (
    <main className={classes.main}>
      <Link href="/aprender-asl/videos" className={classes.backLink}>
        ← Volver a Videos educativos
      </Link>
      <h1 className={classes.title}>Números y tiempo</h1>

      <p className={classes.subtitle}>
        Aprenda a usar números, fechas y tiempo en ASL.
      </p>

      <section className={classes.cardGrid}>
        {videos.map((video) => (
          <a
            key={video.url}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.card}
          >
            <div className={classes.thumbnailWrapper}>
              <img
                src={video.thumbnail}
                className={classes.thumbnail}
                alt={video.title}
              />
              <span className={classes.duration}>{video.duration}</span>
            </div>

            <div className={classes.cardContent}>
              <h3 className={classes.cardTitle}>{video.title}</h3>
              <p className={classes.cta}>Ver video →</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
