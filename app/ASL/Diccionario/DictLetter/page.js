"use client";
import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Letter from "./letters.json";
import fetchData from "./fetchData";
import DisplaySub from "components/dictSubSection/displaySub";

export default function DictLetter() {
  const [letterData, setLetterData] = useState([]);
  const [chosenLetter, setChosenLetter] = useState(null);
  useEffect(() => {
    async function getData() {
      let allData = [];
      let nextCursor = null;
      let hasMore = true;

      while (hasMore && chosenLetter != null) {
        let fetchedData;
        if (nextCursor == null) {
          fetchedData = await fetchData(chosenLetter);
        } else {
          fetchedData = await fetchData(chosenLetter, nextCursor);
        }
        // console.log(fetchedData)
        allData = [...allData, ...fetchedData.response.results];
        nextCursor = fetchedData.response.next_cursor;
        hasMore = fetchedData.response.has_more;
      }

      setLetterData(allData);
    }

    getData();
  }, [chosenLetter]);
  const letterInfo = Letter["Letters"];
  function handleOnClick(letter) {
    setChosenLetter(letter);
  }

  if (chosenLetter == null) {
    return (
      <div className={classes.container}>
        {letterInfo.map((letter) => (
          <div key={letter.id} className={classes.letterContainer}>
            <Link
              className={classes.letterContainer}
              href="/ASL/Diccionario/DictLetter"
              onClick={() => handleOnClick(letter.letter)}
            >
              <Image
                src={letter.image}
                width={60}
                height={88}
                alt={`Image for letter ${letter.letter}`}
                className={classes.image}
              />
            </Link>
          </div>
        ))}
      </div>
    );
  } else {
    return <DisplaySub letterData = {letterData} link={'/ASL/Diccionario/DictLetter'}/>
  } 
}
