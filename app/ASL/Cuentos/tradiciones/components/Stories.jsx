import { useState, useEffect } from "react";
import StoryItem from "./StoryItem";
import styles from "./Button.module.css"

export default function Stories({
  onSelectStory,
  language
}) {
  const [loadedStories, setLoadedStories] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    async function fetchStories() {
      setIsFetching(true);
      const response = await fetch("/IDRT_Fiesta/backend/data/available-stories.json");

      if (!response.ok) {
        //...
      }
      const resData = await response.json();
      setIsFetching(false);
      setLoadedStories(resData);
    }
    fetchStories();
  }, []);

  return (
    <ul id={styles.stories}>
      {isFetching && <p id="loading">{language==='spanish' ? "Cargando cuentos..." : "Loading stories..."}</p>}
      {loadedStories.map((story) => (
        <StoryItem
          key={story.id}
          story={story}
          onSelectedStory={onSelectStory}
          language={language}
          isLoading={isFetching}
          loadingText={language==='spanish' ? "Cargando cuentos..." : "Loading stories..."}
        />
      ))}
    </ul>
  );
}
