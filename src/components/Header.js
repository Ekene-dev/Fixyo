import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Adjust the path as necessary
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" style={{ width: "230px", height: "80px" }} />
      <h2>Reliable Solutions</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
