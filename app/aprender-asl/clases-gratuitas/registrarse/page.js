import classes from "./page.module.css";

export default function RegistrarsePage() {
  return (
    <main className={classes.main}>
      <section className={classes.headerBlock}>
        <h1 className={classes.title}>
          Registrarse para clases
        </h1>

        <p className={classes.subtitle}>
          Complete el formulario para registrarse en nuestras clases gratuitas.
        </p>
      </section>

      <div className={classes.formContainer}>
        <iframe
          src="https://manosunidas.aidaform.com/clases-de-asl-abril-2026"
          className={classes.iframe}
          allow="fullscreen"
        />
      </div>
    </main>
  );
}