
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/SideNav.css";
import "../css/index.css";

export default function SideNavScroll(props: any) {

  return (
    <div className="SideNav">
      <ul className="side-nav-list">
        {props.links.map((link: any) => (
          <li className="side-nav-item">
            <a className="side-nav-link" href={`#${link.path}`}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
