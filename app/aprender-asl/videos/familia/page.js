import Link from "next/link";
import classes from "../page.module.css";
const videos = [

{
title: "Clase de familia",
url: "https://www.youtube.com/watch?v=1JRctT0UksA",
thumbnail: "https://img.youtube.com/vi/1JRctT0UksA/hqdefault.jpg",
duration: "27:51",
},

{
title: "Clase de sentimientos",
url: "https://www.youtube.com/watch?v=AqUMo0MpAu8",
thumbnail: "https://img.youtube.com/vi/AqUMo0MpAu8/hqdefault.jpg",
duration: "14:54",
},

{
title: "Clase de sentimientos 2",
url: "https://www.youtube.com/watch?v=CDjBIN5MyuA",
thumbnail: "https://img.youtube.com/vi/CDjBIN5MyuA/hqdefault.jpg",
duration: "16:20",
},

{
title: "Emociones y sentimientos",
url: "https://www.youtube.com/watch?v=_nCGDOaXy8s",
thumbnail: "https://img.youtube.com/vi/_nCGDOaXy8s/hqdefault.jpg",
duration: "8:14",
},

{
title: "Clase del Día de las Madres",
url: "https://www.youtube.com/watch?v=hf_C7G4fI4I",
thumbnail: "https://img.youtube.com/vi/hf_C7G4fI4I/hqdefault.jpg",
duration: "14:45",
},

{
title: "Cómo hablar de tiempo",
url: "https://www.youtube.com/watch?v=kB4Hr607sUk",
thumbnail: "https://img.youtube.com/vi/kB4Hr607sUk/hqdefault.jpg",
duration: "42:41",
},

{
title: "Incorporación de números",
url: "https://www.youtube.com/watch?v=b5p5eTdcJOE",
thumbnail: "https://img.youtube.com/vi/b5p5eTdcJOE/hqdefault.jpg",
duration: "35:16",
},

{
title: "Frutas y verduras",
url: "https://www.youtube.com/watch?v=NzGYsSZ0fnQ",
thumbnail: "https://img.youtube.com/vi/NzGYsSZ0fnQ/hqdefault.jpg",
duration: "2:29",
},

{
title: "Hora de comer",
url: "https://www.youtube.com/watch?v=q7QTDovFA74",
thumbnail: "https://img.youtube.com/vi/q7QTDovFA74/hqdefault.jpg",
duration: "0:56",
},

{
title: "Métodos de cocinar",
url: "https://www.youtube.com/watch?v=VE1q_9JzXuo",
thumbnail: "https://img.youtube.com/vi/VE1q_9JzXuo/hqdefault.jpg",
duration: "2:16",
},

{
title: "Bañarse",
url: "https://www.youtube.com/watch?v=qp9jl0ECUwA",
thumbnail: "https://img.youtube.com/vi/qp9jl0ECUwA/hqdefault.jpg",
duration: "1:11",
},

{
title: "Hora de bañar",
url: "https://www.youtube.com/watch?v=4TmdTAaPYdA",
thumbnail: "https://img.youtube.com/vi/4TmdTAaPYdA/hqdefault.jpg",
duration: "2:38",
},

{
title: "Cómo poner límite de pantalla",
url: "https://www.youtube.com/watch?v=o5pF-uHr9jw",
thumbnail: "https://img.youtube.com/vi/o5pF-uHr9jw/hqdefault.jpg",
duration: "43:18",
},

{
title: "Cómo leer a su hijo sordo",
url: "https://www.youtube.com/watch?v=PirgLzr0BOA",
thumbnail: "https://img.youtube.com/vi/PirgLzr0BOA/hqdefault.jpg",
duration: "10:20",
},

{
title: "Charla de bebé",
url: "https://www.youtube.com/watch?v=62NbByFKX7Y",
thumbnail: "https://img.youtube.com/vi/62NbByFKX7Y/hqdefault.jpg",
duration: "1:50",
},

];

export default function Page() {
  return (
    <main className={classes.main}>
      <Link href="/aprender-asl/videos" className={classes.backLink}>
        ← Volver a Videos educativos
      </Link>
      <h1 className={classes.title}>Familia y vida diaria</h1>

      <p className={classes.subtitle}>
        Aprenda señas relacionadas con familia, emociones y vida diaria.
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
