// import classes from "./kyr.page.module.css";
// import React from "react";
// import Image from "next/image";
// import data from "./kyr.json";

// const KYR = ({ title, text }) => {
//   return (
//     <div className={classes.grid}>
//       {data.map((item, index) => (
//         <div key={index} className={classes.column}>
//           <Image
//             src={item.flag}
//             alt={item.flagAlt}
//             width={300}
//             height={300}
//             className={classes.centeredMedia}
//           />
//   <video
//     className={classes.centeredMedia}
//     width="300"
//     height="200"
//     controls
//   >
//     <source src={item.video} type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default KYR;

import React from "react";
import Image from "next/image";
import classes from "./kyr.page.module.css";

const KYR = ({ title, text, flag, imageAlt, reverse, youtubeId, youtubeId2 }) => {
  return (
    <div>
      <div className={`${classes.row}`}>
        {youtubeId != "" &&
        <div className={classes.imageContainer}>
          <Image
            className={classes.large}
            src={flag}
            alt={imageAlt}
            width={300}
            height={300}
            style={{ marginLeft: "5rem" }}
          />
        </div>}
        {youtubeId2 != "" &&
        <div className={classes.imageContainer}>
          <Image
            className={classes.large}
            src={flag}
            alt={imageAlt}
            width={300}
            height={300}
            style={{ marginLeft: "5rem" }}
          />
        </div>}
      </div>

      <div className={`${classes.row}`}>
        {youtubeId != "" &&
        <div className={classes.imageContainer}>
          <iframe
            width="450"
            height="300"
            style={{ marginLeft: "5rem" }}
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>}
        {youtubeId2 != "" &&
        <div className={classes.imageContainer}>
          <iframe
            width="450"
            height="300"
            style={{ marginLeft: "5rem" }}
            src={`https://www.youtube.com/embed/${youtubeId2}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>}
      </div>
    </div>
  );
};

export default KYR;
