// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "./icon.png";
// import classes from "./page.module.css";
// import AudioPlayer from "components/audioPlayer/audioPlayer";
// import Popup from "components/popup/Popup";
// import PDFViewer from "./viewer";
// import { useState, useEffect } from "react";
// import iphone from "public/images/iphone.png";
// import android from "public/images/android.png";
// import KYR from "public/immigration/kyr.jpg";
// import ASLclasses from "public/others/Eneroclasses.png"

// export default function Home() {
//   const [isFirstVisit, setIsFirstVisit] = useState(false);

//   useEffect(() => {
//     const hasVisited = localStorage.getItem("hasVisited");
//     if (!hasVisited) {
//       setIsFirstVisit(true);
//       localStorage.setItem("hasVisited", "true");
//     }
//   }, []);

//   const handleClosePopup = () => setIsFirstVisit(false);

//   return (
//     <>
//       <header className={classes.header}>
//         <div className={classes.slideshow}>
//           <Image src={logo} width={300} height={300} alt="Manos Unidas logo" />
//         </div>
//         <div className={classes.hero}>
//           <AudioPlayer
//             src="/audio/mainheader.mp3"
//             className={classes.audioPlayer}
//           />
//           <div>
//             <h1>Manos Unidas</h1>
//             <p>
//               Apoyando a las familias latinas con niños sordos o sordos parciales conectar y crecer con su hijo.
//             </p>
//           </div>
//           <div className={classes.cta}>
//             <a href="https://handsunitedor.org/">See in English</a>
//             <Link href="/inmigracion">Inmigración</Link>
//           </div>
//         </div>
//       </header>
//       <main className={classes.main}>
//         <AudioPlayer src="/audio/bajar.mp3" className={classes.audioPlayer} />
//         <section className={classes.section}>
//           <h2>¡Bajar nuestra app!</h2>
//           <div>
//             <Link
//               href={
//                 "https://apps.apple.com/us/app/hands-united-oregon/id6747975975"
//               }
//               style={{ color: "#56b4e9" }}
//             >
//               <Image src={iphone} height={50}></Image>Bajar para iPhone
//             </Link>
//             <p> </p>
//             <Link
//               href={
//                 "https://play.google.com/store/apps/details?id=com.createcommunity.handsunitedoregon&pcampaignid=web_share"
//               }
//               style={{ color: "#56b4e9" }}
//             >
//               <Image src={android} height={75}></Image>Bajar para Android
//             </Link>
//           </div>
//           <AudioPlayer src="/audio/tarjeta.mp3" className={classes.audioPlayer} style={{marginLeft: "-5rem"}}/>
//           <h2>¡Tarjeta de conozca sus derechos en lenguajes de señas!</h2>
//           <p>
//             Aquí esta nuestra tarjeta de conozca sus derechos en lenguajes de
//             señas. (Haga clic en la imagen para ir a la página). Esta página
//             seguirá creciendo a medida que se vayan añadiendo vídeos.
//           </p>
//           <Link href={"/inmigracion/kyr"}>
//             <div className={classes.responsiveImageWrapper}>
//               <Image src={KYR} width={900}></Image>
//             </div>
//           </Link>
//           <p>
//             Oprima{" "}
//             <a
//               href="/inmigracion/recursos/tarjetas"
//               target="_blank"
//               style={{ color: "#56b4e9" }}
//             >
//               aquí
//             </a>{" "}
//             para bajar el versión para imprimir.
//           </p>

//         </section>

//       </main>

//     </>
//   );
// }

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

import aprenderImg from "public/images/aprenderasl.png";
import inmigracionImg from "public/images/inmigracion.png";
import programasImg from "public/images/programams.png";

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
      {/* KEEP EXISTING HEADER EXACTLY */}
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <Image src={logo} width={300} height={300} alt="Manos Unidas logo" />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Manos Unidas</h1>

            <p>
              Apoyando a las familias latinas con niños sordos o sordos
              parciales conectar y crecer con su hijo.
            </p>
          </div>

          <div className={classes.cta}>
            <a href="https://handsunitedor.org/">See in English</a>
            <Link href="/inmigracion">Inmigración</Link>
          </div>
        </div>
      </header>

      <main className={classes.main}>
        {/* SECTION 1 — PRIMARY NAVIGATION */}
        <section className={classes.section}>
          <h2>¿Qué necesita hoy?</h2>

          <div className={classes.cardGrid}>
            <Link href="/aprender-asl" className={classes.card}>
              <Image
                src={aprenderImg}
                alt="Aprender ASL"
                className={classes.cardImage}
              />

              <div className={classes.cardContent}>
                <h3>Aprender ASL</h3>
                <p>Clases, videos y recursos en español</p>
              </div>
            </Link>

            <Link href="/inmigracion" className={classes.card}>
              <Image
                src={inmigracionImg}
                alt="Inmigración"
                className={classes.cardImage}
              />

              <div className={classes.cardContent}>
                <h3>Inmigración</h3>
                <p>Conozca sus derechos y recursos</p>
              </div>
            </Link>

            <Link href="/programas" className={classes.card}>
              <Image
                src={programasImg}
                alt="Programas"
                className={classes.cardImage}
              />

              <div className={classes.cardContent}>
                <h3>Programas</h3>
                <p>Clases de manejo y aplicación</p>
              </div>
            </Link>
          </div>
        </section>

        {/* SECTION 2 — IMMIGRATION EMERGENCY */}
        {/* <section className={classes.section}>

          <AudioPlayer
            src="/audio/tarjeta.mp3"
            className={classes.audioPlayer}
          />

          <h2>Conozca sus derechos</h2>

          <p>
            Información importante si habla con inmigración o la policía.
          </p>


          <Link href="/inmigracion/kyr">

            <div className={classes.responsiveImageWrapper}>

              <Image
                src={KYR}
                alt="Conozca sus derechos"
                width={900}
              />

            </div>

          </Link>


          <p>

            Oprima{" "}

            <Link
              href="/inmigracion/recursos/tarjetas"
              style={{ color: "#56b4e9" }}
            >
              aquí
            </Link>

            {" "}para bajar la versión para imprimir.

          </p>

        </section> */}

        {/* SECTION 3 — APP DOWNLOAD */}
        {/* <section className={classes.section}>

          <h2>Bajar nuestra app</h2>

          <div className={classes.appGrid}>

            <Link
              href="https://apps.apple.com/us/app/hands-united-oregon/id6747975975"
              className={classes.appCard}
            >

              <Image
                src={iphone}
                alt="iPhone"
                height={60}
              />

              <p>iPhone</p>

            </Link>


            <Link
              href="https://play.google.com/store/apps/details?id=com.createcommunity.handsunitedoregon"
              className={classes.appCard}
            >

              <Image
                src={android}
                alt="Android"
                height={60}
              />

              <p>Android</p>

            </Link>

          </div>

        </section> */}
      </main>
    </>
  );
}
