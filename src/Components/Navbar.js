import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1>Portfolio</h1>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
