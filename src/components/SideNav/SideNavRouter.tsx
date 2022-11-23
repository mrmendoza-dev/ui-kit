
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
// import "../css/index.css";
import { nanoid } from "nanoid";

export default function SideNavRouter(props: any) {

  return (
    <div className="SideNav">
      <ul className="side-nav-list">
        {props.links.map((link: any) => (
          <li className="side-nav-item" key={nanoid()}>
            <Link className="side-nav-link" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
