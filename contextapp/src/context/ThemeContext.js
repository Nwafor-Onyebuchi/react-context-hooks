import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextPdrovider = ({ children }) => {
  const [state, setState] = useState({
    isLight: true,
    light: { synthax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { synthax: "#ddd", ui: "#333", bg: "#555" },
  });

  const themeToggle = () => {
    setState({ ...state, isLight: !state.isLight });
  };
  return (
    <ThemeContext.Provider value={{ ...state, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextPdrovider;
