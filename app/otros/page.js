import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";
import AudioPlayer from "components/audioPlayer/audioPlayer";

export default function Otros() {
  return (
    <>
      <AudioPlayer className={classes.audioPlayer} src="/audio/serviciosgratuitos.mp3" style={{marginLeft:"5rem"}}/>
      <h2 className={classes.section}>servicios actuales gratuitos</h2>
      <p className={classes.section}>
        Todos nuestros servicios son exclusivos para padres que participan en
        nuestras clases de ASL o están partes de una de nuestras organizaciones
        asociadas. Para inscribirse en nuestras clases{" "}
        <Link href={"/ASL/Clases"}>haga click aquí.</Link>
      </p>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/talleres.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1>Talleres</h1>
          <p>
            Ofrecemos talleres sobre temas importantes como: IEP, cómo entrar en
            la universidad, cómo comunicarse en dibujos y mucho más.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/others/talleres.png"
            alt="talleres"
            width={200}
            height={200}
          />
        </div>

        {/* Row 2 */}
        <div className={classes.imageContainer}>
          <Image
            src="/others/language.png"
            alt="apoyo de idioma"
            width={200}
            height={200}
            style={{marginRight:"5rem"}}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/desarrollo.mp3"
            style={{marginLeft:"-5rem"}}
          />

          <h1>Desarrollo de Idioma</h1>
          <p>
            Tenemos clases individuales con niños sordos con privación de idioma
            para ayudarles a aprender ASL y la lectura.
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/conexionescon.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1>Conexiones con Otras Agencias</h1>
          <p>
            Ayudamos encontrar apoyo para escuela, aseguranza, abogados,
            tecnología y otros recursos que se puede necesitar.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/others/support.png"
            alt="recursos"
            width={200}
            height={200}
            
          />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/others/drive.png"
            alt="manejar"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/educacionpara.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1>Educación para conductores</h1>
          <p>
            Clases virtuales para niños sordos con idioma bajo. Aprender las
            reglas de manejar y cómo manejar con seguridad.
          </p>
        </div>

      </header>

      <h2 className={classes.section}>Servicios Futuros</h2>
      <header className={classes.header}>
        {/* Row 3 */}


        {/* Row 4 */}
        <div className={classes.imageContainer}>
          <Image
            src="/others/puberty2.png"
            alt="pubertad"
            width={200}
            height={200}
            style={{marginRight:"5rem"}}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/pubertad.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1>Pubertad y Desarrollo</h1>
          <p>
            Clases virtuales para padres de niños sordos. Enseñamos cómo hablar
            con su hijo sordo sobre la pubertad.
          </p>
        </div>

        {/* Row 5 */}
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/tecnologia.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1>Tecnología</h1>
          <p>
            Clases virtuales para padres de niños sordos sobre cómo usar
            tecnología con seguridad.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image src="/others/tech.png" alt="tech" width={200} height={200} />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/others/immigration.png"
            alt="immigration"
            width={300}
            height={300}
            style={{marginRight:"5rem"}}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/defensade.mp3"
            style={{marginLeft:"-5rem"}}
          />
          <h1>Defensa de los inmigrantes</h1>
          <p>
            Apoyar familias en su proceso de inmigración. Ayudar familias
            encontrar abogados y entender el proceso de su caso.
          </p>
        </div>
      </header>
      <AudioPlayer className={classes.audioPlayer} src="/audio/serviciosgratuitos.mp3" style={{marginLeft:"5rem"}}/>
      <h1 className={classes.section}><Link href={"/otros/ayudar"}>Apoyar nuestras metas</Link></h1>
    </>
  );
}
