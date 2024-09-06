"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "./icon.png";
import classes from "./page.module.css";
import AudioPlayer from "components/audioPlayer/audioPlayer";
import Popup from "components/popup/Popup";
import { useState, useEffect } from "react";
import { Document } from "react-pdf";
import PDFViewer from "components/pdfviewer/PDFViewer";

export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleClosePopup = () => {
    setIsFirstVisit(false);
  };
  return (
    <>
      <header className={classes.header}>
        <div>{isFirstVisit && <Popup onClose={handleClosePopup} />}</div>
        <div className={classes.slideshow}>
          <Image
            src={logo}
            width={300}
            height={300}
            alt="manos unidas logo"
          ></Image>
        </div>
        <div>
          <div className={classes.hero}>
            <AudioPlayer
              className={classes.audioPlayer}
              src="/audio/ManosUnidasApoyando.mp3"
              style={{ marginLeft: "-1rem" }}
            />
            <h1>Manos Unidas</h1>

            <p>
              Apoyando a las familias latinas con niños sordos o con
              dificultades auditivas conectar y crecer con su hijo.{" "}
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="/ASL">Aprender Lengua de Señas Americana</Link>
            <Link href="/otros">Otros Servicios</Link>
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <section className={classes.section}>
          <h2>Activiades de Septiembre</h2>
          <div className={classes.iframeContainer}>
            <iframe
              src="https://drive.google.com/file/d/1ZcE8cjHDBY05JH8BHvH0B4ikaaNYI1Xo/preview"
              width="100%"
              height="700px"
              frameBorder="0"
              className={classes.iframe}
            ></iframe>
          </div>
        </section>
        <section className={classes.section}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/quiensomos.mp3"
          />
          <h2>Quien Somos</h2>
          <p>
            Empezando en 2021 a través del centro para jovenes sordos y con
            dificultades auditivas (CDHY) en el estado de Washington, ofrecimos
            clases de lengua de señas americana en español a 6 familias. Desde
            este tiempo, hemos crecido a mas que 60 familias en todo los EEUU.
            En mayo de 2024, decidimos empezar nuestro negocio sin ánimo de
            lucro para ofrecer más servicios a nuestras familias.
          </p>

          <p>
            Entre los miembros de nuestro consejo tenemos más que 50 años de
            experiencia trabajando con niños sordos y familias Latinas. También
            tenemos asociación con organizaciones en 10 estados.
          </p>
        </section>
        <section className={classes.section}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/nuestramision.mp3"
          />
          <h2>Nuestra Misión</h2>
          <p>
            La misión de Manos Unidas es ayudar a disminuir la prevalencia de la
            privación de lenguaje entre los niños sordos y con dificultades
            auditivas de familias inmigrantes. Reconocemos que las barreras
            lingüísticas y culturales representan una gran parte de la razón por
            la que las familias inmigrantes son incapaces de comunicarse con sus
            hijos sordos y con problemas de audición.
          </p>
          <p>
            Con este fin, deseamos capacitar a las familias inmigrantes con
            hijos sordos y con dificultades auditivas proporcionándoles un apoyo
            integral mediante clases de lengua de señas americana en su lengua
            materna, ofreciéndoles clases de enriquecimiento como, por ejemplo,
            cómo hacer la transición del secundario a la universidad y cómo
            utilizar la tecnología, y facilitándoles el acceso a los recursos.
            Nos esforzamos por crear un entorno inclusivo dentro de la comunidad
            sorda por toda la vida, promoviendo la expansión del dominio de la
            lengua de señas entre las diversas poblaciones para apoyar el
            aumento de la independencia y la autodeterminación de las diversas
            poblaciones sordas.
          </p>
        </section>
      </main>
    </>
  );
}
