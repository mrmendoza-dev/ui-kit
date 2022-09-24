import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
import "../css/index.css";
import DarkMode from "./DarkMode";
import logo from "../assets/images/logo.png";


export default function Nav() {
  return (
    <div className="Nav">
      <div className="nav-title">
        <Link className="nav-link" to="/">
          <img className="nav-logo" src={logo} />
        </Link>
      </div>

      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/examples">
            Examples
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settings">
            Settings
          </Link>
        </li>
      </ul>

      <DarkMode />
    </div>
  );
}
