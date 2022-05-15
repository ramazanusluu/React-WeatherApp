import React from "react";
import { useTheme } from "../context/ThemeContext";

function Theme() {
    const { theme, setTheme } = useTheme();
  return (
    <div className="theme-button">
      <button className="theme" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Theme;
