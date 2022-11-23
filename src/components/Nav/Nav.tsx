import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./index.css";
import DarkMode from "./DarkMode";

export default function Nav(props: any) {

    const navLinks = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Examples",
        path: "/examples",
      },
      {
        name: "Apps",
        path: "/apps",
      },
      {
        name: "Settings",
        path: "/settings",
      },
    ];

  return (
    <div className="Nav">
      <div className="nav-title">
        <Link className="nav-link" to="/">
          <img className="nav-logo" src={logo} />
        </Link>
      </div>

      <ul className="nav-list">
        {navLinks.map((link: any) => (
          <li className="nav-item" key={nanoid()}>
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
