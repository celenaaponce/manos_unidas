import ContentGrid from "components/grid/content-grid";
import classes from "./page.module.css";


export default function ASLPage() {
  return (
    <div>
      <main classesName={classes.main}>

          <ContentGrid source={'app/ASL/available-content.json'} />

      </main>
    </div>
  );
}
