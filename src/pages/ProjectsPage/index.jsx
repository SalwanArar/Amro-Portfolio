import "./index.scss";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

function ProjectsPage() {
  return (
    <div className="project-page">
      <div className="project-wrapper">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            alt={project.alt}
            src={project.src}
            text={project.name}
            path={project.path}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
