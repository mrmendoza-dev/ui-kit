import React, { useState, useEffect } from "react";
import "../css/Nav.css";
import "../css/index.css";


export default function DarkMode() {
    const root = document.querySelector(":root");
    const rootStyles = getComputedStyle(root);
    const [darkMode, setDarkMode] = useState(loadTheme);

    function loadTheme() {
      let savedTheme = JSON.parse(localStorage.getItem("darkMode"));
      if (savedTheme != undefined) {
        return savedTheme;
      } else {
        localStorage.setItem("darkMode", JSON.stringify(false));
        return false;
      }
    }

    useEffect(setTheme, [darkMode]);

    function setTheme() {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));

      if (darkMode) {
        root.style.setProperty(
          "--clrContrast",
          rootStyles.getPropertyValue("--darkContrast")
        );
        root.style.setProperty(
          "--clrAccent1",
          rootStyles.getPropertyValue("--darkAccent1")
        );
        root.style.setProperty(
          "--clrAccent2",
          rootStyles.getPropertyValue("--darkAccent2")
        );
        root.style.setProperty(
          "--clrBg",
          rootStyles.getPropertyValue("--darkBg")
        );
        root.style.setProperty(
          "--clrFont",
          rootStyles.getPropertyValue("--darkFont")
        );
      } else {
        root.style.setProperty(
          "--clrContrast",
          rootStyles.getPropertyValue("--lightContrast")
        );
        root.style.setProperty(
          "--clrAccent1",
          rootStyles.getPropertyValue("--lightAccent1")
        );
        root.style.setProperty(
          "--clrAccent2",
          rootStyles.getPropertyValue("--lightAccent2")
        );
        root.style.setProperty(
          "--clrBg",
          rootStyles.getPropertyValue("--lightBg")
        );
        root.style.setProperty(
          "--clrFont",
          rootStyles.getPropertyValue("--lightFont")
        );
      }
    }

    function changeTheme() {
        setDarkMode((prevTheme) => !prevTheme);
    }

    return (
        <button className="theme-btn" onClick={changeTheme}>
        {darkMode ? (
            <i className="fa-solid fa-moon"></i>
        ) : (
            <i className="fa-solid fa-sun"></i>
        )}
        </button>
    );
}
