import { useParams } from "react-router-dom";
import "./index.scss";
import { projects } from "../../data/projects";

function YoutubeCard(props) {
  return (
    <iframe
      width="100%"
      style={{
        aspectRatio: 1.7,
      }}
      src={props.src}
      title={props.alt}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
}

function ProjectDetailsPage() {
  const { projectId } = useParams();
  const project = projects.find((proj) => String(proj.id) === projectId);

  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      {project.children.map((child, idx) => {
        if (child.type === "youtube")
          return (
            <YoutubeCard
              key={idx}
              src={child.src}
              alt={`YouTube: ${project.name}-${idx}`}
            />
          );
        else {
          return (
            <img
              key={idx}
              src={child.src}
              alt={`image-${idx}`}
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          );
        }
      })}
    </div>
  );
}

export default ProjectDetailsPage;
