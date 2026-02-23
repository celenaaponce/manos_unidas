import Link from "next/link";
import classes from "./page.module.css";

const recursos = [
  {
    name: "Diccionario",
    description: "Busque palabras y vea las señas en ASL",
    href: "/aprender-asl/diccionario",
    icon: "📘",
  },
  {
    name: "Clases gratuitas",
    description: "Aprenda ASL con instructores hispanohablantes",
    href: "/aprender-asl/clases-gratuitas",
    icon: "🎓",
  },
  {
    name: "Videos",
    description: "Aprenda señas con videos educativos",
    href: "/aprender-asl/videos",
    icon: "🎥",
  },
  {
    name: "Historias",
    description: "Vea historias contadas en ASL",
    href: "/aprender-asl/historias",
    icon: "📖",
  },
];

export default function AprenderASLPage() {
  return (
    <main className={classes.main}>
      <section className={classes.headerBlock}>
        <h1 className={classes.title}>Aprender ASL</h1>

        <p className={classes.subtitle}>
          Acceda a recursos en español para aprender Lengua de Señas Americana.
        </p>
      </section>

      <section className={classes.cardGrid}>
        {recursos.map((item) => (
          <Link key={item.name} href={item.href} className={classes.card}>
            <>
              <h2 className={classes.cardTitle}>
                {item.icon} {item.name}
              </h2>

              <p className={classes.description}>
                {item.description}
              </p>

              <p className={classes.cta}>
                Ver recursos →
              </p>
            </>
          </Link>
        ))}
      </section>
    </main>
  );
}