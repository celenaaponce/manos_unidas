import Link from "next/link";
import classes from "./page.module.css";

const options = [
  {
    name: "Clases gratuitas en vivo",
    description: "Regístrese para clases en vivo con un instructor hispanohablante",
    href: "/aprender-asl/clases-gratuitas/registrarse",
    icon: "🎓",
  },
  {
    name: "Clases grabadas",
    description: "Vea nuestras clases organizadas por nivel",
    href: "/aprender-asl/clases-gratuitas/clases-grabadas",
    icon: "🎥",
  },
];

export default function ClasesPage() {
  return (
    <main className={classes.main}>
      <section className={classes.headerBlock}>
        <h1 className={classes.title}>
          Clases de ASL en Español
        </h1>

        <p className={classes.subtitle}>
          Elija una opción
        </p>
      </section>

      <section className={classes.cardGrid}>
        {options.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classes.card}
          >
            <h2 className={classes.cardTitle}>
              {item.icon} {item.name}
            </h2>

            <p className={classes.description}>
              {item.description}
            </p>

            <p className={classes.cta}>
              Abrir →
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}