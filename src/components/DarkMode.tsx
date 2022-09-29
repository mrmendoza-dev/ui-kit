import { useEffect, useState } from "react";
import "../css/index.css";
import "../css/Nav.css";

export default function DarkMode() {
  const root: any = document.querySelector(":root");
  const rootStyles = getComputedStyle(root);
  const [darkMode, setDarkMode] = useState(loadTheme);

  function loadTheme() {
    let savedTheme: any = JSON.parse(
      localStorage.getItem("darkMode") || "false"
    );
    if (savedTheme != undefined) {
      return savedTheme;
    } else {
      localStorage.setItem("darkMode", JSON.stringify(false));
      return false;
    }
  }

  useEffect(setTheme, [darkMode]);

  const darkTheme = {
    font: "#f7f7ff",
    bg: "#242424",
    contrast: "#641ddf",
    accent1: "#2f5270",
    accent2: "#1e375a",
  };

  const lightTheme = {
    font: "#242424",
    bg: "#f7f7ff",
    contrast: "#fe5f55",
    accent1: "#bdd5ea",
    accent2: "#577399",
  };

  const colors = [
    "--clr-font",
    "--clr-bg",
    "--clr-contrast",
    "--clr-accent1",
    "--clr-accent2",
  ];

  function updateTheme(theme: any) {
      root.style.setProperty("--clr-font", theme.font);
      root.style.setProperty("--clr-bg", theme.bg);
      root.style.setProperty("--clr-contrast", theme.contrast);
      root.style.setProperty("--clr-accent1", theme.accent1);
      root.style.setProperty("--clr-accent2", theme.accent2);
  }

  function setTheme() {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    darkMode ? updateTheme(darkTheme) : updateTheme(lightTheme);
  }

  function changeTheme() {
    setDarkMode((prevTheme: any) => !prevTheme);
  }

  return (
    <button className="theme-btn" onClick={changeTheme}>
      {darkMode ? (
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
}
