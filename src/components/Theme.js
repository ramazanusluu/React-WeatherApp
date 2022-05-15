import React from "react";
import { useTheme } from "../context/ThemeContext";

function Theme() {
    const { theme, setTheme } = useTheme();
  return (
    <div>
      Active Theme : {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Theme;
