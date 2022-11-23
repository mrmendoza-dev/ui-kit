import "./index.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const repoLink = "https://github.com/mrmendoza171/ui-kit";
 
  return (
    <div className="Footer">
      <div className="footer-logo">
        <p className="footer-copyright">© 2022 UI Kit. All rights reserved</p>
      </div>

      <div className="footer-dir">
        <div className="dir-col">
          <Link className="dir-link" to="/feedback">
            <p className="dir-title">Feedback</p>
          </Link>
        </div>
        <div className="dir-col">
          <a className="dir-link" href={repoLink} target="_blank">
            <i className="fa-brands fa-github footer-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

