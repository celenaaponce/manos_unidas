"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "./icon.png";
import classes from "./page.module.css";
import AudioPlayer from "components/audioPlayer/audioPlayer";
import Popup from "components/popup/Popup";
import PDFViewer from "./viewer";
import { useState, useEffect } from "react";
import iphone from "public/images/iphone.png";
import android from "public/images/android.png";
import KYR from "public/immigration/kyr.jpg";

export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleClosePopup = () => setIsFirstVisit(false);

  return (
    <>
      <header className={classes.header}>
        {isFirstVisit && (
          <div className={classes.popup}>
            <p>Welcome to Manos Unidas!</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        )}
        <div className={classes.slideshow}>
          <Image src={logo} width={300} height={300} alt="Manos Unidas logo" />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            src="/audio/ManosUnidasApoyando.mp3"
            className={classes.audioPlayer}
          />
          <div>
            <h1>Manos Unidas</h1>
            <p>
              Apoyando a las familias latinas con niños sordos o con
              dificultades auditivas conectar y crecer con su hijo.
            </p>
          </div>
          <div className={classes.cta}>
            <a href="https://handsunitedor.org/">See in English</a>
            <Link href="/inmigracion">Inmigración</Link>
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <AudioPlayer src="/audio/bajar.mp3" className={classes.audioPlayer} />
        <section className={classes.section}>
          <h2>¡Bajar nuestra app!</h2>
          <div>
            <Link
              href={
                "https://apps.apple.com/us/app/hands-united-oregon/id6747975975"
              }
              style={{ color: "#56b4e9" }}
            >
              <Image src={iphone} height={50}></Image>Bajar para iPhone
            </Link>
            <p> </p>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.createcommunity.handsunitedoregon&pcampaignid=web_share"
              }
              style={{ color: "#56b4e9" }}
            >
              <Image src={android} height={75}></Image>Bajar para Android
            </Link>
          </div>
          <AudioPlayer src="/audio/tarjeta.mp3" className={classes.audioPlayer} style={{marginLeft: "-5rem"}}/>
          <h2>¡Tarjeta de conozca sus derechos en lenguajes de señas!</h2>
          <p>
            Aquí esta nuestra tarjeta de conozca sus derechos en lenguajes de
            señas. (Haga clic en la imagen para ir a la página). Esta página
            seguirá creciendo a medida que se vayan añadiendo vídeos.
          </p>
          <Link href={"/inmigracion/kyr"}>
            <div className={classes.responsiveImageWrapper}>
              <Image src={KYR} width={900}></Image>
            </div>
          </Link>
          <p>
            Oprima{" "}
            <a
              href={
                "https://drive.google.com/file/d/16daxkMvOyyFnlocwfj4B471exwoMYYn1/view?usp=sharing"
              }
              target="_blank"
              style={{ color: "#56b4e9" }}
            >
              aquí
            </a>{" "}
            para bajar el versión para imprimir.
          </p>
        </section>
      </main>

      <main className={classes.main}>
        {/* <h2>Calendario de julio</h2>
        <div>
          <object
            data="mypdf.pdf"
            className={classes.frame}
            type="application/pdf"
          >
            <embed
              src="https://drive.google.com/file/d/1P82aqZSgEcCex0PQqyFVzkz5M6_Y9uNa/preview"
              className={classes.frame}
            />
          </object>
        </div> */}
        {/* <h2>Boletín</h2>
        <object
          data="mypdf.pdf"
          className={classes.frame}
          type="application/pdf"
        >
          <embed
            src="https://drive.google.com/file/d/1gNhqqJkcG8NOO85lr11b5RAQ4JlN4X_o/view?usp=sharing"
            className={classes.frame}
          />
        </object> */}
        <InfoSection
          title="Quien Somos"
          audioSrc="/audio/quiensomos.mp3"
          content={[
            "Empezando en 2021 a través del centro para jovenes sordos y con dificultades auditivas (CDHY) en el estado de Washington, ofrecimos clases de lengua de señas americana en español a 6 familias. Desde este tiempo, hemos crecido a mas que 60 familias en todo los EEUU. En mayo de 2024, decidimos empezar nuestro negocio sin ánimo de lucro para ofrecer más servicios a nuestras familias.",
            "Entre los miembros de nuestro consejo tenemos más que 50 años de experiencia trabajando con niños sordos y familias Latinas. También tenemos asociación con organizaciones en 10 estados.",
          ]}
        />
        <InfoSection
          title="Nuestra Misión"
          audioSrc="/audio/nuestramision.mp3"
          content={[
            "La misión de Manos Unidas es ayudar a disminuir la prevalencia de la privación de lenguaje entre los niños sordos y con dificultades auditivas de familias inmigrantes. Reconocemos que las barreras lingüísticas y culturales representan una gran parte de la razón por la que las familias inmigrantes son incapaces de comunicarse con sus hijos sordos y con problemas de audición.",
            "Con este fin, deseamos capacitar a las familias inmigrantes con hijos sordos y con dificultades auditivas proporcionándoles un apoyo integral mediante clases de lengua de señas americana en su lengua materna, ofreciéndoles clases de enriquecimiento como, por ejemplo, cómo hacer la transición del secundario a la universidad y cómo utilizar la tecnología, y facilitándoles el acceso a los recursos. Nos esforzamos por crear un entorno inclusivo dentro de la comunidad sorda por toda la vida, promoviendo la expansión del dominio de la lengua de señas entre las diversas poblaciones para apoyar el aumento de la independencia y la autodeterminación de las diversas poblaciones sordas.",
          ]}
        />
      </main>
    </>
  );
}

function Section({ title, src }) {
  return (
    <section className={classes.section}>
      <h2>{title}</h2>
      <div className={classes.iframeContainer}>
        <embed src={src} type="application/pdf" width="100%" height="700px" />
      </div>
    </section>
  );
}

function InfoSection({ title, audioSrc, content }) {
  return (
    <section className={classes.section}>
      <AudioPlayer src={audioSrc} className={classes.audioPlayer} />
      <h2>{title}</h2>
      {content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </section>
  );
}
