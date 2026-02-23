import classes from "../page.module.css";
import Link from "next/link";


const videos = [
  {
    title: "Conozca sus drechos enero 2025",
    url: "https://www.youtube.com/watch?v=7wyEMrD1jRM",
    thumbnail: "https://img.youtube.com/vi/7wyEMrD1jRM/hqdefault.jpg",
    duration: "26:14",
  },

  {
    title: "Conozca sus derechos febrero 2025",
    url: "https://www.youtube.com/watch?v=eHJDHPEvsp4",
    thumbnail: "https://img.youtube.com/vi/eHJDHPEvsp4/hqdefault.jpg",
    duration: "22:52",
  },

  {
    title: "Corte de inmigración y conozca sus derechos",
    url: "https://www.youtube.com/watch?v=HtGJV_g29fo",
    thumbnail: "https://img.youtube.com/vi/HtGJV_g29fo/hqdefault.jpg",
    duration: "15:15",
  },

  {
    title: "Cómo hacer una cuenta USCIS y pedir FOIA",
    url: "https://www.youtube.com/watch?v=X2fXnSP6ANs",
    thumbnail: "https://img.youtube.com/vi/X2fXnSP6ANs/hqdefault.jpg",
    duration: "11:03",
  },

  {
    title: "Registrar para Bond",
    url: "https://www.youtube.com/watch?v=G4Y0EXgfqdM",
    thumbnail: "https://img.youtube.com/vi/G4Y0EXgfqdM/hqdefault.jpg",
    duration: "3:35",
  },

  {
    title: "Noticias importantes sobre ICE",
    url: "https://www.youtube.com/watch?v=FkBcJtoixkQ",
    thumbnail: "https://img.youtube.com/vi/FkBcJtoixkQ/hqdefault.jpg",
    duration: "0:42",
  },

  {
    title: "Taller de IEPs Parte 1",
    url: "https://www.youtube.com/watch?v=9uCuV-TVRRM",
    thumbnail: "https://img.youtube.com/vi/9uCuV-TVRRM/hqdefault.jpg",
    duration: "44:15",
  },

  {
    title: "Taller de IEPs Parte 2",
    url: "https://www.youtube.com/watch?v=L0fqrfGNnys",
    thumbnail: "https://img.youtube.com/vi/L0fqrfGNnys/hqdefault.jpg",
    duration: "1:03:27",
  },

  {
    title: "Taller Universitario Parte 1",
    url: "https://www.youtube.com/watch?v=iDu-DoliIg0",
    thumbnail: "https://img.youtube.com/vi/iDu-DoliIg0/hqdefault.jpg",
    duration: "22:59",
  },

  {
    title: "Taller Universitario Parte 2",
    url: "https://www.youtube.com/watch?v=bmduU5PRQjU",
    thumbnail: "https://img.youtube.com/vi/bmduU5PRQjU/hqdefault.jpg",
    duration: "48:27",
  },

  {
    title: "Cómo llenar la FAFSA",
    url: "https://www.youtube.com/watch?v=eKgbsydsHqs",
    thumbnail: "https://img.youtube.com/vi/eKgbsydsHqs/hqdefault.jpg",
    duration: "17:40",
  },

  {
    title: "Lectura y Escritura para el hijo sordo",
    url: "https://www.youtube.com/watch?v=IyPsjJUhIVo",
    thumbnail: "https://img.youtube.com/vi/IyPsjJUhIVo/hqdefault.jpg",
    duration: "36:10",
  },

  {
    title: "Cómo leer a su hijo sordo",
    url: "https://www.youtube.com/watch?v=PirgLzr0BOA",
    thumbnail: "https://img.youtube.com/vi/PirgLzr0BOA/hqdefault.jpg",
    duration: "10:20",
  },

  {
    title: "Orientación de clases de manejo",
    url: "https://www.youtube.com/watch?v=RWbZQpuIyOI",
    thumbnail: "https://img.youtube.com/vi/RWbZQpuIyOI/hqdefault.jpg",
    duration: "8:56",
  },

  {
    title: "Apps para comunicar sin señas",
    url: "https://www.youtube.com/watch?v=nUKZLeTKNPU",
    thumbnail: "https://img.youtube.com/vi/nUKZLeTKNPU/hqdefault.jpg",
    duration: "7:18",
  },

  {
    title: "Cómo usar nuestra app",
    url: "https://www.youtube.com/watch?v=LWkaBaDeIRA",
    thumbnail: "https://img.youtube.com/vi/LWkaBaDeIRA/hqdefault.jpg",
    duration: "4:11",
  },

  {
    title: "Cómo entrar Google Classroom",
    url: "https://www.youtube.com/watch?v=v8GzmYNpYTc",
    thumbnail: "https://img.youtube.com/vi/v8GzmYNpYTc/hqdefault.jpg",
    duration: "4:22",
  },

  {
    title: "Cómo verificar su cuenta de teléfono de video",
    url: "https://www.youtube.com/watch?v=MdjE1TAWH1Y",
    thumbnail: "https://img.youtube.com/vi/MdjE1TAWH1Y/hqdefault.jpg",
    duration: "2:38",
  },

  {
    title: "Cómo quitar reacciones en iPhone y iMac",
    url: "https://www.youtube.com/watch?v=nUOnJ1WLxV0",
    thumbnail: "https://img.youtube.com/vi/nUOnJ1WLxV0/hqdefault.jpg",
    duration: "2:09",
  },

  {
    title: "Subtítulos con Disney",
    url: "https://www.youtube.com/watch?v=o7Cj2dA3T94",
    thumbnail: "https://img.youtube.com/vi/o7Cj2dA3T94/hqdefault.jpg",
    duration: "6:40",
  },

  {
    title: "Recursos para translación",
    url: "https://www.youtube.com/watch?v=5rFHkzUWsrU",
    thumbnail: "https://img.youtube.com/vi/5rFHkzUWsrU/hqdefault.jpg",
    duration: "3:55",
  },

  {
    title: "Tour de SWCD",
    url: "https://www.youtube.com/watch?v=Bmi5H9in1WM",
    thumbnail: "https://img.youtube.com/vi/Bmi5H9in1WM/hqdefault.jpg",
    duration: "1:31:00",
  },
  {
    title: "PBSkids con ASL",
    url: "https://www.youtube.com/watch?v=ypJdU1cdy90",
    thumbnail: "https://img.youtube.com/vi/ypJdU1cdy90/hqdefault.jpg",
    duration: "1:28",
  },

  {
    title: "¿Qué es privación de idioma?",
    url: "https://www.youtube.com/watch?v=Lgd84XQvbXI",
    thumbnail: "https://img.youtube.com/vi/Lgd84XQvbXI/hqdefault.jpg",
    duration: "2:03",
  },

  {
    title: "De teléfono a televisión",
    url: "https://www.youtube.com/watch?v=NhWipZnYRjs",
    thumbnail: "https://img.youtube.com/vi/NhWipZnYRjs/hqdefault.jpg",
    duration: "5:21",
  },

  {
    title: "Conozca sus derechos de forma sencilla (español y ASL)",
    url: "https://www.youtube.com/watch?v=7wfi4zrefqI",
    thumbnail: "https://img.youtube.com/vi/7wfi4zrefqI/hqdefault.jpg",
    duration: "6:02",
  },

  {
    title: "Lectura y Escritura: Estrategias para el hijo sordo",
    url: "https://www.youtube.com/watch?v=IyPsjJUhIVo",
    thumbnail: "https://img.youtube.com/vi/IyPsjJUhIVo/hqdefault.jpg",
    duration: "36:10",
  },

  {
    title: "Taller de cómo usar ReadyNow!",
    url: "https://www.youtube.com/watch?v=yyvCc2JZN8o",
    thumbnail: "https://img.youtube.com/vi/yyvCc2JZN8o/hqdefault.jpg",
    duration: "44:12",
  },

  {
    title: "Plática con Audióloga Dra. Génesis Politrón",
    url: "https://www.youtube.com/watch?v=R4U22WpvHAg",
    thumbnail: "https://img.youtube.com/vi/R4U22WpvHAg/hqdefault.jpg",
    duration: "1:35:59",
  },

  {
    title: "Taller de sordos con autismo",
    url: "https://www.youtube.com/watch?v=DRhdjk7WizQ",
    thumbnail: "https://img.youtube.com/vi/DRhdjk7WizQ/hqdefault.jpg",
    duration: "1:54:55",
  },
];

export default function TalleresPage() {
  return (
    <main className={classes.main}>
      <Link href="/aprender-asl/videos" className={classes.backLink}>
        ← Volver a Videos educativos
      </Link>

      <h1 className={classes.title}>Talleres y Recursos</h1>

      <p className={classes.subtitle}>
        Talleres y recursos educativos para familias.
      </p>

      {/* THIS is the important part */}
      <div className={classes.cardGrid}>
        {videos.map((video) => (
          <a
            key={video.url}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.card}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className={classes.thumbnail}
            />

            <div className={classes.cardContent}>
              <h3 className={classes.cardTitle}>{video.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
