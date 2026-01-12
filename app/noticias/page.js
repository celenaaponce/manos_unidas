import styles from "./page.module.css";
import Link from "next/link";
import AudioPlayer from "components/audioPlayer/audioPlayer";



export default function NewsletterPageES() {
  return (
    <main className={styles.letter}>
      <article>

        {/* ================= ENCABEZADO ================= */}
        <header>
          <h1>Esta semana y próximos eventos en Manos Unidas</h1>
        </header>

        {/* ================= INTRODUCCIÓN ================= */}
        <section>
            <div className={styles.audioOffset}>
              <AudioPlayer
    className={styles.audioPlayer}
    src="/audio/newsletterp1.mp3"
  /></div>
          <p>
            Hola familias, personas aliadas y profesionales,
          </p>

          <p>
            Tenemos una agenda llena de programas, eventos comunitarios y
            esfuerzos de defensa en Manos Unidas. A continuación compartimos un
            resumen de lo que está ocurriendo esta semana, lo que viene pronto y
            cómo pueden participar.
          </p>
        </section>

        {/* ================= EVENTOS DE ESTA SEMANA ================= */}
        <section>
            <div className={styles.audioOffset}>
              <AudioPlayer
    className={styles.audioPlayer}
    src="/audio/newsletterp2.mp3"
  /></div>
          <h2>Eventos de esta semana</h2>

          <p>
            <strong>Resumen en ASL:</strong>{" "}
            <a
              href="https://youtu.be/TJBYzJLGGMc"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Ver aquí
            </a>
          </p>

          <p><strong>Para familias</strong></p>

          <p><strong>Clases de ASL–Español (Semana 2)</strong></p>
          <p>
            Nuestras clases familiares de ASL–Español han comenzado su segunda
            semana.
            <br />
            📊 <strong>111 familias ya inscritas</strong> — aún hay cupo,
            especialmente los martes, miércoles y jueves.
          </p>
          <p>
            👉{" "}
            <a
              href="https://manosunidas.aidaform.com/clases-de-asl-enero-2026"
              target="_blank"
              className={styles.link}
            >
              Las familias pueden inscribirse aquí
            </a>
          </p>

          <p><strong>16 de enero – Evento especial para familias Hmong</strong></p>
          <p>
            Presentación a cargo de Tina Ly en hmong hablado sobre el autismo y
            la sordera, con interpretación en inglés, ASL y español.
            <br />
            ✔️ Evento gratuito para familias
          </p>
          <p>
            👉{" "}
            <a
              href="https://handsunited.aidaform.com/supporting-hmong-children-with-autism-and-deafness"
              target="_blank"
              className={styles.link}
            >
              Registrarse aquí
            </a>
          </p>

          <p><strong>19 de enero – Encuentro familiar en Tigrinya y Amárico</strong></p>
          <p>
            Evento comunitario enfocado en vocabulario de ASL relacionado con el
            invierno y un espacio abierto para preguntas de las familias.
          </p>
          <p>
            📱 Las familias deben unirse al{" "}
            <a
              href="https://chat.whatsapp.com/GPg93qZytR16Q00RdtZLDR"
              target="_blank"
              className={styles.link}
            >
              grupo de WhatsApp de Tigrinya/Amárico
            </a>{" "}
            para recibir información actualizada.
          </p>

          <p><strong>Para profesionales</strong></p>

          <p><strong>☕ Cafecito – lunes 12 de enero | 6:00 p.m. PST</strong></p>
          <p>
            Espacio informal para conocer nuestros proyectos actuales, recursos
            disponibles y recibir apoyo general.
          </p>

          <p><strong>🎙️ Reuniones sobre voiceover – martes 13 de enero</strong></p>
          <p>
            Dos sesiones: 1:00 p.m. PST y 4:00 p.m. PST.
            <br />
            Abierto a personas interesadas en trabajo de voz en español,
            incluyendo profesionales sordos.
          </p>

          <p><strong>📘 Taller Hmong – viernes 16 de enero</strong></p>
          <p>
            Presentación de Tina Ly en hmong hablado sobre autismo y sordera.
            <br />
            • $20 (sin CEUs)
            <br />
            • $30 (con CEUs)
          </p>

          <p><strong>⚖️ Consulta legal gratuita – 20 de enero | 5:00 p.m. PST</strong></p>

          <p>
            Consulta virtual para personas sordas, con discapacidad auditiva o
            sordociegas.
            <br />
            ✔️ Interpretación en ASL y con intérpretes oyentes disponible
          </p>

          <p><strong>✋ Celebración de señas de nombre – 23 de enero</strong></p>
          <p>
            Evento solo por invitación para familias de habla hispana para
            aprender sobre la cultura de las señas de nombre y crear señas con
            líderes sordos e intérpretes trilingües.
            <br />
            🔢 Cupo limitado a 15 familias
            <br />
            🙋 Buscamos intérpretes trilingües voluntarios
          </p>
        </section>

        {/* ================= PRÓXIMOS TALLERES ================= */}
        <section>
            <div className={styles.audioOffset}>
                          <AudioPlayer
    className={styles.audioPlayer}
    src="/audio/newsletterp3.mp3"
  /></div>
          <h2>Próximos talleres y clases</h2>

          <p><strong>21 de enero – Herramientas interactivas para enseñar y tutorías</strong></p>
          <p>
            Aprenda a usar imágenes integradas, subtítulos incrustados y
            herramientas accesibles para la enseñanza en línea.
            <br />
            • Presentado en ASL
            <br />
            • $50 con CEUs | $30 sin CEUs
          </p>

          <p><strong>26, 28 y 30 de enero – Clases de español (Destinos, episodios 6–8)</strong></p>
          <p>
            Clases impartidas usando SimCom (ASL con español hablado).
            <br />
            🎥 ¿Se perdió los episodios 1–5? Disponibles de forma asincrónica por
            $50.
          </p>
        </section>

        {/* ================= FEBRERO ================= */}
        <section>
            <div className={styles.audioOffset}>
                          <AudioPlayer
    className={styles.audioPlayer}
    src="/audio/newsletterp4.mp3"
  /></div>
          <h2>Eventos y colaboraciones en febrero</h2>

          <p><strong>Clases de LSM y Lengua de Señas Internacional</strong></p>
          <p>
            Inician la primera semana de febrero.
            <br />
            • $150 por 2.0 CEUs
            <br />
            • No se requiere español para LSM
            <br />
            • Incluyen grabaciones
          </p>

          <p><strong>Taller familiar de LSC – 15 de febrero | 5:00 p.m. PST</strong></p>
          <p>
            Aprenda Lengua de Señas Colombiana básica para alimentos, ciudades,
            celebraciones y conceptos culturales.
            <br />
            • En LSC con interpretación en español y ASL
            <br />
            • $15 para profesionales (sin CEUs)
          </p>

          <p><strong>📖 Club de lectura – Inicia el 11 de febrero</strong></p>
          <p>
            <em>La voz de una madre</em>, novela escrita por una autora sorda
            israelí.
            <br />
            • Reuniones cada dos semanas
            <br />
            • Encuentro final con la autora en abril
            <br />
            • Dirigido en ASL
            <br />
            • $125 con CEUs | $100 sin CEUs
          </p>

          <p><strong>🧠 El lenguaje no puede esperar – 21 de febrero</strong></p>
          <p>
            Presentación del Profesor Alejandro Oviedo.
            <br />
            En español hablado con interpretación en inglés y ASL.
            <br />
            • Gratis para familias
            <br />
            • $50 con CEUs | $30 sin CEUs
          </p>
        </section>

        {/* ================= SERVICIOS ================= */}
        <section>
            <div className={styles.audioOffset}>
                          <AudioPlayer
    className={styles.audioPlayer}
    src="/audio/newsletterp5.mp3"
  /></div>
          <h2>Nuevos servicios y recursos</h2>

          <p><strong>Consultas de matemáticas</strong></p>
          <p>
            2 horas mensuales de apoyo en matemáticas en ASL, inglés o español,
            con intérprete trilingüe con maestría en Ingeniería Eléctrica y
            Ciencias de la Computación.
          </p>

          <p><strong>Tienda de Manos Unidas</strong></p>
          <ul>
            <li>Diccionario familiar ASL ↔ Español con páginas para colorear</li>
            <li>Audio y voz en español incluidos</li>
            <li>Clase asincrónica GRATUITA de ASL ↔ Español (20 horas)</li>
          </ul>

          <p>
            <strong>Resumen en ASL:</strong>{" "}
            <a href="https://youtu.be/TVJjH7cuEuc" target="_blank" className={styles.link}>
              Ver aquí
            </a>
          </p>

          <p><strong>Nuevo canal de YouTube en inglés/ASL</strong></p>
          <p>
            📺 @handsunitedor — grabaciones de clases, talleres de inmigración,
            videos de defensa y anuncios.
          </p>
        </section>

        {/* ================= DEFENSA ================= */}
        <section>
            <div className={styles.audioOffset}>
                          <AudioPlayer
    className={styles.audioPlayer}
    src="/audio/newsletterp6.mp3"
  /></div>
          <h2>Defensa y campañas</h2>

          <p><strong>Carta abierta: Acceso a VRS</strong></p>
          <p>
            <a
              href="https://handsunitedor.org/advocacy/open-letter-vrs-access"
              target="_blank"
              className={styles.link}
            >
              Leer la carta
            </a>{" "}
            ·{" "}
            <a href="https://youtu.be/WH_JJ7cSZTs" target="_blank" className={styles.link}>
              Ver resumen en ASL
            </a>
          </p>


            <p><strong>Búsqueda de instructores de manejo con ASL</strong></p>
            <p><strong>Cohorte de defensa migratoria para personas sordas</strong></p>
            <p><strong>
              Abogado/a de inmigración en Los Ángeles para persona sorda
              ucraniana (cita USCIS: 29 de enero)</strong>
            </p>

        </section>

        {/* ================= PIE ================= */}
        <footer>
          <p>
            Gracias por ser parte de esta comunidad creciente, multilingüe y
            centrada en personas sordas. Su participación y apoyo hacen posible
            este trabajo.
          </p>

          <p>
            Con gratitud,
            <br />
            <strong>Celena Ponce</strong>
            <br />
             Manos Unidas
          </p>
        </footer>

      </article>
    </main>
  );
}
