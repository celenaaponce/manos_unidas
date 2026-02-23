import Button from "./Button";
import playBtn from 'public/fiesta/play.png'
import styles from "./Button.module.css"
export default function StoryItem({ story, onSelectedStory, selectedStoryId, language, isLoading, loadingText }) {
    console.log(isLoading)
  return (
    <li className={styles.storyItem}>
      <article>
        {isLoading && <p>{loadingText}</p>}
        {!isLoading && <img src={`${story.image}`} alt={story.name} />}
        <div>
            <h3>{story.name}</h3>
        </div>
        <p className={styles.storyItemActions}>
            <Button onClick={() => onSelectedStory(story, selectedStoryId, language)} img={playBtn}>{language==='spanish' ? 'Leer y Mirar ' : 'Read and Watch '} {story.name}</Button>
        </p>
      </article>
    </li>
  );
}
