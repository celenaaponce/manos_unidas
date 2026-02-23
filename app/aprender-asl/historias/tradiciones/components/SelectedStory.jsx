import Button from "./Button";
import { useState, useRef } from "react";
import playBtn from "public/fiesta/play.png";
import backBtn from "public/fiesta/backbtn.png";
import VideoModal from "./VideoModal";
import styles from "./Button.module.css"

export default function SelectedStory({ story, onReturn, language }) {
  let text = language === "spanish" ? story.textspanish : story.textenglish;
  text = text.replace(/\n/g, "<br>");
  const [videoPlaying, setVideoPlaying] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const dialog = useRef();

  function handleVideoClicked(videoUrl) {
    setIsPlaying(true);
    console.log('video', videoUrl);
    setVideoPlaying(`${videoUrl}`);
    dialog.current.showModal();
  }

  function handleStop() {
    setIsPlaying(false);
  }

  return (
    <>
      <VideoModal
        ref={dialog}
        videoLink={videoPlaying}
        playing={isPlaying}
        onStop={handleStop}
        language={language}
      />

      <div className={styles.storySelected}>
        <h3>{story.name}</h3>
        <p dangerouslySetInnerHTML={{ __html: text }} />
        <div className={styles.storyItemOptions}>
          <Button img={backBtn} onClick={onReturn}>
          {language==='spanish' ? 'Regresar a la Pagina Principal' : 'Return to Main Page'}
          </Button>
          <Button
            img={playBtn}
            onClick={() =>
              handleVideoClicked(
                language === "spanish"
                  ? story.aslvideospanish
                  : story.aslvideoenglish
              )
            }
          >
            {language==='spanish' ? 'Mirar en ASL' : 'Watch in ASL'}
          </Button>
          <Button
            img={playBtn}
            onClick={() => handleVideoClicked(story.celebrationvideo)}
          >
            {language==='spanish' ? 'Mirar la Celebración' : 'Watch the Celebration'}
          </Button>
        </div>
      </div>
    </>
  );
}
