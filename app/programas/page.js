import Link from "next/link";
import classes from "./page.module.css";

const programas = [
  {
    name: "Clases familiares",
    description: "Clases de ASL para familias",
    href: "/aprender-asl",
    icon: "👨‍👩‍👧",
  },
  {
    name: "Aplicación",
    description: "Aprenda ASL desde su teléfono",
    href: "/programas/aplicacion",
    icon: "📱",
  },
  {
    name: "Educación de manejo",
    description: "Programa accesible de educación vial",
    href: "/programas/manejo",
    icon: "🚗",
  },
];

export default function ProgramasPage() {
  return (
    <main className={classes.main}>
      <section className={classes.headerBlock}>
        <h1 className={classes.title}>Programas</h1>

        <p className={classes.subtitle}>
          Explore nuestros programas y servicios.
        </p>
      </section>

      <section className={classes.cardGrid}>
        {programas.map((item) => (
          <Link key={item.name} href={item.href} className={classes.card}>
            <>
              <h2 className={classes.cardTitle}>
                {item.icon} {item.name}
              </h2>

              <p className={classes.description}>
                {item.description}
              </p>

              <p className={classes.cta}>
                Ver programa →
              </p>
            </>
          </Link>
        ))}
      </section>
    </main>
  );
}