import Link from "next/link";
import classes from "./page.module.css";

const recursos = [
  {
    name: "Conozca sus derechos",
    description:
      "Tarjeta de Conozca Sus Derechos en muchas idiomas de señas",
    href: "/inmigracion/kyr",
    icon: "⚖️",
  },
  {
    name: "Talleres",
    description:
      "Vea talleres educativos sobre inmigración accesibles en señas y español.",
    href: "/inmigracion/talleres",
    icon: "🎓",
  },
  {
    name: "Recursos",
    description:
      "Acceda a guías, videos y recursos para inmigrantes sordos y sus familias.",
    href: "/inmigracion/recursos",
    icon: "📚",
  },
];

export default function InmigracionPage() {
  return (
    <main className={classes.main}>
      <section className={classes.headerBlock}>
        <h1 className={classes.title}>Inmigración</h1>

        <p className={classes.subtitle}>
          Recursos accesibles en ASL y español para apoyar a inmigrantes sordos y sus familias.
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