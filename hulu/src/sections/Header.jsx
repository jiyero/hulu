import React from "react";
import "../styles/Header.scss";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />
        <div>LOG IN</div>
      </nav>
    </header>
  );
};

export default Header;
