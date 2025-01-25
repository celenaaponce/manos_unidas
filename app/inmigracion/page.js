import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";
import AudioPlayer from "components/audioPlayer/audioPlayer";

export default function Inmigracion() {
  return (
    <>
      <h2 className={classes.section}>Recursos de inmigración</h2>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/teacherspay.mp3"
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
        <div className={classes.imageContainerLarge}>
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
            src="/audio/donacion.mp3"
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
            src="/audio/teacherspay.mp3"
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
            src="/audio/donacion.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Tutela de reserva</h1>
          <p>
            Como parte de su plan de emergencia, si tiene hijos menores de 18 años, debe tener una {" "}
            <a
              href="https://standbyguardian.org/wp-content/uploads/2020/03/SBG-Designation-form-in-Spanish-2-11-19.pdf"
              target="_blank"
            >
               tutela de reserva.
            </a>
          </p>
        </div>
        <div className={classes.sub}>
          <h2 className={classes.section}>actualidad jurídica de CLINIC <br/>(Red Católica de Inmigración Legal, Inc.)</h2>
          <p>actualizado el 24 de enero 2025</p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/citizen.png"
            alt="notario"
            width={400}
            height={400}
            style={{ marginRight: "5rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/donacion.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            Un juez federal paraliza la orden ejecutiva que pone fin a la
            ciudadanía por derecho de nacimiento
          </h1>
          <p>
            Ayer, un juez federal bloqueó temporalmente la orden ejecutiva
            destinada a poner fin a la garantía constitucional de la ciudadanía
            por derecho de nacimiento. La orden de restricción temporal detiene
            la aplicación de la política durante los próximos 14 días mientras
            se presentan más informes jurídicos. El juez de distrito John C.
            Coughenour dictó sentencia en el caso presentado por los estados de
            Washington, Arizona, Illinois y Oregón, que argumentan que la 14ª
            Enmienda y la jurisprudencia del Tribunal Supremo han consolidado
            durante mucho tiempo la ciudadanía por derecho de nacimiento. Este
            caso forma parte de otros 5 pleitos interpuestos en todo el país por
            22 estados y grupos de defensa de los derechos de los inmigrantes.
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/teacherspay.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>La Ley Laken Riley aprobada en el Congreso</h1>
          <p>
            Ayer, el Congreso aprobó la Ley Laken Riley, el proyecto de ley que
            amplía la detención obligatoria para incluir a los no ciudadanos
            acusados de robo, hurto, robo en tiendas, asalto a un oficial de
            policía, y cualquier delito que resulte en muerte o lesiones
            corporales graves. El proyecto de ley también otorga a los fiscales
            generales de los estados el derecho a demandar al fiscal general de
            EE.UU. o al Secretario de Seguridad Nacional si un inmigrante con
            estatus legal incierto o impugnado, que se encuentra en libertad
            condicional en el país, comete un delito que perjudique física o
            económicamente al estado o a uno de sus residentes, si el valor del
            daño es superior a 100 dólares. 
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/criminal.png"
            alt="Crimines"
            width={400}
            height={400}
          />
        </div>
      </header>
    </>
  );
}
