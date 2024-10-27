import "./index.scss";

function ContactField(props) {
  const chooseFieldType = (type) =>
    type === "textarea" ? (
      <textarea
        rows={5}
        className="contact-input"
        placeholder={props.placeholder}
        name={props.tag}
        id={props.tag}
      />
    ) : (
      <input
        className="contact-input"
        type={props.type}
        placeholder={props.placeholder}
        name={props.tag}
        id={props.tag}
        required
      />
    );
  return (
    <div className="contact-field">
      {chooseFieldType(props.type)}
      <label htmlFor={props.tag}>{props.placeholder}</label>
    </div>
  );
}

export default ContactField;
