import ZeffyEmbed from "components/zeffyembed/zeffy-embed";
import classes from "./page.module.css";

export default function Donar() {
  return (
    <>
      <section className={classes.section}>
        <h2>Apoye nuestro trabajo</h2>

        <p className={classes.description}>
          Su donación ayuda a proporcionar educación en ASL, recursos accesibles
          y apoyo a familias inmigrantes sordas. Gracias por ser parte de esta
          comunidad.
        </p>

        <div className={classes.embedWrapper}>
          <ZeffyEmbed
            title="Donación general a Hands United"
            src="https://www.zeffy.com/embed/donation-form/3ab5b5ab-dfc3-4373-a391-311962616835"
          />
        </div>
      </section>
    </>
  );
}