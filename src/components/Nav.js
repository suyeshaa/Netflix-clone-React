import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll"); //cleanup function
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"} `}>
      <img className="nav__logo" src={logo} alt="Netflix Logo" />
      <img className="nav__avatar" src={avatar} alt="avatar" />
    </div>
  );
};

export default Nav;
