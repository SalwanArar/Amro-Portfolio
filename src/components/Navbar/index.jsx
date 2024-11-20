import "./index.scss";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";

const links = [
  {
    path: "/",
    text: "galary",
  },
  {
    path: "/projects",
    text: "projects",
  },
  {
    path: "/contact",
    text: "contact",
  },
];

function Navbar(props) {
  const closeNavbar = () => props.setToggle(false);
  return (
    <header className={props.active ? "active" : ""}>
      <div className="nav-wrapper">
        <img src={logo} alt="Logo" />
        <nav>
          <ul>
            {links.map((link, id) => (
              <li key={id}>
                <NavLink to={link.path} onClick={closeNavbar}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="contact-bar">
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
