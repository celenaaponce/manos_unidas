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
          <p>actualizado el 10 de mayo 2025</p>
          <p>el más reciente es el primero</p>
        </div>
        {/* <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/register.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Registro de inmigrantes</h1>
          <p>
            El 25 de febrero de 2025, el Servicio de Ciudadanía e Inmigración de
            EE.UU. (USCIS) anunció una nueva política que exige que todos los
            inmigrantes se registren en el gobierno. Esta política se basa en la
            sección 262 de la Ley de Inmigración y Nacionalidad (INA) (8 U.S.C.
            1302), y en la Orden Ejecutiva del 20 de enero de 2025.
            <br />
            <br />
            La INA exige que, con algunas excepciones, todas las personas de 14
            años o más a las que no se hayan tomado las huellas dactilares o
            registrado al solicitar un visado estadounidense y que permanezcan
            en Estados Unidos durante 30 días o más deben solicitar el registro
            y la toma de huellas dactilares. Además, una vez que el menor cumple
            14 años debe registrarse. El incumplimiento dará lugar a sanciones
            penales y civiles, que pueden incluir el procesamiento por delito
            menor y el pago de multas.
            <br />
            <br />
            La mayoría de los inmigrantes ya se han registrado; sin embargo,
            para aquellos que no lo han hecho, USCIS está estableciendo un nuevo
            formulario (Formulario 325R) y proceso. Este proceso será en línea,
            y USCIS está animando a las personas a crear una cuenta en línea. El
            registro no es un estatus de inmigración, y la documentación de
            registro no establece la autorización de empleo o cualquier otro
            derecho o beneficio.
            <br />
            <br />
            Las personas inscritas mayores de 18 años deben llevar consigo una
            prueba de su inscripción.
            <br />
            <br />
            ¿Quién está ya registrado?
            <br />
            <br />
            Los residentes legales permanentes.
            <br />
            Inmigrantes en libertad condicional en Estados Unidos en virtud del
            artículo 212(d)(5) de la INA.
            <br />
            Inmigrantes a los que se haya expedido el formulario I-94/I-94W.
            <br />
            Inmigrantes a los que se ha expedido un visado antes de su llegada.
            <br />
            Inmigrantes en proceso de expulsión.
            <br />
            Inmigrantes con documentos de autorización de empleo.
            <br />
            Solicitantes de residencia permanente legal mediante formularios
            designados (por ejemplo, I-485).
            <br />
            Titulares de tarjetas de cruce de fronteras.
            <br />
            <br />
            ¿Quién no está registrado?
            <br />
            Individuos presentes sin inspección, admisión o libertad
            condicional.
            <br />
            Los visitantes canadienses que entren en puertos terrestres sin
            pruebas de registro.
            <br />
            Individuos que presenten solicitudes no enumeradas en 8 CFR 264.1(a)
            (DACA o TPS) sin pruebas de registro (sin permiso de trabajo).
            <br />
            Exenciones
            <br />
            Indios americanos nacidos en Canadá bajo INA 289.
            <br />
            La Banda de Indios Kickapoo de Texas bajo la Ley de la Banda de
            Indios Kickapoo de Texas.
            <br />
            <br />
            ¿Cómo registrarse?
            <br />
            La mayoría de los inmigrantes ya se han registrado; sin embargo,
            para aquellos que no lo han hecho, USCIS está estableciendo un nuevo
            formulario (Formulario 325R) y proceso. Este proceso será en línea,
            y USCIS está animando a las personas a crear una cuenta en línea. El
            registro no es un estatus de inmigración, y la documentación de
            registro no establece la autorización de empleo o cualquier otro
            derecho o beneficio. El proceso oficial aún no se ha anunciado.
            <br />
            <br />
            CLINIC seguirá de cerca este anuncio, y USCIS actualizará su sitio
            web para obtener más información.
          </p>
        </div> */}
        {/* <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/register.png"
            alt="Register"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/asilo.png"
            alt="Asilo"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/asilo.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            USCIS actualiza los procedimientos para determinar la jurisdicción
            inicial sobre las solicitudes de asilo de UC
          </h1>
          <p>
            El 24 de febrero de 2025, un memorando de USCIS entró en vigor, la
            actualización de los procedimientos para la determinación de la
            jurisdicción inicial sobre las solicitudes de asilo presentadas por
            niños no acompañados (UC) y la aplicación del acuerdo de solución
            J.O.P.. Es aplicable a los miembros de la clase J.O.P., así como a
            otros previamente determinados como UC y ciertos casos en los que
            aún no se ha hecho una determinación UC. El memorando permanecerá en
            vigor durante al menos tres años (es decir, hasta al menos el 24 de
            febrero de 2028).
            <br />
            <br />
            Los profesionales deben tener en cuenta que los procedimientos de
            este nuevo memorando sustituyen en gran medida las orientaciones
            anteriores que se publicaron en 2009 y 2013 en relación con la
            disposición de «jurisdicción inicial» de la Ley William Wilberforce
            de Reautorización de la Protección de las Víctimas de Trata de 2008
            (TVPRA).
            <br />
            <br />
          </p>
        </div> */}
        <div>
          {data.map((item, index) => (
            <Article key={index} {...item} reverse={index % 2 !== 0}/>
          ))}
        </div>
        {/* <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/protected.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Actualización del litigio sobre zonas protegidas</h1>
          <p>
            El 24 de febrero de 2025, un juez federal de Maryland emitió una
            orden que impide a la administración llevar a cabo acciones de
            aplicación de las leyes de inmigración en determinadas iglesias,
            templos y otros lugares de culto. Esta orden sólo se aplica a las
            instalaciones utilizadas por algunas denominaciones y congregaciones
            cuáqueras, baptistas y sijs que presentaron la demanda.
            <br />
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/protected.png"
            alt="Unaccompanied"
            width={300}
            height={300}
            style={{ marginLeft: "5rem" }}
          />
        </div> */}
        {/* <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/trafficking.jpg"
            alt="EIOR"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div> */}
        {/* <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/914.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Nueva Edición del Formulario I-914</h1>
          <p>
            El 24 de febrero de 2025, USCIS anunció que sólo aceptará la edición
            1/20/25 del Formulario I-914, Solicitud de Estatus de No Inmigrante
            T, así como todos los formularios adjuntos (I-914A e I-914B). No
            habrá periodo de gracia de aceptación para la edición del 28/08/24.
            La fecha de edición se encuentra al final de la página del
            formulario y de las instrucciones, en formato mm/dd/aa.
            <br />
            <br />
            Los solicitantes que impriman y envíen por correo el formulario
            I-914 deben asegurarse de que la fecha de edición del formulario y
            los números de página son visibles en la parte inferior de todas las
            páginas y de que todas las páginas son de la misma edición del
            formulario. Si alguna de las páginas del formulario falta o es de
            una edición diferente, USCIS puede rechazar su formulario.
            <br />
            <br />
            Las diferencias entre las ediciones 8/28/24 y 1/20/25 se refieren
            únicamente al cambio de todas las referencias de «género» a «sexo»,
            la eliminación de la opción de «otra identidad de género», y el
            cambio de «ellos» a «él o ella» cuando se refiere a una persona
            singular.
            <br />
            <br />
            CLINIC espera que otros formularios de USCIS puedan ser actualizados
            de manera similar sin período de gracia para hacer estos cambios en
            cumplimiento de la Orden Ejecutiva 14168.
            <br />
            <br />
            Visite la página web del USCIS para obtener información adicional
            sobre el formulario I-914.
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/retroceso.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            Orden ejecutiva por la que el inglés se convierte en la lengua
            oficial de Estados Unidos
          </h1>
          <p>
            El 1 de marzo de 2025, el Presidente firmó una Orden Ejecutiva por
            la que se designa el inglés como lengua oficial de los Estados
            Unidos. La Orden Ejecutiva revocó la Orden Ejecutiva 13166 de 2000
            (Mejorar el acceso a los servicios para las personas con dominio
            limitado del inglés), sin embargo, los jefes de las agencias no
            están obligados a modificar, eliminar o detener la producción de
            documentos, productos u otros servicios preparados u ofrecidos en
            idiomas distintos del inglés.
            <br />
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/english.png"
            alt="English"
            width={600}
            height={600}
          />
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/eo.avif"
            alt="EIOR"
            width={400}
            height={250}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/eior.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            Orden ejecutiva: Poner fin a la subvención del contribuyente a la
            apertura de fronteras
          </h1>
          <p>
            Esta Orden Ejecutiva afirma falsamente que las administraciones
            anteriores han hecho gastos indebidos de dólares de los
            contribuyentes en beneficios públicos para inmigrantes no elegibles,
            lo que resulta en un «incentivo para la inmigración ilegal». Así
            pues, la OE pretende exigir la identificación y revisión de la
            financiación federal que pueda utilizarse para promover la
            inmigración ilegal o apoyar a no ciudadanos no cualificados. La
            orden exige a los directores de los organismos que garanticen que la
            financiación federal no se utiliza para promover políticas de
            santuario y les ordena que adopten medidas para mejorar los sistemas
            de control de la elegibilidad a fin de garantizar que las
            prestaciones financiadas por los contribuyentes no se utilizan para
            apoyar a no ciudadanos que no reúnan los requisitos.
            <br />
            <br />
            En concreto, la orden exige a los responsables de cada agencia
            ejecutiva que evalúen los programas que permiten a los «extranjeros
            ilegales» acceder a prestaciones públicas y que tomen medidas para
            adaptar los programas a la orden y a la interpretación que hace la
            administración de las leyes federales que prohíben a los no
            ciudadanos depender de los recursos públicos. En particular, la
            administración ha utilizado el término «extranjeros ilegales» de
            forma generalizada para incluir a las poblaciones en situación legal
            y ha cuestionado específicamente la clasificación de las personas en
            libertad condicional como «extranjeros cualificados» con derecho a
            prestaciones públicas.
            <br />
            <br />
            Afirmando que «miles de millones de dólares de los contribuyentes
            [han sido canalizados a] grupos de izquierda que facilitaron la
            migración ilegal masiva y proporcionaron servicios legales para
            impugnar las órdenes de deportación», la orden ordena además que los
            jefes de las agencias garanticen que la financiación federal
            otorgada a los estados y localidades no facilite «por diseño o
            efecto» la inmigración ilegal. CLINIC seguirá de cerca la aplicación
            de esta orden y sus posibles repercusiones en la financiación de los
            servicios jurídicos o en la disponibilidad de prestaciones públicas
            para las personas en libertad condicional y otros no ciudadanos que
            reúnan los requisitos.
            <br />
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/retroceso.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Actualizaciones y consejos relativos a los nacionales afganos</h1>
          <p>
            En relación con los refugiados en general:
            <br />
            <br />
            Bajo la Orden Ejecutiva (OE) «Realineando el Programa de Admisión de
            Refugiados de los Estados Unidos», la administración Trump suspendió
            el Programa de Admisión de Refugiados de los Estados Unidos (USRAP),
            deteniendo el procesamiento de refugiados en todas las etapas, desde
            la remisión de casos hasta la programación de vuelos. A pesar de
            esto, los defensores aún deben presentar el Formulario I-730 para
            los beneficios de seguimiento para unirse (FTJ-R) para los derivados
            de refugiados dentro de los dos años para preservar la elegibilidad,
            ya que la pausa no afecta el proceso de solicitud con los Servicios
            de Ciudadanía e Inmigración de los Estados Unidos (USCIS).
            <br />
            <br />
            Actualmente no se permite la llegada de refugiados a Estados Unidos,
            incluidos los acogidos a los programas P1, P2 y DS-4317. Aunque los
            refugiados posean documentos de viaje, no se les permite viajar por
            sí mismos a Estados Unidos para que se les conceda la entrada a su
            llegada.
            <br />
            <br />
            La OE sugiere que pueden hacerse excepciones, pero no especifica qué
            casos podrían acogerse a ella ni el procedimiento para solicitar una
            excepción. CLINIC informará a sus afiliados en cuanto tenga más
            información.
            <br />
            <br />
            La administración suele referirse a la suspensión como una «pausa
            temporal». AfghanEvac aconseja esperar y observar durante 1-2 meses
            para ver qué pasa antes de que los clientes tomen cualquier
            «decisión que altere sus vidas». En particular, la OE no afecta a la
            tramitación de las peticiones de asilado FTJ (FTJ-A) o las
            peticiones I-130 basadas en la familia.
            <br />
            <br />
            En relación con la asistencia de reubicación del equipo CARE para
            los afganos: La OE «Reevaluación y realineación de la ayuda exterior
            de EE.UU.» impone una pausa de 90 días en la ayuda exterior al
            desarrollo de EE.UU., que afecta a la financiación de los programas
            de reasentamiento de refugiados. Esta pausa interrumpe
            significativamente los servicios de apoyo a los refugiados,
            incluidos el alojamiento y la ayuda al reasentamiento, retrasando su
            integración en Estados Unidos.
            <br />
            <br />
            En virtud de esta OE, desde el 28 de enero de 2025, el gobierno de
            EE.UU. puso en pausa los vuelos de ayuda a la salida de Afganistán a
            través de la Oficina del Coordinador de los Esfuerzos de Reubicación
            de Afganos (CARE). Es posible que el gobierno de EE.UU. pueda
            reanudar los vuelos para los afganos que no tienen solicitudes
            USRAP.
            <br />
            <br />
            CARE, sin embargo, todavía está haciendo el trabajo de preparación
            de los casos y aún no se ha cerrado. Si los individuos en la tubería
            CARE son contactados por CARE, CLINIC aconseja que todavía deben
            responder a esos mensajes.
            <br />
            <br />
            A partir del 18 de febrero de 2025, las noticias sugieren que el
            Departamento de Estado de EE.UU. está considerando cerrar el equipo
            CARE para abril de 2025. Esta decisión podría afectar hasta a
            200.000 personas, incluidos aliados afganos y sus familias, que han
            estado esperando el reasentamiento en Estados Unidos. Sin embargo,
            no se ha tomado ninguna decisión definitiva sobre el futuro del
            equipo CARE. Sigue existiendo la posibilidad de que los programas de
            Inmigrantes Especiales Afganos y de Refugiados queden exentos de
            estas medidas de recorte de gastos si el Secretario de Estado Rubio
            aprueba una exención.
            <br />
            <br />
            En relación con la tramitación del visado especial de inmigrante
            afgano (SIV): Las solicitudes, entrevistas y tramitación del SIV en
            embajadas y consulados no se verán afectadas por la prohibición de
            refugiados, ya que no forman parte del Programa de Admisión de
            Refugiados de EE.UU. (USRAP). En este momento, todas las embajadas y
            consulados de EE.UU. que ofrecen la tramitación de visados de
            inmigrante siguen realizando entrevistas y expidiendo visados SIV.
            <br />
            <br />
            La suspensión del USRAP detuvo los vuelos de miles de afganos a los
            que se les había concedido el SIV, dejándolos varados en países como
            Afganistán, Pakistán, Qatar y Albania, mientras se enfrentaban a
            mayores riesgos por parte de los talibanes. Sin embargo, los
            titulares del VIS aún pueden organizar su propio viaje a Estados
            Unidos.
            <br />
            <br />
            La congelación de la financiación durante 90 días ha interrumpido
            los programas de apoyo a los titulares del VIS, incluidos los
            servicios de alojamiento y reasentamiento, lo que dificulta que los
            aliados afganos busquen refugio en Estados Unidos.
            <br />
            <br />
            Los informes indican que el CBP ha revocado algunas peticiones SIV,
            bloqueando potencialmente la entrada de los solicitantes en Estados
            Unidos. Esto puede ocurrir si una petición se considera inválida o
            si el solicitante no cumple los requisitos de elegibilidad. CLINIC
            anima a los afiliados y a los clientes del SIV a consultar los
            recursos del Proyecto Internacional de Asistencia a los Refugiados
            (IRAP), incluida la guía para quienes llegan por primera vez a los
            aeropuertos estadounidenses, en la que se describen los derechos y
            procedimientos para garantizar un proceso de entrada sin problemas.
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/afghanistan.jpg"
            alt="Afghanistan"
            width={300}
            height={200}
          />
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/eior.png"
            alt="EIOR"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/eior.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            Memorándum del ICE sobre las medidas de aplicación de la ley que
            afectan a las víctimas de delitos
          </h1>
          <p>
            La semana pasada, el Director en funciones del ICE publicó un
            memorando titulado Interim Guidance on Civil Immigration Enforcement
            Actions Involving Current or Potential Beneficiaries of Victim-Based
            Immigration Benefits. El memorando detalla el proceso que los
            agentes del ICE deben seguir cuando se encuentran con personas que
            son beneficiarias de prestaciones pendientes de inmigración basadas
            en las víctimas. El memorando establece que:
            <br />
            <br />
            Cuando se encuentren con individuos que son beneficiarios de un
            beneficio de inmigración basado en víctimas, los agentes de ICE
            deben consultar a la Oficina del Asesor Jurídico Principal (OPLA) a
            través de los Directores de las Oficinas de Campo o Agentes
            Especiales a Cargo antes de llevar a cabo acciones de aplicación de
            la ley contra los individuos; y
            <br />
            <br />
            Que el ICE ya no solicitará rutinariamente adjudicaciones aceleradas
            del USCIS. En su lugar, se determinarán caso por caso.
            <br />
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/retroceso.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            Novedades en el litigio sobre la ciudadanía por derecho de
            nacimiento
          </h1>
          <p>
            18 de febrero de 2025:
            <br />
            <br />
            El Tribunal de Apelaciones de Estados Unidos para el Noveno Circuito
            se negó a revocar la orden judicial de un tribunal inferior que
            bloqueó la orden ejecutiva del presidente Donald Trump que limita la
            ciudadanía por derecho de nacimiento. El rechazo declaró que el
            gobierno federal no había hecho una «fuerte demostración de que es
            probable que tengan éxito en el fondo», como lo requiere la ley.
            <br />
            <br />
            13 de febrero de 2025:
            <br />
            <br />
            El juez de distrito de Massachusetts emite una cuarta medida
            cautelar a nivel nacional.
            <br />
            <br />
            10 de febrero de 2025:
            <br />
            <br />
            Un juez de distrito de EE.UU. en New Hampshire emitió una tercera
            orden judicial preliminar a nivel nacional en New Hampshire
            Indonesian Community Support v. Trump.
            <br />
            <br />
            6 de febrero de 2025:
            <br />
            <br />
            Un juez de distrito de EE.UU. en Seattle emitió una segunda medida
            cautelar a nivel nacional. Juez Coughenour: «La Constitución no es
            algo con lo que el gobierno pueda jugar juegos políticos. Si el
            gobierno quiere cambiar la excepcional concesión estadounidense de
            la ciudadanía por derecho de nacimiento, necesita enmendar la propia
            Constitución.»
            <br />
            <br />
            5 de febrero de 2025:
            <br />
            <br />
            Un juez de distrito de EE.UU. en Maryland emitió una orden judicial
            preliminar a nivel nacional en CASA v. Trump encontrando que la OE
            contradice la 14ª enmienda y que la ciudadanía por derecho de
            nacimiento es la ley y la tradición de los Estados Unidos.
            <br />
            <br />
            La medida cautelar es temporal y se espera que la administración
            recurra. La demanda fue presentada por CASA y Asylum Seeker Advocacy
            Project (ASAP) en nombre de 5 mujeres embarazadas indocumentadas.
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/unacc.png"
            alt="Unaccompanied"
            width={600}
            height={600}
          />
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/eior.png"
            alt="EIOR"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/eior.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Se anula parcialmente el TPS para Haití</h1>
          <p>
            El Departamento de Seguridad Nacional (DHS, por sus siglas en
            inglés) anuló parcialmente la notificación del 4 de julio de 2024
            que extendía y ampliaba la designación del Estatus de Protección
            Temporal (TPS, por sus siglas en inglés) para Haití. El DHS anulará
            parcialmente la decisión reduciendo el período de designación de 18
            meses a 12 meses.
            <br />
            <br />
            En consecuencia, la extensión y ampliación del TPS expirará el 3 de
            agosto de 2025 (en lugar del 3 de febrero de 2026), y el período de
            registro por primera vez permanecerá en vigor hasta el 3 de agosto
            de 2025 (en lugar del 3 de febrero de 2026). USCIS no retirará la
            documentación relacionada con el TPS que se emitió anteriormente con
            una fecha de caducidad del 3 de febrero de 2026, y esos documentos
            seguirán siendo válidos hasta el 3 de agosto de 2025.
            <br />
            <br />
            El DHS debe determinar, antes del 4 de junio de 2025, si extiende o
            termina la designación del TPS de Haití de 2024. Si el DHS no toma
            una determinación oportuna, el estatuto prevé una prórroga
            automática de la designación por 6 meses.
            <br />
            <br />
            USCIS aceptará solicitudes de reinscripción en el TPS de Haití
            (Formulario I-821) y las correspondientes solicitudes de
            autorización de empleo (Formulario I-765) hasta el 3 de agosto de
            2025. El período de reinscripción para los beneficiarios existentes
            expiró el 30 de agosto de 2024.
            <br />
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/retroceso.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            El USCIS suspende las solicitudes de inmigración de determinados
            inmigrantes que entraron en Estados Unidos a través de programas de
            libertad condicional
          </h1>
          <p>
            Ayer, CBS News informó de que el Servicio de Ciudadanía e
            Inmigración de EE.UU. (USCIS) ha puesto en pausa todas las
            adjudicaciones de las solicitudes de inmigración presentadas por
            personas que entraron en los Estados Unidos bajo ciertos programas
            de libertad condicional, citando el fraude y las preocupaciones de
            seguridad. El informe señala que la congelación de las solicitudes
            permanecerá en vigor indefinidamente mientras los funcionarios
            trabajan para identificar posibles casos de fraude.
            <br />
            <br />
            Los posibles beneficios que se pondrán en pausa incluyen el Estatus
            de Protección Temporal, las Solicitudes de Asilo Afirmativo, los
            Ajustes Cubanos, los Ajustes Familiares, y cualquier otro beneficio
            solicitado por individuos que fueron puestos en libertad condicional
            bajo los siguientes programas (según lo atribuido a un portavoz del
            DHS):
            <br />
            <br />
            Proceso Unidos por Ucrania (U4U);
            <br />
            <br />
            CHNV - Programa para cubanos, haitianos, nicaragüenses y
            venezolanos; o Proceso de reunificación familiar en libertad
            condicional.
            <br />
            <br />
            CLINIC continuará supervisando este nuevo desarrollo y proporcionará
            más información en un futuro próximo.
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/unacc.png"
            alt="Unaccompanied"
            width={600}
            height={600}
          />
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/eior.png"
            alt="EIOR"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/orr.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            ORR Actualiza los Procedimientos de Verificación de Antecedentes y
            Documentos de Identificación para Patrocinadores, HHM y ACG de Niños
            No Acompañados
          </h1>
          <p>
            El 14 de febrero de 2025, la Oficina de Reasentamiento de Refugiados
            (ORR) publicó una guía de campo actualizada sobre los procedimientos
            de verificación de antecedentes y documentos de identificación para
            patrocinadores adultos, miembros adultos del hogar (HHM) y
            cuidadores adultos (ACG) involucrados en el proceso de evaluación de
            idoneidad para liberar a niños inmigrantes no acompañados de la
            custodia de ORR. La ORR es responsable del cuidado y la custodia de
            los menores inmigrantes no acompañados una vez que son detenidos por
            las autoridades de inmigración.
            <br />
            <br />
            Con efecto inmediato, la ORR
            <br />
            <br />
            Requerir la toma de huellas dactilares de todos los patrocinadores
            adultos y sus miembros adultos del hogar mayores de 18 años, y los
            cuidadores adultos identificados en un Plan de Cuidado de
            Patrocinadores. Todos los posibles patrocinadores, miembros del
            hogar y cuidadores adultos deben recibir, adjudicar y registrar sus
            huellas dactilares en el Portal de menores extranjeros no
            acompañados antes de que se apruebe su liberación.
            <br />
            <br />
            Sólo se aceptan fotocopias legibles y no vencidas de documentos de
            identificación con el fin de establecer la identidad de acuerdo con
            la Sección 2.2.4 de la Guía de Políticas para NESA Documentos
            Requeridos para la Presentación con la Solicitud de Liberación.
            <br />
            <br />
            Requerir que los patrocinadores potenciales, los miembros adultos
            del hogar y los cuidadores adultos identificados en un plan de
            cuidado del patrocinador, presenten versiones originales no vencidas
            (no fotocopias) de los documentos de identificación junto con su
            Autorización para la Divulgación de Información (ARI) en el Sitio
            Digital de ORR, FieldPrint u otro sitio designado para el
            procesamiento de huellas dactilares cuando se presenten para la toma
            de huellas dactilares. Los patrocinadores también deben presentar
            los mismos documentos de identificación originales y no vencidos en
            el momento de la entrega física del menor al patrocinador potencial.
            <br />
            <br />
            ¿Qué significa esto para los menores inmigrantes no acompañados que
            están bajo custodia de la ORR a la espera de ser entregados a un
            posible patrocinador?
            <br />
            <br />
            Es probable que las nuevas orientaciones sobre el terreno dificulten
            aún más que los menores inmigrantes sean puestos en libertad bajo la
            custodia de la ORR con el fin de reunirse con un patrocinador.
            <br />
            <br />
            Las directrices actualizadas de la ORR sobre el terreno imponen
            requisitos adicionales de comprobación de antecedentes en
            comparación con la política anterior, en la que la ORR generalmente
            no exigía determinadas comprobaciones de antecedentes o incluso
            pruebas de identidad para los miembros de la familia y los
            cuidadores adultos cuando el patrocinador era un padre o tutor legal
            y no había problemas de seguridad. En general, las nuevas
            directrices también establecen requisitos más estrictos para los
            documentos de identidad.
            <br />
            <br />
            Anteriormente, los documentos caducados eran aceptables para
            establecer la identidad. A partir de ahora, se exigirán documentos
            de identidad con fotografía válidos y no caducados expedidos por el
            gobierno, y los documentos originales deberán presentarse para su
            inspección física en varias fases del proceso. Estos cambios hacen
            más difícil convertirse en patrocinador si las personas que deben
            participar en el proceso de investigación de antecedentes no pueden
            cumplir los requisitos de los documentos de identidad.
            <br />
            <br />
            ¿Se aplican estas orientaciones actualizadas a las reagrupaciones en
            virtud del Acuerdo Sra. L?
            <br />
            <br />
            No. Esta orientación no se aplica a las reunificaciones en virtud de
            la Sección 2.10 Separaciones de la Guía de políticas sobre menores
            extranjeros no acompañados en virtud del Acuerdo Sra. L.
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/cambios.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            Cambios en el Manual de Políticas de EOIR y Emisión de Nuevos
            Memorandos
          </h1>
          <p>
            La Oficina Ejecutiva de Revisión de Inmigración (EOIR) continúa
            haciendo cambios en la política y los aspectos técnicos. EOIR ha
            relanzado sus páginas web y documentos electrónicos de los manuales
            de práctica de los tribunales de inmigración y de la Junta de
            Apelaciones de Inmigración. El nuevo manual también contiene una
            serie de memorandos de política emitidos por Sirce E. Owen, Director
            Interino de EOIR.
            <br />
            <br />
            EOIR emite PM 25-21
            <br />
            <br />
            El 14 de febrero de 2025, EOIR emitió el PM 25-21, rescindiendo el
            anterior memo DM 22-04. El memo anterior enmendó el PM 21-18,
            Revised Case Flow Processing Before the Immigration Courts, y el
            Immigration Court Practice Manual. Como tal, el plazo de
            presentación de 30 días anterior para los casos no detenidos está
            ahora en vigor. Los jueces de inmigración conservan la capacidad de
            establecer sus propios plazos. Además, el memorando aclara que
            cualquier cambio en los plazos se aplican sólo con carácter
            prospectivo a los plazos fijados después del cambio. Por lo tanto,
            los profesionales a los que anteriormente se les emitieron órdenes
            de programación con plazos de quince días pueden seguir basándose en
            esas órdenes de programación.
            <br />
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/unacc.png"
            alt="Unaccompanied"
            width={600}
            height={600}
          />
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/eior.png"
            alt="EIOR"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/juecesfederales.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            Jueces federales emiten medidas cautelares en todo el país contra la
            orden ejecutiva (OE) de Trump para poner fin a la ciudadanía por
            derecho de nacimiento
          </h1>
          <p>
            13 de febrero de 2025:
            <br />
            <br />
            Una cuarta medida cautelar a nivel nacional fue emitida por un juez
            de distrito de EE.UU. en Massachusetts.
            <br />
            <br />
            10 de febrero de 2025:
            <br />
            <br />
            Un juez de distrito de EE. UU. en New Hampshire emitió un 3er
            requerimiento judicial preliminar a nivel nacional en New Hampshire
            Indonesian Community Support v. Trump.
            <br />
            <br />
            6 de febrero de 2025:
            <br />
            <br />
            Un juez de distrito de EE.UU. en Seattle emitió una segunda medida
            cautelar a nivel nacional. Juez Coughenour: «La Constitución no es
            algo con lo que el Gobierno pueda jugar. Si el Gobierno quiere
            cambiar la excepcional concesión estadounidense de la ciudadanía por
            derecho de nacimiento, tiene que enmendar la propia Constitución.»
            <br />
            <br />
            5 de febrero de 2025:
            <br />
            <br />
            Un juez de distrito de EE.UU. en Maryland emitió una medida cautelar
            a nivel nacional en el caso CASA v. Trump, declarando que la OE
            contradice la 14ª enmienda y que la ciudadanía por derecho de
            nacimiento es la ley y la tradición de los Estados Unidos.
            <br />
            <br />
            La medida cautelar es temporal y se espera que la administración
            recurra. La demanda fue presentada por CASA y Asylum Seeker Advocacy
            Project (ASAP) en nombre de 5 mujeres embarazadas indocumentadas.
            <br />
            <br />
            Otros retos:
            <br />
            <br />
            Al menos 22 fiscales generales estatales interpusieron una demanda
            para detener la OE. Es probable que los litigios en curso se centren
            en lo que significa que alguien esté «sujeto a la jurisdicción» de
            Estados Unidos.
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/retroceso.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            Retroceso del Boletín de Visas para Marzo de 2025 Afectando a SIJs y
            Trabajadores Religiosos
          </h1>
          <p>
            El Departamento de Estado anunció a través del Boletín de Visas para
            marzo de 2025 que la fecha de prioridad para aquellos en la
            categoría EB-4 retrocederá al 1 de agosto de 2019, en las Fechas de
            Acción Final (Tabla A) para todas las áreas de imputabilidad.
            <br />
            <br />
            Este es un cambio de 17 meses desde el actual Boletín de Visas de
            febrero de 2025. El Servicio de Ciudadanía e Inmigración de los
            Estados Unidos (USCIS) ha indicado que las categorías de preferencia
            basadas en empleo deben usar la tabla de Fechas de Acción Final para
            propósitos de presentación de solicitudes de ajuste de estatus en el
            mes de marzo.
            <br />
            <br />
            ¿Qué significa esto para los jóvenes inmigrantes especiales (SIJ)?
            <br />
            <br />
            Si la fecha de prioridad de la petición del Formulario I-360 SIJ es
            anterior al 1 de enero de 2021, y aún no se ha presentado una
            solicitud de ajuste de estatus mediante el Formulario I-485, se
            insta a los jóvenes SIJ a presentar el Formulario I-485 antes del 28
            de febrero de 2025.
            <br />
            <br />
            Los jóvenes SIJ que están pendientes de ajuste de estatus y que
            estarán sujetos a retroceso de visado en marzo probablemente se
            enfrentarán a retrasos en la adjudicación de su estatus de ajuste
            debido a la falta de disponibilidad de visado.
            <br />
            <br />
            Los solicitantes que tienen fechas de prioridad I-360 actuales y
            solicitudes de ajuste de estatus completas en espera de adjudicación
            pueden considerar abogar por la adjudicación acelerada a través de
            la asistencia del Congreso, mientras que su fecha de prioridad sigue
            siendo actual.
            <br />
            <br />
            ¿Qué significa esto para los trabajadores religiosos?
            <br />
            <br />
            Si la fecha de prioridad de su petición de inmigrante especial I-360
            aparece como actual (antes del 1 de febrero de 2021) y usted estaba
            planeando presentar su solicitud de ajuste de estatus I-485, debe
            ser recibida por USCIS antes del 28 de febrero de 2025. Si USCIS
            acepta su solicitud I-485 en marzo de 2025 y su fecha de prioridad
            ya no es actual debido al retroceso, su solicitud I-485 debe ser
            rechazada o si es aceptada será denegada.
            <br />
            <br />
            Si su solicitud I-485 está pendiente, es probable que este retroceso
            retrase aún más la adjudicación final de su solicitud durante
            bastante tiempo. Debe asegurarse de que posee un documento de
            autorización de empleo (EAD) y un documento de viaje (advance
            parole) válidos y renovarlos a tiempo (serán válidos durante cinco
            años).
            <br />
            <br />
            Aunque la categoría EB-4 deje de estar disponible temporalmente, su
            solicitud I-485 debidamente presentada seguirá pendiente y su EAD y
            documento de viaje seguirán siendo válidos. Sin embargo, USCIS no
            puede aprobar su solicitud I-485 hasta que la categoría EB-4 muestre
            visas de inmigrante disponibles.*
            <br />
            <br />
            *Tenga en cuenta que el programa de residencia permanente
            no-ministerial es válido hasta el 14 de marzo de 2025. El programa
            debe ser prorrogado por el Congreso. Si el programa no se extiende
            para esta fecha, los trabajadores religiosos no ministros con
            solicitudes I-485 pendientes no podrán obtener la residencia
            permanente después de esta fecha.
            <br />
            <br />
            ¿Deben los empleadores religiosos presentar la petición I-360?
            <br />
            <br />
            USCIS continúa aceptando peticiones I-360 para Inmigrantes
            Especiales.* Se recomienda que los empleadores religiosos de EE.UU.
            continúen presentando peticiones I-360 ante USCIS para que a los
            trabajadores religiosos se les asigne una fecha de prioridad. Tenga
            en cuenta que la petición I-360 no confiere ni prorroga el estatus
            de trabajador religioso R-1. Por lo tanto, los trabajadores
            religiosos deben seguir manteniendo su estatus. Por lo tanto, los
            trabajadores religiosos deben continuar manteniendo su estatus R-1
            mientras la petición I-360 es adjudicada por USCIS.
            <br />
            <br />
            *Tenga en cuenta que si el programa de residencia permanente no
            ministerial no se extiende después del 14 de marzo de 2025, es
            probable que USCIS no acepte nuevas peticiones I-360 presentadas en
            nombre de trabajadores religiosos no ministeriales.
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/unacc.png"
            alt="Unaccompanied"
            width={600}
            height={600}
          />
        </div>

        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/eior.png"
            alt="EIOR"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/eior.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Cambios y actualizaciones del EOIR</h1>
          <p>
            La Oficina Ejecutiva de Revisión de Inmigración (EOIR) sigue
            introduciendo cambios en los aspectos políticos y técnicos. EOIR ha
            relanzado sus páginas web y documentos electrónicos de los manuales
            de práctica de los tribunales de inmigración y de la Junta de
            Apelaciones de Inmigración. El nuevo manual también contiene una
            serie de memorandos de política emitidos por Sirce E. Owen, Director
            Interino de EOIR.
            <br />
            <br />
            EOIR emite PM 25-17
            <br />
            <br />
            El 3 de febrero de 2025, EOIR emitió PM 25-17, rescindiendo un
            memorando anterior, DM 22-05, que había rescindido otros tres
            memorandos de política (PM 19-05, PM 21-06, y PM 21-13). Como tal,
            EOIR restablece estos 3 memorandos previamente rescindidos. Los
            memorandos restablecidos se resumen a continuación.
            <br />
            <br />
            PM 19-05 proporciona orientación sobre la adjudicación de las
            solicitudes de asilo, indicando que las solicitudes de asilo deben
            ser resueltas en un plazo de 180 días y que las solicitudes de
            aplazamiento por los demandados que retrasarían la adjudicación de
            las solicitudes de asilo más allá del plazo de 180 días deben pasar
            la buena causa y circunstancias excepcionales normas descritas en la
            INA.
            <br />
            <br />
            La PM 21-06 describe los procedimientos para las solicitudes de
            asilo y el reloj de asilo. El memorando establece que el reloj de
            asilo (los 180 días para la adjudicación) se detendrá
            permanentemente cuando (1) el solicitante reconozca que la solicitud
            no fue presentada a tiempo y no se apliquen excepciones; (2) el Juez
            de Inmigración determine que la solicitud no fue presentada a tiempo
            y no se apliquen excepciones; (3) el solicitante retire la
            solicitud; (4) el Juez de Inmigración determine que la solicitud fue
            abandonada; o (5) el Juez de Inmigración haya adjudicado la
            solicitud de asilo concediéndola o denegándola. El memorando también
            confirma que el reloj del Documento de Autorización de Empleo (EAD)
            es para la conveniencia de USCIS y es una función administrativa.
            Por lo tanto, los tribunales de inmigración rechazarán cualquier
            moción relacionada con el reloj EAD y los IJ no emitirán órdenes
            relativas al reloj EAD. Si un solicitante de asilo cree que el reloj
            EAD en su caso es incorrecto, él o ella debe dirigir el asunto al
            Administrador de la Corte - o la Oficina del Secretario de la Junta
            si el caso está pendiente ante la Junta - por escrito. Sin embargo,
            USCIS sigue siendo el adjudicador apropiado de las solicitudes de
            autorización de empleo. Por lo tanto, un solicitante de asilo que,
            después de ponerse en contacto con la EOIR, siga creyendo que el
            reloj del EAD en su caso es incorrecto debe ponerse en contacto con
            el USCIS en relación con su solicitud.
            <br />
            <br />
            Por último, la PM 21-13 se refiere a los aplazamientos. El memorando
            proporciona una lista de principios de política como una ayuda a los
            adjudicadores considerando los tipos comunes de aplazamientos. Se
            instruye a los adjudicadores a conceder aplazamientos en casos
            raros, y que la norma general es una buena causa.
            <br />
            <br />
            EOIR Rescinde DM 22-06 sobre Amigos de la Corte
            <br />
            <br />
            El 4 de febrero de 2025, EOIR emitió PM 25-18, rescindiendo DM 22-06
            sobre Amigos de la Corte. DM 22-06 rescinde un memorando anterior de
            la administración Trump, PM 20-25, que prohibió a los Amigos de la
            Corte y proporcionó orientación a los IJ sobre cómo utilizar el
            modelo de Amigo de la Corte para facilitar los procedimientos y
            ayudar a los demandados pro se. El modelo de Amigo de la Corte fue
            una herramienta valiosa que ayudó a los demandados pro se a navegar
            por el complejo sistema judicial de inmigración, lo que condujo a
            una mayor eficiencia y justicia.
            <br />
            <br />
            EOIR Deroga PM 23-04
            <br />
            <br />
            El 3 de febrero de 2025, EOIR emitió PM 25-16, rescindiendo el memo
            PM 23-04 que instruía a los adjudicadores de EOIR a gestionar sus
            expedientes de manera eficiente, centrándose en los casos en que el
            demandado era una prioridad de aplicación de inmigración civil o que
            deseaban una adjudicación completa de una solicitud de ayuda de
            inmigración. Además, les ordenó que no gastaran recursos judiciales
            en casos que no pertenecieran a esas categorías. Se instruyó a los
            jueces de inmigración para preguntar si el demandado es una
            prioridad de aplicación. El nuevo memorando hace hincapié en la
            independencia de los jueces y prohíbe imponer resultados específicos
            en los casos.
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/jueces.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>
            Jueces federales emiten medidas cautelares en todo el país contra la
            OE de Trump para acabar con la ciudadanía por derecho de nacimiento
          </h1>
          <p>
            23 de enero de 2025:
            <br />
            <br />
            Un juez federal en el estado de Washington bloqueó temporalmente la
            orden ejecutiva (OE) durante 14 días, calificando la orden de
            «descaradamente inconstitucional.»
            <br />
            <br />
            5 de febrero de 2025:
            <br />
            <br />
            Un juez de distrito de EE.UU. en Maryland emitió una medida cautelar
            a nivel nacional en CASA v. Trump encontrando que la OE contradice
            la Enmienda 14 de la Constitución & que la ciudadanía por derecho de
            nacimiento es la ley y la tradición de los Estados Unidos. La
            demanda fue presentada por CASA y el Asylum Seeker Advocacy Project
            (ASAP) en nombre de 5 mujeres embarazadas indocumentadas. La medida
            cautelar proporciona un alivio temporal, y se espera que la
            administración apele.
            <br />
            <br />
            6 de febrero de 2025:
            <br />
            <br />
            Un juez de distrito de EE.UU. en Seattle emitió la segunda orden
            judicial a nivel nacional. Juez Coughenour: «La Constitución no es
            algo con lo que el gobierno pueda jugar a la política... Si el
            gobierno quiere cambiar la excepcional concesión estadounidense de
            la ciudadanía por derecho de nacimiento, tiene que modificar la
            propia Constitución.»
            <br />
            <br />
            Otros desafíos:
            <br />
            <br />
            Al menos 22 fiscales generales estatales presentaron demandas para
            detener la OE. Es probable que los litigios en curso se centren en
            lo que significa que alguien esté «sujeto a la jurisdicción» de
            Estados Unidos.
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/citizen.png"
            alt="Ciudadano"
            width={400}
            height={400}
          />
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/venezuela.png"
            alt="Venezuela"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/terminacion.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Terminación de la designación de TPS para Venezuela en 2023</h1>
          <p>
            Hoy, el Departamento de Seguridad Nacional anunció a través del
            Registro Federal la terminación de la designación del 3 de octubre
            de 2023 de Venezuela para el Estatus de Protección Temporal (TPS).
            La terminación se hará efectiva el 6 de abril de 2025. En
            consecuencia, el 6 de abril de 2025, las personas a quienes se les
            haya otorgado TPS bajo la designación de Venezuela 2023 ya no
            tendrán TPS ni los beneficios asociados con el mismo.
            <br />
            <br />
            Nota: Esta terminación no se aplica a la designación 2021 de
            Venezuela para TPS. La designación de 2021 sigue vigente hasta el 10
            de septiembre de 2025.
            <br />
            <br />
            Las nuevas preguntas frecuentes de CLINIC sobre el TPS para
            Venezuela proporcionan información adicional sobre este cambio de
            política. CLINIC continúa abogando por el TPS a nivel federal y
            mantendrá informados a los Afiliados de cualquier cambio futuro.
            Para otros recursos de TPS, por favor visite la página web de TPS y
            DED de CLINIC.
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/tps.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>TPS Venezuela Vacatur</h1>
          <p>
            El 28 de enero de 2025, el DHS anuló la notificación del 17 de enero
            de 2025 que prorrogaba la designación del Estatus de Protección
            Temporal (TPS) para Venezuela. El DHS volverá a la guía de rediseño
            y extensión del TPS anunciada en octubre de 2023.
            <br />
            <br />
            La extensión de octubre de 2023 del TPS para Venezuela termina el 10
            de septiembre de 2025, para aquellos que se registraron bajo la
            designación de TPS Venezuela de 2021. Para aquellos que se
            registraron bajo la designación de 2023, la designación de TPS
            expira el 2 de abril de 2025.
            <br />
            <br />
            El DHS debería haber determinado, antes del 1 de febrero de 2025, si
            extender o terminar la designación TPS Venezuela 2023, y debe
            determinar, antes del 12 de julio de 2025, si extender o terminar la
            designación TPS Venezuela 2021. Dado que el DHS no tomó una
            determinación oportuna antes de la fecha límite del 1 de febrero, el
            estatuto prevé una prórroga automática de la designación por 6
            meses.
            <br />
            <br />
            El Servicio de Ciudadanía e Inmigración de EE.UU. (USCIS) no
            aceptará las solicitudes de reinscripción al TPS de Venezuela
            (Formulario I-821) y las solicitudes de autorización de empleo
            asociadas (Formulario I-765) presentadas en virtud del Aviso de
            Mayorkas del 17 de enero.
            <br />
            <br />
            Para los beneficiarios del TPS que ya han presentado solicitudes de
            reinscripción para el TPS de conformidad con el Aviso Mayorkas y
            pagado las tarifas asociadas a sus solicitudes, USCIS dejará de
            procesar sus solicitudes y emitirá reembolsos de las tarifas
            pagadas. Las extensiones automáticas de EAD proporcionadas por el
            Aviso Mayorkas del 17 de enero también han sido rescindidas.
            <br />
            <br />
            USCIS también invalidará EADs, Avisos de Aprobación, y cualquier
            otra documentación TPS que se han emitido con el 2 de octubre de
            2026, las fechas de vencimiento. USCIS reembolsará las tarifas ya
            pagadas.
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/venezuela.png"
            alt="Venezuela"
            width={400}
            height={400}
          />
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/criminal.png"
            alt="crimines"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/ley.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Ley Laken Riley firmada por el Presidente</h1>
          <p>
            El 29 de enero de 2025, el presidente firmó la Ley Laken Riley. La
            nueva ley amplía la detención obligatoria para incluir la de los no
            ciudadanos detenidos, acusados o condenados por determinados
            delitos, como robo con allanamiento de morada, hurto, hurto en
            tiendas, agresión a un agente de policía y cualquier delito que
            cause la muerte o lesiones corporales graves. Sin embargo, la ley
            sólo se aplica a los inadmisibles en virtud de la sección
            212(a)(6)(A) de la INA (entrada sin inspección), la sección
            212(a)(7) de la INA (no poseer un documento de entrada válido) y la
            sección 212 (a)(6)(C) de la INA (fraude). La ley no se aplica a
            quienes hayan sido admitidos previamente en Estados Unidos.
            <br />
            <br />
            La ley también otorga a los fiscales generales de los estados el
            derecho a demandar al gobierno federal por supuestas infracciones de
            las disposiciones sobre detención obligatoria cuando los no
            ciudadanos en esos casos hayan cometido presuntamente delitos que
            perjudiquen física o económicamente a los estados o a sus
            residentes, si el valor del perjuicio es superior a 100 dólares. Los
            Estados tienen un derecho similar a demandar en los casos en que
            aleguen que el gobierno federal no ha rescindido los visados de los
            no ciudadanos que presuntamente han cometido delitos que perjudican
            a los Estados o a sus residentes.
            <br />
            <br />
            Los afiliados que tengan preguntas sobre cómo afecta la Ley Laken
            Riley a sus clientes y sobre posibles argumentos contra su
            aplicación pueden solicitar asistencia técnica a través del
            formulario Pregunte a los expertos del sitio web CLINIC.
          </p>
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/uscis.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>USCIS Pausa la Aceptación del Formulario I-134A</h1>
          <p>
            El 28 de enero de 2025, USCIS anunció que pausaría la aceptación del
            Formulario I-134A, Solicitud en Línea para ser Partidario y
            Declaración de Apoyo Financiero, hasta que revisen todos los
            procesos categóricos de libertad condicional como lo requiere la
            orden ejecutiva del 20 de enero de 2025. Los sitios web para los
            siguientes procesos categóricos se han eliminado y en su lugar
            enlazan directamente con el anuncio de pausa del 28 de enero:
            Procesos para cubanos, haitianos, nicaragüenses y venezolanos;
            Unirse para Ucrania; y Procesos de Libertad condicional de
            Reunificación Familiar.
          </p>
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            src="/immigration/financial.png"
            alt="Crimines"
            width={400}
            height={400}
          />
        </div>
        <div className={classes.imageContainerLarge}>
          <Image
            className={classes.large}
            src="/immigration/eior.png"
            alt="EIOR"
            width={400}
            height={400}
            style={{ marginRight: "10rem" }}
          />
        </div>
        <div className={classes.hero}>
          <AudioPlayer
            className={classes.audioPlayer}
            src="/audio/eior2.mp3"
            style={{ marginLeft: "-5rem" }}
          />
          <h1>Cambios y actualizaciones de la EOIR</h1>
          <p>
            La semana pasada, la Oficina Ejecutiva de Revisión de Inmigración
            (EOIR) hizo una serie de cambios en la política y los aspectos
            técnicos. EOIR quitó sus páginas web y documentos electrónicos de
            los manuales de práctica de la corte de inmigración y de la Junta de
            Apelaciones de Inmigración y los reemplazó con un solo documento PDF
            titulado «Manual de Política de EOIR». Actualmente, no hay versiones
            electrónicas de los manuales en línea, incluidos los apéndices de
            referencia. El nuevo Manual también contiene una serie de memorandos
            de política emitidos por Sirce E. Owen, Director en funciones de
            EOIR. Estos memorandos de política, disponibles en la página 561 del
            Manual, ya no se publicarán directamente en el sitio web de EOIR,
            sino que se añadirán al Manual de Política. Los memorandos de
            política incluyen varias directivas a los tribunales de inmigración,
            incluyendo volver al uso de la palabra «extranjero» por los
            adjudicadores de EOIR; orientación sobre las disposiciones de
            detención obligatoria de la recién firmada Ley Laken Riley; y volver
            a los memorandos de política anteriores de la era Trump sobre los
            servicios pro bono. A continuación, CLINIC ha esbozado algunos de
            los memorandos más notables que afectan a los clientes en
            procedimientos de deportación, incluidos los niños no acompañados.
            <br />
            <br />
            EOIR restablece PM 17-03 - En relación con los menores y niños no
            acompañados y restablece Trump-Era Memo sobre defensores de menores
            El 29 de enero de 2025, EOIR emitió Policy Memorandum (PM) 25-10
            rescindiendo y cancelando el 12/21/23 Director's Memorandum (DM)
            24-01, que proporcionó orientación sobre los casos de los niños y
            los expedientes de menores en la corte de inmigración, y
            reinstalando el 12/20/17 Operating Policies and Procedures
            Memorandum (OPPM) 17-03, que proporciona directrices para los casos
            de la corte de inmigración que involucran a menores, incluidos los
            niños no acompañados. El memorando señala que el OPPM 17-03 ahora
            también puede ser referido como PM 17-03. DM 24-01 ofrece
            protecciones ampliadas para los niños en los tribunales de
            inmigración, incluyendo la ampliación de la edad para las
            consideraciones sensibles a los niños a los demandados menores de 21
            años, ordenando IJ para informar siempre a los niños de la ayuda
            potencial, el reconocimiento de USCIS jurisdicción inicial sobre las
            solicitudes de asilo presentadas por niños no acompañados, y el
            reconocimiento formal de la función de los defensores de los niños y
            los amigos de la corte, entre otros requisitos especiales. Con la
            rescisión de la DM 24-01 y el restablecimiento de la PM 17-03, las
            protecciones especiales para los niños demandados son más limitadas
            en su alcance, incluyendo la designación de la edad de un niño para
            incluir sólo a las personas menores de 18 años. Para una comparación
            de la DM 24-01 y la PM 17-03, consulte un gráfico creado por la
            Academia de Derecho de Inmigración de Menores (CILA) de la ABA.
            Además, el 31 de enero de 2025, EOIR emitió PM 25-14 que restablece
            el memorando de la era Trump, PM 20-03, que establece que Salud y
            Servicios Humanos no tiene la autoridad para designar Defensores de
            Niños para todos los niños no acompañados y limita la capacidad de
            los Defensores de Niños para ayudar a los UC durante los
            procedimientos de deportación.
            <br />
            <br />
            EOIR autoriza las acciones de aplicación de ICE en el espacio EOIR
            <br />
            <br />
            El 28 de enero de 2025, EOIR emitió PM 25-06, rescindiendo un
            memorando anterior que prohibía las acciones de aplicación de la
            inmigración civil por el DHS en o cerca de los espacios de EOIR en
            los esfuerzos para alentar a los demandados a asistir a sus
            audiencias de expulsión y ayudar a garantizar la seguridad de los
            visitantes de la corte y el personal de EOIR. El nuevo memorando,
            sin embargo, permite al DHS llevar a cabo acciones de aplicación
            civil en o cerca de los espacios del EOIR. Los abogados deben tener
            muy en cuenta esta nueva política de ejecución al preparar y
            asesorar a los clientes antes de las comparecencias ante el EOIR y
            planificar en consecuencia. Esta nueva política también podría
            afectar a la facilitación de la asistencia pro bono ofrecida a los
            no ciudadanos en los tribunales de inmigración por los proveedores
            de servicios jurídicos. CLINIC continuará vigilando de cerca los
            informes de actividades de aplicación de la ley del DHS en o cerca
            de los tribunales de inmigración e informará a los afiliados.
            <br />
            <br />
            EOIR Emite Memo Afirmando la Autoridad de la BIA para Emitir
            Desestimaciones Sumarias de Apelaciones
            <br />
            <br />
            El 27 de enero de 2025, EOIR emitió PM 25-04, que rescinde un memo
            de la era Biden sobre Procesamiento de Casos en la Junta de
            Apelaciones de Inmigración. El nuevo memorando no establece nuevos
            procedimientos o requisitos para el procesamiento de casos de la
            BIA, pero confirma la autoridad de la BIA para emitir
            desestimaciones sumarias de apelaciones y el uso no restrictivo de
            emitir afirmaciones sin opinión.
            <br />
            <br />
            La EOIR ordena a los Adjudicadores de la EOIR que no investiguen la
            posición del DHS sobre la Discreción Fiscal El 29 de enero de 2025,
            EOIR emitió PM 25-09, rescindiendo un memorando anterior que
            anteriormente proporcionaba orientación a los adjudicadores de EOIR
            sobre las prioridades de aplicación del DHS y el uso de la
            discreción del fiscal. El nuevo memorando establece que los
            adjudicadores de EOIR no tienen ninguna base para inquirir la
            posición del DHS con respecto a la discreción del fiscal y reafirma
            que el DHS es la única agencia para la que es apropiado determinar
            si un caso particular justifica un ejercicio de la discreción del
            fiscal.
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
        </div> */}
      </header>
    </>
  );
}
