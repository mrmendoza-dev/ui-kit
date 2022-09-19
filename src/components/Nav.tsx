import {Link} from "react-router-dom"
import "../css/Nav.css";



export default function Nav() {
  return (
    <div className="Nav">
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
    </div>
  );
}