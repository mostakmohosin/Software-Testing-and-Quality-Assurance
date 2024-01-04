import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import logo from "../assets/img/logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`navbar${showMenu ? " active" : ""}`}>
      <div className="navbar-container">
        <div className="leftSide">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="rightSide">
          <div className={`menu-icon${showMenu ? " active" : ""}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links${showMenu ? " active" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/event">Event</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
