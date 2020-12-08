import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLight ? light : dark;

  return (
    <nav style={{ backgroundColor: theme.ui, color: theme.synthax }}>
      <h1>Context App</h1>
      <button onClick={toggleAuth}>
        {isAuthenticated ? "Log out" : "Log in"}
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
