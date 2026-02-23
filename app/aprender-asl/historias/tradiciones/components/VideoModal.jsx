import { useState, forwardRef } from "react";
import Button from "./Button";
import styles from "./Button.module.css";
import ReactPlayer from "react-player";

const VideoModal = forwardRef(function VideoModal(
  { videoLink, playing, onStop, language },
  ref
) {
  return (
    <dialog
      ref={ref}
      className={styles.modal}
    >
      <div className={styles.videoContainer}>
        <ReactPlayer
          url={videoLink}
          controls
          volume={1}
          playing={playing}
          width="100%"
          height="1000%"
        />
      </div>
      <form method="dialog" className= {styles.dialog} onSubmit={onStop}>
        <Button>{language === 'spanish' ? 'Cerrar' : 'Close'}</Button>
      </form>
    </dialog>
  );
});

export default VideoModal;
