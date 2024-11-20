import "./index.scss";
import pic from "../../assets/images/main-pic.jpg";
function GalleryPage() {
  return (
    <div className="gallery">
      <h1>welcome to the imagination of amro</h1>
      <img src={pic} alt="main" />
      <img src={pic} alt="main" />
      <img src={pic} alt="main" />
      <img src={pic} alt="main" />
      <img src={pic} alt="main" />
      <img src={pic} alt="main" />
    </div>
  );
}

export default GalleryPage;
