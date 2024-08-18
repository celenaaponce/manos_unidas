import Image from "next/image";
import classes from "./page.module.css";
import AudioPlayer from "components/audioPlayer/audioPlayer";
import Link from "next/link";

export default function Clases() {
  return (
    <>
      <h2 className={classes.section}>Clases de ASL en español</h2>
      <header className={classes.header}>

        <div className={classes.hero}>
        <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/registrarpara.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1>
            Registrar para clases gratuitas
          </h1>
          <p>
            Información de clases en las siguientes semanas.  <Link href="/ASL/Clases/Signup">Haga clic aquí</Link> para ponerse en 
            nuestra lista de contactos.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/classes2.png"
            alt="registrar para clases"
            width={300}
            height={300}

          />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/class/watchvideo3.png"
            alt="mirar video en telefono"
            width={400}
            height={400}
            style={{marginRight: "5rem"}}
          />
        </div>
        <div className={classes.hero}>
        <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/mirarlas.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1>Mirar las clases grabadas</h1>
          <p>
            Se puede <a target="_blank" href={"https://www.youtube.com/playlist?list=PLAsRcYXV-4XDbhawYIWMukc53mP-zbRqv"}>mirar</a> todas nuestras clases grabadas en YouTube.
          </p>
        </div>
      </header>
    </>
  );
}
