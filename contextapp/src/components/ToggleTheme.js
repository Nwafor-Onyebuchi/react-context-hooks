import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggler = () => {
  const { isLight, themeToggle } = useContext(ThemeContext);

  return (
    <button onClick={themeToggle}>{isLight ? "Night mode" : "Day mode"}</button>
  );
};

export default ThemeToggler;
