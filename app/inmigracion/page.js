import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";
import AudioPlayer from "components/audioPlayer/audioPlayer";
import Article from "components/immigrationPart/left";
import data from "components/immigrationPart/data.json";

export default function Inmigracion() {
  return (
    <>
      <h2 className={classes.section}>Recursos de inmigración</h2>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/derechos.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Conozca Sus Derechos</h1>
          <p>
            Se puede descargar un boletín con información sobre
            <Link
              href={
                "https://www.cliniclegal.org/file-download/download/public/1447"
              }
            >
              {" "}
              Conocer sus derechos.
            </Link>
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/immigration/conocer.png"
            alt="Conocer sus derechos"
            width={200}
            height={200}
          />
        </div>
        {/* Row 2 */}
        <div className={classes.imageContainer}>
          <Image
            className={classes.large}
            src="/immigration/notario.png"
            alt="notario"
            width={400}
            height={250}
            style={{ marginRight: "5rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/notario.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Notario Fraude</h1>
          <p>
            En los EEUU notarios no son abogados. Aprenda más sobre{" "}
            <a
              href="https://www.aila.org/aila-files/8BF27A09-036C-4F1F-8E2D-911DC55E1559/Notario-flyer-2024-Spanish.pdf"
              target="_blank"
            >
              notario fraude.
            </a>
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/emergencia.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Plan de Emergencia</h1>
          <p>
            Haga un{" "}
            <Link
              href={
                "https://jamlac.org/wp-content/uploads/2024/12/Family-Protection-Plan-2024-SPANISH-FINAL-1.pdf"
              }
            >
              {" "}
              plan de emergencia
            </Link>{" "}
            con toda la información de la familia y datos importantes.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/immigration/emergency.png"
            alt="Plan de emergencia"
            width={200}
            height={200}
          />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/immigration/standbyt.png"
            alt="tutela de reserva"
            width={200}
            height={200}
            style={{ marginRight: "5rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/tutela.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Tutela de reserva</h1>
          <p>
            Como parte de su plan de emergencia, si tiene hijos menores de 18
            años, debe tener una{" "}
            <a
              href="https://standbyguardian.org/wp-content/uploads/2020/03/SBG-Designation-form-in-Spanish-2-11-19.pdf"
              target="_blank"
            >
              tutela de reserva.
            </a>
          </p>
        </div>
        <div className={classes.sub}>
          <h2 className={classes.section}>
            actualidad jurídica de CLINIC <br />
            (Red Católica de Inmigración Legal, Inc.)
          </h2>
          <p>actualizado el 10 de mayo 2025</p>
          <p>el más reciente es el primero</p>
        </div>
        <div>
          {data.map((item, index) => (
            <Article key={index} {...item} reverse={index % 2 !== 0}/>
          ))}
        </div>
      </header>
    </>
  );
}
