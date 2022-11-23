
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
// import "../css/index.css";
import { nanoid } from "nanoid";

export default function SideNavScroll(props: any) {

  return (
    <div className="SideNav">
      <ul className="side-nav-list">
        {props.links.map((link: any) => (
          <li className="side-nav-item" key={nanoid()}>
            <a className="side-nav-link" href={`#${link.path}`}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
