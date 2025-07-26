import React from "react";
import Image from "next/image";
import classes from "./kyr.page.module.css";

const KYR = ({
  title,
  text,
  flag,
  imageAlt,
  reverse,
  youtubeId,
  youtubeId2,
}) => {
  return (
    <div>
      <div className={`${classes.row}`}>
        {youtubeId != "" && (
          <div className={`${classes.imageContainer} ${classes.hideOnSmall}`}>
            <Image
              className={classes.large}
              src={flag}
              alt={imageAlt}
              width={300}
              height={300}
              style={{ marginLeft: "5rem" }}
            />
          </div>
        )}
        {youtubeId2 != "" && (
          <div className={classes.imageContainer}>
            <Image
              className={classes.large}
              src={flag}
              alt={imageAlt}
              width={300}
              height={300}
              style={{ marginLeft: "5rem" }}
            />
          </div>
        )}
      </div>

      <div className={`${classes.row}`}>
        {youtubeId != "" && (
          <div className={`${classes.imageContainer} ${classes.forceTwoColumns}`} >
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={classes.large}
            />
          </div>
        )}
        {youtubeId2 != "" && (
          <div className={`${classes.imageContainer} ${classes.forceTwoColumns}`} >
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId2}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={classes.large}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default KYR;
