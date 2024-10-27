import { Link } from "react-router-dom";
import "./index.scss";

function ProjectCard(props) {
  return (
    <Link
      className="project-card"
      to={props.path}
      style={{ backgroundImage: `url(${props.src})` }}
    >
      <div className="project-text-container">
        <h2>{props.text}</h2>
      </div>
    </Link>
  );
}

export default ProjectCard;
