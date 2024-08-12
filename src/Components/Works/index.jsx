import "./index.css";
import { WorksFilter, WorksList } from "../";

function Works() {
  return (
    <div className="works">
      <div className="works-responsive container d-flex gap-5 pt-5 pb-5">
        <WorksFilter />
        <WorksList />
      </div>
    </div>
  );
}

export default Works;
