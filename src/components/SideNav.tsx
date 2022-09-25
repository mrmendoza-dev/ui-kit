
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/SideNav.css";
import "../css/index.css";


export default function SideNav() {
  return (
    <div className="SideNav">
      <ul className="side-nav-list">
        <li className="side-nav-item">
          <Link className="side-nav-link" to="/examples/forms">
            Forms
          </Link>
        </li>
        <li className="side-nav-item">
          <Link className="side-nav-link" to="/examples/buttons">
            Buttons
          </Link>
        </li>
        <li className="side-nav-item">
          <Link className="side-nav-link" to="/examples/carousels">
            Carousels
          </Link>
        </li>
        <li className="side-nav-item">
          <Link className="side-nav-link" to="/examples/modals">
            Modals
          </Link>
        </li>
        <li className="side-nav-item">
          <Link className="side-nav-link" to="/examples/marquees">
            Marquees
          </Link>
        </li>
      </ul>
    </div>
  );
}
