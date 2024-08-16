"use client";
import styles from "./page.module.css";
import FlashcardList from "components/flashcards/flashcardList.js";
import Link from "next/link";
import LoadingIndicator from "components/loadingInfo/LoadingIndicator"
import { useEffect, useState } from "react";
import fetchData from "./fetchData";

export default function HomePage() {
  const [data, setData] = useState(null);
  const [nextCursor, setNextCursor] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [refreshedData, setRefreshedData] = useState([]);
  const [backPressed, setBackPressed] = useState(false);
  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData(nextCursor);
      setData(fetchedData);
      setFullData((prevFullData) => [
        ...prevFullData,
        ...fetchedData.response.results,
      ]);
      // console.log(fullData);
    }

    getData();
  }, [nextCursor]);
  function handleClick() {
    setBackPressed(false);
    try {
      if (data.response.has_more) {
        setNextCursor(data.response["next_cursor"]);
      }
    } catch {
      setRefreshedData(
        fullData.splice(pageNumber * 100, (pageNumber + 1) * 100)
      );
    }
    setPageNumber(pageNumber + 1);
  }

  function handleBackClick() {
    if (data.response.has_more) {
      setRefreshedData(
        fullData.splice((pageNumber - 2) * 100, (pageNumber - 1) * 100)
      );
    }
    setBackPressed(true);
    setPageNumber(pageNumber - 1);
  }
  let items;
  if (data || refreshedData) {
    let process;
    if (data && !backPressed) {
      process = data.response.results;
    } else if (refreshedData) {
      process = refreshedData;
    }
    items = process.map((row) => ({
      id: row.id,
      word: row.properties.Word.title.map((item) => item.plain_text),
      themes: row.properties.Themes.multi_select.map((theme) => theme.name),
      image: row.properties.Picture.files.map((item) => item.file.url),
      link: row.properties.YoutubeLink.url,
      synonyms: row.properties.Synonyms.rich_text.map(
        (item) => item.plain_text
      ),
    }));
  }

  return (
    <div>
      {data? <div>{<FlashcardList flashcards={items} />}</div>: <LoadingIndicator/>}

      {pageNumber != 1 && <div className={styles.ctaBack}>
        <Link
          className={styles.ctaBack}
          href="/ASL/Diccionario/DictFull"
          onClick={() => handleBackClick()}
        >
          <span className={styles.large}>☜</span> Palabras Anterior
        </Link>
      </div>}
      <div className={styles.cta}>
        <Link
          className={styles.cta}
          href="/ASL/Diccionario/DictFull"
          onClick={() => handleClick()}
        >
          Proximas Palabras <span className={styles.large}>☞</span>
        </Link>
      </div>
      {/* <p>{pageNumber}</p> */}
    </div>
  );
}
