import Link from "next/link";
import classes from "../page.module.css";
const videos = [

{
title: "La historia de ASL",
url: "https://www.youtube.com/watch?v=Pt2_EjmtUp8",
thumbnail: "https://img.youtube.com/vi/Pt2_EjmtUp8/hqdefault.jpg",
duration: "4:20",
},

{
title: "Clase de Día de los Muertos",
url: "https://www.youtube.com/watch?v=b2-UyNTO-zI",
thumbnail: "https://img.youtube.com/vi/b2-UyNTO-zI/hqdefault.jpg",
duration: "12:07",
},

{
title: "Día de independencia EEUU ASL",
url: "https://www.youtube.com/watch?v=MTQjBgSCHJw",
thumbnail: "https://img.youtube.com/vi/MTQjBgSCHJw/hqdefault.jpg",
duration: "2:21",
},

{
title: "Día de independencia EEUU ASL con fotos",
url: "https://www.youtube.com/watch?v=Ha0TA5Fx4I4",
thumbnail: "https://img.youtube.com/vi/Ha0TA5Fx4I4/hqdefault.jpg",
duration: "2:21",
},

{
title: "Señas del 4 de julio",
url: "https://www.youtube.com/watch?v=_iRNKevWNXA",
thumbnail: "https://img.youtube.com/vi/_iRNKevWNXA/hqdefault.jpg",
duration: "5:10",
},

{
title: "Señas del 4 de julio",
url: "https://www.youtube.com/watch?v=Is4tYFRKmhU",
thumbnail: "https://img.youtube.com/vi/Is4tYFRKmhU/hqdefault.jpg",
duration: "4:06",
},

{
title: "Silent Dinner con español",
url: "https://www.youtube.com/watch?v=pKmaGwUBScA",
thumbnail: "https://img.youtube.com/vi/pKmaGwUBScA/hqdefault.jpg",
duration: "4:59",
},

{
title: "Una chica como Ananya",
url: "https://www.youtube.com/watch?v=ce7ftN5dVJs",
thumbnail: "https://img.youtube.com/vi/ce7ftN5dVJs/hqdefault.jpg",
duration: "4:39",
},

{
title: "Historia de Pascua",
url: "https://www.youtube.com/watch?v=RONMK52bc8w",
thumbnail: "https://img.youtube.com/vi/RONMK52bc8w/hqdefault.jpg",
duration: "9:42",
},

{
title: "Todos hacen caca",
url: "https://www.youtube.com/watch?v=k3RtcrTMl-Q",
thumbnail: "https://img.youtube.com/vi/k3RtcrTMl-Q/hqdefault.jpg",
duration: "9:36",
},

{
title: "Cuento del día de San Valentín",
url: "https://www.youtube.com/watch?v=3qZMFvY7uZ0",
thumbnail: "https://img.youtube.com/vi/3qZMFvY7uZ0/hqdefault.jpg",
duration: "8:52",
},

{
title: "Cómo dicen buenas noches los dinosaurios",
url: "https://www.youtube.com/watch?v=wQCkUbaZLQQ",
thumbnail: "https://img.youtube.com/vi/wQCkUbaZLQQ/hqdefault.jpg",
duration: "8:42",
},

{
title: "El libro de colores de coneja blanca",
url: "https://www.youtube.com/watch?v=2qgjqhVc5Aw",
thumbnail: "https://img.youtube.com/vi/2qgjqhVc5Aw/hqdefault.jpg",
duration: "7:19",
},

{
title: "Cuento de Halloween",
url: "https://www.youtube.com/watch?v=Bhqg_XfKif0",
thumbnail: "https://img.youtube.com/vi/Bhqg_XfKif0/hqdefault.jpg",
duration: "7:09",
},

{
title: "Turkey Trouble",
url: "https://www.youtube.com/watch?v=TjEJVm4imlY",
thumbnail: "https://img.youtube.com/vi/TjEJVm4imlY/hqdefault.jpg",
duration: "6:44",
},

{
title: "Si llevas un ratón a la escuela",
url: "https://www.youtube.com/watch?v=HA29CwpR_-0",
thumbnail: "https://img.youtube.com/vi/HA29CwpR_-0/hqdefault.jpg",
duration: "6:36",
},

{
title: "¡Más helado!",
url: "https://www.youtube.com/watch?v=t-5QPj5hblk",
thumbnail: "https://img.youtube.com/vi/t-5QPj5hblk/hqdefault.jpg",
duration: "4:29",
},

{
title: "Veo la primavera",
url: "https://www.youtube.com/watch?v=spE7JQHC9Zw",
thumbnail: "https://img.youtube.com/vi/spE7JQHC9Zw/hqdefault.jpg",
duration: "4:26",
},

{
title: "La araña muy ocupada",
url: "https://www.youtube.com/watch?v=mkgxSLa_QFE",
thumbnail: "https://img.youtube.com/vi/mkgxSLa_QFE/hqdefault.jpg",
duration: "4:24",
},

{
title: "Conejo blanco y los colores",
url: "https://www.youtube.com/watch?v=xqJVGpVjJZg",
thumbnail: "https://img.youtube.com/vi/xqJVGpVjJZg/hqdefault.jpg",
duration: "4:08",
},

{
title: "Muñecas de nieve por la noche",
url: "https://www.youtube.com/watch?v=zLrhnfSa8cc",
thumbnail: "https://img.youtube.com/vi/zLrhnfSa8cc/hqdefault.jpg",
duration: "3:44",
},

{
title: "¡Feliz día de San Valentín ratón!",
url: "https://www.youtube.com/watch?v=ZOR8kpbk4m4",
thumbnail: "https://img.youtube.com/vi/ZOR8kpbk4m4/hqdefault.jpg",
duration: "3:13",
},

{
title: "Océano colorido",
url: "https://www.youtube.com/watch?v=Z-qNfedG3Hk",
thumbnail: "https://img.youtube.com/vi/Z-qNfedG3Hk/hqdefault.jpg",
duration: "3:13",
},

{
title: "Spot ama a su mamá",
url: "https://www.youtube.com/watch?v=TzYfajBnCAQ",
thumbnail: "https://img.youtube.com/vi/TzYfajBnCAQ/hqdefault.jpg",
duration: "3:08",
},

{
title: "¿Eres una vaca?",
url: "https://www.youtube.com/watch?v=HAg4ZxjU1w8",
thumbnail: "https://img.youtube.com/vi/HAg4ZxjU1w8/hqdefault.jpg",
duration: "2:45",
},
{
title: "ASL invierno, navidad, año nuevo, 3 reyes",
url: "https://www.youtube.com/watch?v=lIChqilzqRQ",
thumbnail: "https://img.youtube.com/vi/lIChqilzqRQ/hqdefault.jpg",
duration: "56:26",
},

{
title: "Vocabulario del día de San Valentín",
url: "https://www.youtube.com/watch?v=0mZlHq60uQ0",
thumbnail: "https://img.youtube.com/vi/0mZlHq60uQ0/hqdefault.jpg",
duration: "27:01",
},

{
title: "Vocabulario de Halloween",
url: "https://www.youtube.com/watch?v=prquPHmJ3Wk",
thumbnail: "https://img.youtube.com/vi/prquPHmJ3Wk/hqdefault.jpg",
duration: "7:57",
},

{
title: "Vocabulario del verano",
url: "https://www.youtube.com/watch?v=hlxOFQfKNwY",
thumbnail: "https://img.youtube.com/vi/hlxOFQfKNwY/hqdefault.jpg",
duration: "7:09",
},

{
title: "Palabras de Navidad",
url: "https://www.youtube.com/watch?v=0Fq2sIfjA5M",
thumbnail: "https://img.youtube.com/vi/0Fq2sIfjA5M/hqdefault.jpg",
duration: "8:05",
},
{
title: "Clase de otoño",
url: "https://www.youtube.com/watch?v=AHab6D0KICM",
thumbnail: "https://img.youtube.com/vi/AHab6D0KICM/hqdefault.jpg",
duration: "27:32",
},

{
title: "Clase de verano",
url: "https://www.youtube.com/watch?v=hJTinPGiXFs",
thumbnail: "https://img.youtube.com/vi/hJTinPGiXFs/hqdefault.jpg",
duration: "34:55",
},

{
title: "Clase de primavera y pascua",
url: "https://www.youtube.com/watch?v=DbiUhmKwKQY",
thumbnail: "https://img.youtube.com/vi/DbiUhmKwKQY/hqdefault.jpg",
duration: "16:17",
},

{
title: "Clase de Pascua",
url: "https://www.youtube.com/watch?v=stPphI_xp2I",
thumbnail: "https://img.youtube.com/vi/stPphI_xp2I/hqdefault.jpg",
duration: "23:11",
},

{
title: "Clase de Día de Acción de Gracias",
url: "https://www.youtube.com/watch?v=rSC_mCMthsQ",
thumbnail: "https://img.youtube.com/vi/rSC_mCMthsQ/hqdefault.jpg",
duration: "1:06:35",
},

{
title: "Clase de Día de las Madres",
url: "https://www.youtube.com/watch?v=hf_C7G4fI4I",
thumbnail: "https://img.youtube.com/vi/hf_C7G4fI4I/hqdefault.jpg",
duration: "14:45",
},

{
title: "Clase de Halloween en ASL",
url: "https://www.youtube.com/watch?v=FJJtAwElGWM",
thumbnail: "https://img.youtube.com/vi/FJJtAwElGWM/hqdefault.jpg",
duration: "45:11",
},

];

export default function Page() {
  return (
    <main className={classes.main}>
      <Link href="/aprender-asl/videos" className={classes.backLink}>
        ← Volver a Videos educativos
      </Link>
      <h1 className={classes.title}>Cultura y clases temáticas</h1>

      <p className={classes.subtitle}>
        Explora clases culturales, y temas especiales en ASL.
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
