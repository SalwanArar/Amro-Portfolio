// import { useState } from "react";
import "./index.scss";

function BurgerButton(props) {
  //   const [toggle, setToggle] = useState(false);

  const changeToggleState = () => props.setToggle(!props.toggle);

  return (
    <div
      className={`burger-btn ${props.toggle ? "active" : ""}`}
      onClick={changeToggleState}
    >
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  );
}

export default BurgerButton;
