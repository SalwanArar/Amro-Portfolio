import "./Layout.scss";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import BurgerButton from "./components/BurgerButton";
import Navbar from "./components/Navbar";

function Layout() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="layout">
        <BurgerButton setToggle={setToggle} toggle={toggle} />
        <Navbar active={toggle} setToggle={setToggle} />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
