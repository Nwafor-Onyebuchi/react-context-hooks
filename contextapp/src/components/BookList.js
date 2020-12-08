import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  // console.log(theme);
  return (
    <div
      className="book-list"
      style={{ backgroundColor: theme.bg, color: theme.synthax }}
    >
      <ul>
        <li style={{ backgroundColor: theme.ui }}>the way of kings</li>
        <li style={{ backgroundColor: theme.ui }}>the name of the wind</li>
        <li style={{ backgroundColor: theme.ui }}>the final empire</li>
      </ul>
    </div>
  );
};

export default BookList;
