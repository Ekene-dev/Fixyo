import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Adjust the path as necessary
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={logo}
          alt="Fixyo Logo"
          style={{
            borderLeft: "5px solid #0a74da",
            borderRight: "5px solid #0a74da",
            borderTop: "5px solid #0a74da",
            borderBottom: "5px solid #0a74da",
            width: "230px",
            height: "80px",
          }}
        />
      </Link>
      <h5
        style={{
          position: "absolute",
          top: "55px",
          left: "80px",
          width: "230px",
          height: "80px",
        }}
      >
        Reliable Solutions
      </h5>
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
