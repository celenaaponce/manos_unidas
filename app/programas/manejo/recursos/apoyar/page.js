"use client";

import Script from "next/script";
import classes from "./page.module.css";

export default function DriversEducationRegister() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Muestra tu apoyo al plan de estudios de educación vial en lengua de
        señas americana (ASL).
      </h1>

      <p className={classes.description}>
        Gracias por su interés en mejorar el acceso al plan de estudios de
        educación vial en lengua de señas americana (ASL). Complete la breve
        encuesta que aparece a continuación para compartir su experiencia y
        mostrar su apoyo a la educación vial accesible en ASL. Sus respuestas
        ayudarán a demostrar el interés de la comunidad y a respaldar los
        esfuerzos para que la educación vial sea totalmente accesible.
      </p>

      {/* AidaForm Embed */}
      <div
        data-aidaform-app="form202405"
        data-url="https://handsunited.aidaform.com/asl-drivers-ed"
        data-width="100%"
        data-height="600px"
        data-do-resize
      ></div>

      <Script
        id="aidaform-script"
        src="https://widget.aidaform.com/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
