import Link from "next/link";
import classes from "./page.module.css";

const categories = [
  {
    name: "Conversación básica",
    href: "/aprender-asl/videos/conversacion",
    thumbnail: "/categories/conv.png",
  },
  {
    name: "Familia y vida diaria",
    href: "/aprender-asl/videos/familia",
    thumbnail: "/categories/fam.png",
  },
  {
    name: "Cultura y clases temáticas",
    href: "/aprender-asl/videos/cultura",
    thumbnail: "/categories/cult.png",
  },
  {
    name: "Talleres y recursos",
    href: "/aprender-asl/videos/talleres",
    thumbnail: "/categories/taller.png",
  },
];

export default function VideosPage() {
  return (
    <main className={classes.main}>
      <h1 className={classes.title}>
        Videos educativos
      </h1>

      <section className={classes.cardGrid}>
        {categories.map(category => (
          <Link
            key={category.name}
            href={category.href}
            className={classes.card}
          >
            <img
              src={category.thumbnail}
              className={classes.thumbnail}
            />

            <h2 className={classes.cardTitle}>
              {category.name}
            </h2>

            <p className={classes.cta}>
              Ver →
            </p>

          </Link>
        ))}
      </section>
    </main>
  );
}