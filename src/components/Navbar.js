import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Netribbon
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "menu-list active" : "menu-list"}>
            <li className="menu-list-container">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu-list-container">
              <Link
                to="/protect-your-application-and-data"
                className="nav-links"
                onClick={closeMenu}
              >
                Protect&nbsp;Your&nbsp;System
              </Link>
            </li>
            <li className="menu-list-container">
              <Link
                to="/design-your-future"
                className="nav-links"
                onClick={closeMenu}
              >
                Design&nbsp;Your&nbsp;Future
              </Link>
            </li>
            <li className="menu-list-container">
              <Link
                to="/remove-your-it-obstacles"
                className="nav-links"
                onClick={closeMenu}
              >
                Remove&nbsp;Your&nbsp;obstacles
              </Link>
            </li>
            <li className="menu-list-container">
              <HashLink
                smooth
                to="/#contact"
                className="nav-links"
                onClick={closeMenu}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
