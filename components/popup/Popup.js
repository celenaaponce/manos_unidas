import React from 'react';
import flyer from "./manos unidas.png"
import Image from 'next/image';
import Link from 'next/link';

const Popup = ({ onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <Image src={flyer} height={500}/>
        <div>
        <Link href="./ASL/Clases/Signup">Registrar aqui</Link></div>
        <div><button onClick={onClose}>Cerrar</button></div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    
  },
};

export default Popup;