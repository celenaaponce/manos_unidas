import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function DictionaryPage() {
  return (
    <>
      <header className={classes.header}></header>
      <main className={classes.main}>

        <h2>Diccionario con más de 800 señas en Español y ASL</h2>
        <div className={classes.cta}>
          <div className={classes.container}>
            <ul>
              <div className={classes.image}>
                <Image src="/images/full.png" width={250} height={250} alt="todo el diccionario"/>
              </div>
              <Link href={`/ASL/Diccionario/DictFull`}>
                Diccionario Completo
              </Link>
            </ul>
            <ul>
              <div className={classes.image}>
                <Image src="/images/letter.png" width={250} height={200} alt="buscar por letra"/>
              </div>
              <Link href={`/ASL/Diccionario/DictLetter`}>Buscar por Letra</Link>
            </ul>
            <ul>
              <div className={classes.image}>
                <Image src="/images/topics.png" width={250} height={250} alt="buscar por tema"/>
              </div>
              <Link href={`/ASL/Diccionario/DictTheme`}>Buscar por Tema</Link>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

