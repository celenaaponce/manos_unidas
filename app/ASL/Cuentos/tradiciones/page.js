"use client"
import Header from "./components/Header";
import Stories from "./components/Stories";
import SelectedStory from "./components/SelectedStory";
import IntroPage from "./components/IntroPage";
import Button from "./components/Button";
import Image from "next/image";
import backBtn from "public/fiesta/backbtn.png";
import { useState } from "react";
import styles from "./page.module.css";

function App() {
  const [storyState, setStoryState] = useState({
    selectedStoryId: undefined,
    story: undefined,
    language: undefined,
  });

  function handleSelectedStory(id, story, language) {
    setStoryState((prevState) => {
      return { ...prevState, selectedStoryId: id, story, language };
    });
  }

  function handleSelectLanguage(language) {
    setStoryState((prevState) => {
      return { ...prevState, language };
    });
  }

  const selectedStory = storyState.selectedStoryId;

  function handleReturn() {
    setStoryState((prevState) => {
      return {
        ...prevState,
        selectedStoryId: undefined,
        story: undefined,
      };
    });
  }

  function handleReset() {
    setStoryState((prevState) => {
      return {
        ...prevState,
        selectedStoryId: undefined,
        story: undefined,
        language: undefined,
      };
    });
  }

  let introPage = <IntroPage onLanguage={handleSelectLanguage}></IntroPage>;

  if (storyState.language != undefined) {
    let content = (
      <SelectedStory
        story={selectedStory}
        onReturn={handleReturn}
        language={storyState.language}
      />
    );

    if (storyState.selectedStoryId === undefined) {
        content = (
            <>
              <Button onClick = {handleReset} img={backBtn}>{storyState.language === 'spanish' ? 'Empezar de Nuevo': 'Restart'}</Button>{" "}
              <Stories
                onSelectStory={handleSelectedStory}
                language={storyState.language}
              />
            </>
          );
    }

    return (
      <>
        <Header />
        {content}
      </>
    );
  }

  return (
    <>
      <Header />
      {introPage}
    </>
  );
}

export default App;
