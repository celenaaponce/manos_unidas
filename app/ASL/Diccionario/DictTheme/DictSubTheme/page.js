"use client";
import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Themes from "../themes.json";
import fetchData from "../fetchData";
import DisplaySub from "components/dictSubSection/displaySub";
import DictCategory from "../page";

export default function DictTheme(chosenCategory) {
  const categoryInfo = Themes["Categories"].find(
    (cat) => cat.category == chosenCategory.category
  );
  // console.log(categoryInfo.ids)
  const [themeData, setThemeData] = useState([]);
  const [chosenTheme, setChosenTheme] = useState(null);
  // console.log('theme', chosenTheme)

  function handleBackClick() {
    DictCategory();
  }
  useEffect(() => {
    async function getData() {
      let allData = [];
      let nextCursor = null;
      let hasMore = true;

      while (hasMore && chosenTheme != null) {
        let fetchedData;
        if (nextCursor == null) {
          fetchedData = await fetchData(chosenTheme);
        } else {
          fetchedData = await fetchData(chosenTheme, nextCursor);
        }
        // console.log(fetchedData);
        allData = [...allData, ...fetchedData.response.results];
        nextCursor = fetchedData.response.next_cursor;
        hasMore = fetchedData.response.has_more;
        // console.log('all', allData)
      }

      setThemeData(allData);
      // console.log(chosenTheme);
    }

    getData();
  }, [chosenTheme]);
  const themeInfo = categoryInfo && categoryInfo.ids 
  ? Themes["Themes"].filter((theme) => categoryInfo.ids.includes(theme.id)) 
  : [];;

  // console.log(themeInfo)
  function handleOnClick(theme) {
    setChosenTheme(theme);
  }

  if (chosenTheme == null) {
    return (
      <>
        <div className={classes.body}>
          <div className={classes.container}>
            {themeInfo.map((theme) => (
              <div key={theme.id} className={classes.themeContainer}>
                <Link
                  className={classes.themeContainer}
                  href="/ASL/Diccionario/DictTheme"
                  onClick={() => handleOnClick(theme.search)}
                >
                  <Image
                    src={theme.image}
                    width={500}
                    height={500}
                    alt={`Image for theme ${theme.theme}`}
                    className={classes.image}
                    quality={100}
                  />
                </Link>
                <h3
                  className={classes.title}
                  dangerouslySetInnerHTML={{
                    __html: theme.theme.replace(/\n/g, "<br />"),
                  }}
                ></h3>
              </div>
            ))}
          </div>
        </div>
        <Link
          className={classes.ctaBack}
          href="/ASL/Diccionario/DictTheme"
          onClick={() => handleBackClick()}
        >
          <span className={classes.large}>☜</span> Regresar a Temas
        </Link>
      </>
    );
  } else {
    return (
      <>
        <DisplaySub
          letterData={themeData}
          link={"/ASL/Diccionario/DictTheme"}
        />{" "}
      </>
    );
  }
}


