import Link from "next/link";
import classes from "../page.module.css";
const videos = [

{
title: "Cómo hacer introducciones en ASL",
url: "https://www.youtube.com/watch?v=oRilddFon-w",
thumbnail: "https://img.youtube.com/vi/oRilddFon-w/hqdefault.jpg",
duration: "40:44",
},

{
title: "Tipos de preguntas en ASL",
url: "https://www.youtube.com/watch?v=WKaI-EVspGQ",
thumbnail: "https://img.youtube.com/vi/WKaI-EVspGQ/hqdefault.jpg",
duration: "28:43",
},

{
title: "ASL Sí – Lección 1",
url: "https://www.youtube.com/watch?v=nPRuRare3ns",
thumbnail: "https://img.youtube.com/vi/nPRuRare3ns/hqdefault.jpg",
duration: "29:07",
},

{
title: "ASL Sí – Lección 2",
url: "https://www.youtube.com/watch?v=RnD_IzjRT-A",
thumbnail: "https://img.youtube.com/vi/RnD_IzjRT-A/hqdefault.jpg",
duration: "27:03",
},
{
title: "Lección 3",
url: "https://www.youtube.com/watch?v=mFm9eyUnWSY",
thumbnail: "https://img.youtube.com/vi/mFm9eyUnWSY/hqdefault.jpg",
duration: "14:43",
},

{
title: "Lección 4",
url: "https://www.youtube.com/watch?v=mdPNfJkWfdQ",
thumbnail: "https://img.youtube.com/vi/mdPNfJkWfdQ/hqdefault.jpg",
duration: "22:34",
},

];

export default function ConversacionPage() {
  return (
    <main className={classes.main}>
      <Link href="/aprender-asl/videos" className={classes.backLink}>
        ← Volver a Videos educativos
      </Link>

      <section className={classes.headerBlock}>
        <h1 className={classes.title}>Conversación básica</h1>

        <p className={classes.subtitle}>
          Aprenda frases esenciales para comunicarse en ASL.
        </p>
      </section>

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
