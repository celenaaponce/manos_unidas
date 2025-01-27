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
          <p>actualizado el 27 de enero 2025</p>
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
            src="/audio/ciudadanía.mp3"
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
            src="/audio/riley.mp3"
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
        {/* <div className={classes.sub}>
          <h2 className={classes.section}>
            actualidad jurídica de CLINIC <br />
            (Red Católica de Inmigración Legal, Inc.)
          </h2>         
          <p className={classes.section}>actualizado el 24 de enero 2025</p>
        </div> */}

        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/deport.jpg"
            alt="notario"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/Ampliación.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            Ampliación de la expulsión acelerada y de la discrecionalidad de
            aplicación para los inmigrantes en libertad condicional
          </h1>
          <p>
            El Departamento de Seguridad Nacional (DHS) anunció a través del
            Registro Federal la ampliación de la expulsión acelerada para
            designar categorías adicionales de inmigrantes que ahora están
            sujetos a los procedimientos de expulsión acelerada. Además, la
            semana pasada el DHS publicó otro memorando, titulado Orientación
            sobre cómo ejercer la discreción de aplicación, que incluye una
            ampliación de las personas sujetas a la expulsión acelerada, entre
            otras orientaciones que se incluyen a continuación.
            <br />
            <br />
            Quién está sujeto a Expulsión Acelerada:
            <br />
            <br />
            Las personas detenidas en cualquier lugar de los Estados Unidos, que
            han estado presentes de forma continua en los Estados Unidos durante
            menos de 2 años.*
            <br />
            <br />
            Las personas detenidas a menos de 100 millas aéreas de una frontera
            terrestre de los EE.UU. que han estado presentes de forma continua
            en los Estados Unidos durante al menos 14 días, pero durante menos
            de 2 años.*
            <br />
            <br />
            Personas en proceso de expulsión y/o en situación de libertad
            condicional activa y que reúnen los requisitos para la expulsión
            acelerada, para las que los agentes ejercen su facultad discrecional
            de aplicar la expulsión acelerada solicitando el sobreseimiento del
            proceso de expulsión y/o el cese de la situación de libertad
            condicional.
            <br />
            <br />
            *Que no llegaron por mar.
            <br />
            <br />
            El Memorando también ordena a los agentes del DHS que adopten
            medidas coercitivas contra las personas que no cumplan las
            condiciones establecidas anteriormente pero a las que se haya
            concedido la libertad condicional en virtud de una política que
            pueda ser suspendida, modificada o finalizada (como el programa
            CHNV). El DHS debe tomar todas las medidas necesarias para revisar
            el caso y decidir si:
            <br />
            <br />
            Iniciar el procedimiento de expulsión, y Revisar el estado de la
            libertad condicional para determinar si es apropiada en vista de
            cualquier cambio en las circunstancias legales o de hecho. <br />
            <br />
            NOTA: Las personas sometidas a expulsión acelerada en virtud de esta
            designación tienen la obligación de demostrar que han estado
            presentes de forma continuada en Estados Unidos durante más de dos
            años. Además, los no ciudadanos que expresen temor a regresar a su
            país de origen deben ser sometidos a una entrevista de temor creíble
            antes de que puedan ser expulsados físicamente. El memorando ordena
            a los funcionarios del DHS que den prioridad a las personas con
            derecho a expulsión acelerada que no hayan solicitado asilo en el
            plazo de un año.
            <br />
            <br />
            CLINIC anima a las organizaciones a revisar sus archivos para
            identificar a los clientes actuales que pueden tener casos de
            expulsión en los que el DHS puede tratar de poner fin a la expulsión
            y / o estado de libertad condicional y discutir cómo responder.
            Además, animamos a las organizaciones a aconsejar a sus clientes que
            puedan verse afectados por este cambio que lleven documentación que
            demuestre su presencia en los Estados Unidos durante más de dos años
            y que los evalúen para una posible exención. CLINIC proporcionará
            una actualización adicional si hay algún cambio una vez que se
            publique el Aviso del Registro Federal. Los abogados de CLINIC
            planean discutir este cambio con más detalle en el seminario web
            sobre políticas del 10 de febrero de 2025, que es gratuito para los
            afiliados de CLINIC.
            <br />
            <br />
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/ElDHS.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            El DHS publica una directiva que amplía las fuerzas de seguridad
          </h1>
          <p>
            El Departamento de Seguridad Nacional (DHS) anunció una nueva
            directiva que otorga a los funcionarios encargados de hacer cumplir
            la ley del Departamento de Justicia (DOJ) en los U.S. Marshals, la
            Administración para el Control de Drogas (DEA), la Oficina de
            Alcohol, Tabaco, Armas de Fuego y Explosivos, y la Oficina Federal
            de Prisiones autoridad para investigar y detener a los no ciudadanos
            que no están legalmente presentes en los Estados Unidos. 
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/dhs.png"
            alt="Crimines"
            width={400}
            height={400}
          />
        </div>
      </header>
    </>
  );
}
