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
            src="/audio/registrar.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1>
            Registrar para clases gratuitas
          </h1>
          <p>
            Nuestras proximas clases empiezan en octubre, 2025.  Se puede mandar texto a Celena (360.521.2732) o correo electronico <Link href="mailto:Celena<celena.a.ponce@gmail.com>" className={classes.contact}>celena.a.ponce@gmail.com</Link> para más información.
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
