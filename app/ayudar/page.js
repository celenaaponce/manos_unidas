import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";
import AudioPlayer from "components/audioPlayer/audioPlayer";

export default function Ayudar() {
  return (
    <>
      <h2 className={classes.section}>Cómo apoyar nuestra meta</h2>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
        <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/teacherspay.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1><Link href={'https://www.teacherspayteachers.com/store/manos-unidas'}>Teachers Pay Teachers</Link></h1>
          <p>
            Se puede comprar nuestras productos de 
            <Link href={'https://www.teacherspayteachers.com/store/manos-unidas'}> TeachersPayTeachers.</Link>   Todos los beneficios se destinan a Manos Unidas.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/help/tpt.png"
            alt="comprar en linea"
            width={200}
            height={200}
          />
        </div>
        {/* Row 2 */}
        <div className={classes.imageContainer}>
          <Image
            src="/help/give.png"
            alt="donar"
            width={200}
            height={200}
            style={{marginRight:"5rem"}}
          />
        </div>
        <div className={classes.hero}>
        <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/donacion.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1>Donación</h1>
          <p>
          Su donación ayudará a ofrecer servicios a familias inmigrantes con niños sordos o con dificultades auditivas. Información disponible en las siguientes semanas. 
          </p>
        </div>
      </header>
    </>
  );
}
