import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="navGroup">
        <li className="navItem">
          <Link className="navLink" to="/">
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/about">
            About
          </Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/movie">
            Movie
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
