import React from "react";
import logo from "./logo.png"; // Adjust the path as necessary
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" style={{ width: "230px", height: "80px" }} />
      <h2>Reliable Solutions</h2>
      <nav>
        <button onClick={() => (window.location.href = "#about")}>About</button>
        <button onClick={() => (window.location.href = "#join")}>Join</button>
      </nav>
    </header>
  );
};

export default Header;
