import classes from "./page.module.css";
import curr from "public/images/curriculum.png";

const cursos = [
  {
    name: "ASL Nivel 1",
    description:
      "Empiece aquí si es principiante. Aprenda vocabulario básico, introducciones y conversaciones simples.",
    href: "https://www.youtube.com/playlist?list=PLAsRcYXV-4XBBZ_EkOUe_3Zi-fzMLda40",
    thumbnail:
      "/images/curriculum.png",
  },
  {
    name: "ASL Nivel 2+",
    description:
      "Continúe después de completar Nivel 1. Aprenda conversaciones más avanzadas y gramática en ASL.",
    href: "https://www.youtube.com/playlist?list=PLAsRcYXV-4XDPnO4vYcqzRSA4SIy3CRwl",
    thumbnail:
      "/images/curriculum.png",
  },
];

export default function ClasesGrabadasPage() {
  return (
    <main className={classes.main}>
      <section className={classes.headerBlock}>
        <h1 className={classes.title}>
          Clases grabadas
        </h1>

        <p className={classes.subtitle}>
          Estas son nuestras clases oficiales organizadas por nivel.
          Recomendamos empezar con Nivel 1 y continuar en orden.
        </p>
      </section>

      <section className={classes.cardGrid}>
        {cursos.map((curso) => (
          <a
            key={curso.name}
            href={curso.href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.card}
          >
            <img
              src={curso.thumbnail}
              alt={curso.name}
              className={classes.thumbnail}
            />

            <h2 className={classes.cardTitle}>
              {curso.name}
            </h2>

            <p className={classes.description}>
              {curso.description}
            </p>

            <p className={classes.cta}>
              Ver clases →
            </p>
          </a>
        ))}
      </section>
    </main>
  );
}