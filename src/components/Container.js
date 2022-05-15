import React from "react";
import Header from "./Header";
import Card from "./Card";
import Theme from "./Theme";
import { useTheme } from "../context/ThemeContext";

function Container() {
    const { theme } = useTheme();
  return (
    <div className={`App app ${theme === "dark" ? theme : ""}`}>
      <Theme />
      <br />
      <Header />
      <br />
      <Card />
    </div>
  );
}

export default Container;
