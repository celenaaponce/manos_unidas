import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Entrar() {
  return (
    <>
      <h2 className={classes.section}>Entrar a su clase de ASL</h2>
      <header className={classes.header}>
        <div className={classes.hero}><p>Información disponible en las siguientes semanas.</p></div>
      </header>
    </>
  );
}
