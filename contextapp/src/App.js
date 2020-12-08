import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggler from "./components/ToggleTheme";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextPdrovider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextPdrovider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggler />
        </AuthContextProvider>
      </ThemeContextPdrovider>
    </div>
  );
}

export default App;
