import ContentGrid from "components/grid/content-grid";
import classes from "./page.module.css";


export default function StoriesPage() {
  return (
    <div>
      <main classesName={classes.main}>

          <ContentGrid source={'app/ASL/Cuentos/available-stories.json'} />

      </main>
    </div>
  );
}
