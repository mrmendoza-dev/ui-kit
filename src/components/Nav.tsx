import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
import "../css/index.css";
import DarkMode from "./DarkMode";
import logo from "../assets/images/logo.png";


export default function Nav(props: any) {


  return (
    <div className="Nav">
      <div className="nav-title">
        <Link className="nav-link" to="/">
          <img className="nav-logo" src={logo} />
        </Link>
      </div>

      <ul className="nav-list">
        {props.links.map((link) => (
          <li className="nav-item">
            <Link className="nav-link" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <DarkMode />
    </div>
  );
}
