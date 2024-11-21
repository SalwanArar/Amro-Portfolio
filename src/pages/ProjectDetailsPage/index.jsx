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
    ></iframe>
  );
}

// function paddingNumber(id) {
//   return String(id).padStart(2, "0");
// }

// const getImages = (projectId, num) => {
//   const images = [];
//   for (var i = 2; i <= num; i++) {
//     const imageSrc = require(`../../assets/images/${paddingNumber(
//       projectId
//     )}/${paddingNumber(i)}.jpg`);
//     images.push(imageSrc);
//   }
//   return images;
// };

function ProjectDetailsPage() {
  const { projectId } = useParams();
  // const imageSrc = require(`../../assets/images/${paddingNumber(
  //   projectId
  // )}/${paddingNumber(1)}.jpg`);
  const project = projects.find((proj) => String(proj.id) === projectId);
  // const images = getImages(projectId, project.numImg);

  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      {/* <img src={imageSrc} alt={`Image: ${project.name}`} /> */}
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
          return <img key={idx} src={child.src} alt={`image-${idx}`} />;
        }
      })}
      {/* {project.youtube.map((src, idx) => (
        <YoutubeCard
          key={idx}
          src={src}
          alt={`YouTube: ${project.name}-${idx}`}
        />
      ))}
      {images.map((image, idx) => (
        <img key={idx} src={image} alt={`image-${idx}`} />
      ))}
      {project.gifs.map((gif, idx) => (
        <img key={idx} src={gif} alt={`gif-${idx}`} />
      ))} */}
    </div>
  );
}

export default ProjectDetailsPage;
