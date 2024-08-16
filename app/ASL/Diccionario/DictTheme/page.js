"use client";
import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Themes from "./themes.json";
import DictTheme from "./DictSubTheme/page";

export default function DictCategory() {
  const [categoryData, setCategoryData] = useState([]);
  const [chosenCategory, setChosenCategory] = useState(null);
  useEffect(() => {
    async function getData() {
      let allData = [];
      setCategoryData(allData);
    }

    getData();
  }, [chosenCategory]);
  const categoryInfo = Themes["Categories"];
  function handleOnClick(category) {
    setChosenCategory(category);
  }
  // console.log(chosenCategory);

  if (chosenCategory == null) {
    return (
      <div className={classes.body}>
        <div className={classes.container}>
          {categoryInfo.map((category) => (
            <div key={category.id} className={classes.themeContainer}>
              <Link
                className={classes.themeContainer}
                href="/ASL/Diccionario/DictTheme"
                onClick={() => handleOnClick(category.category)}
              >
                <Image
                  src={category.image}
                  width={500}
                  height={500}
                  alt={`Image for category ${category.category}`}
                  className={classes.image}
                  quality={100}
                />
              </Link>
              <h3 className={classes.title}>{category.category}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    // console.log(chosenCategory);
    return (
      <>
        <DictTheme category={chosenCategory} />
      </>
    );
  }
}
