import React from "react";
import Image from "next/image";
import AudioPlayer from "components/audioPlayer/audioPlayer"; // Adjust path as needed
import classes from "./page.module.css";

const Article = ({ audioSrc, title, text, imageSrc, imageAlt, reverse }) => {
  return (
    <div className={`${classes.row} ${reverse ? classes.reverse : ""}`}>
      <div className={classes.hero}>
        <AudioPlayer
          className={classes.audioPlayer}
          src={audioSrc}
          style={{ marginLeft: "-5rem" }}
        />
        <h1>{title}</h1>
        <p>
          {" "}
          {text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>

      <div className={classes.imageContainer}>
        <Image
          className={classes.large}
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          // style={{ marginLeft: "5rem" }}
        />
      </div>
    </div>
  );
};

export default Article;
