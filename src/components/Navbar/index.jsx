import "./index.scss";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faBehance,
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
const icons = [
  {
    href: "https://linkedin.com/in/amro-ghrzelddin/",
    icon: faLinkedinIn,
  },
  {
    href: "https://www.instagram.com/amrogharz/",
    icon: faInstagram,
  },
  {
    href: "https://api.whatsapp.com/send?phone=971509386638",
    icon: faWhatsapp,
  },
  {
    href: "https://www.behance.net/2089b8ff",
    icon: faBehance,
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
          {icons.map((icon, index) => (
            <a href={icon.href} key={index} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={icon.icon} color="#f5f5f7" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
