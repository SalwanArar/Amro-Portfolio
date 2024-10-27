import { useParams } from "react-router-dom";
import "./index.scss";
import { projects } from "../../data/projects";

function ProjectDetailsPage() {
  const { projectId } = useParams();
  const project = projects.find((proj) => String(proj.id) === projectId);
  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      <img src={project.src} alt={project.alt} />
    </div>
  );
}

export default ProjectDetailsPage;
