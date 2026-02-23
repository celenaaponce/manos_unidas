import styles from "./Button.module.css"
import Image from "next/image";

export default function Button({ img = '', children, ...props }) {
    let content = <></>
    if (img!= '') {
        content = <Image src={img} width="50" height="auto"/>
    }
  return (
    <button className={styles.button} {...props}>{content}
      {children}
    </button>
  );
}
