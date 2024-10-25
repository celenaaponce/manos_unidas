import Button from "./Button";
import Image from "next/image";
import bckImg from "public/fiesta/background.png";
import americanFlg from "public/fiesta/americanflag.png";
import mexicanFlg from "public/fiesta/mexicanflag.png";
import styles from "./Button.module.css"

export default function IntroPage({ onLanguage }) {
  return (
    <div className={styles.introPage}>
      <Image
      className={styles.image}
        src={bckImg}
        alt="Background Image"
      />

      <div className={styles.introContent}>
        <h3>
          Choose your language <br /> Escoja su idioma
        </h3>

        <div className={styles.introItemOptions}>
          <Button onClick={() => onLanguage("english")}>
            <Image src={americanFlg} height={50} />
            English (Inglés)
          </Button>
          <Button onClick={() => onLanguage("spanish")}>
            <Image src={mexicanFlg} height={50} />
            Español (Spanish)
          </Button>
        </div>
      </div>
    </div>
  );
}
