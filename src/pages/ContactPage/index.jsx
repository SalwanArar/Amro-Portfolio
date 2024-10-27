import "./index.scss";
import pic from "../../assets/images/contact-pic.jpg";
import ContactField from "../../components/ContactField";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-texts">
          <h1>Contact</h1>
          <h2>Thanks for seeing my website</h2>
          <br />
          <br />
          <h2>Leave me a message below here</h2>
        </div>
        <img src={pic} alt="Contact Pic" />
      </div>

      <div className="contact-form">
        <p>Click to start writing</p>
        <form action="">
          <ContactField tag="message" placeholder="Message" type="textarea" />
          <ContactField tag="name" placeholder="Name *" type="text" />
          <ContactField tag="email" placeholder="Email *" type="text" />
          <input className="contact-submit" type="submit" value={"SEND"} />
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
