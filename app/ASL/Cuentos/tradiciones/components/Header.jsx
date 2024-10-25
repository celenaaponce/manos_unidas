import Image from 'next/image';
import logoImg from 'public/fiesta/logo.jpg'
import styles from "./Button.module.css"
export default function Header() {
  return (
    <header id={styles.mainHeader}>
      <div id={styles.title}>       
        <Image src="/fiesta/logo.jpg" width={100} height={100}/>
        <h4>¡Somos Muy Fiesteros!</h4>
      </div>
    </header>
  );
}
