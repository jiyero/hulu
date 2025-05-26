import React, { useState } from "react";
import "../styles/Header.scss";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />

        <div className="nav-actions">
          <div className="login-button">LOG IN</div>

          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>

          {menuOpen && (
            <div className="mobile-menu">
              <ul>
                <li>Get the Hulu App</li>
                <li>Log In</li>
                <li>Sign Up Now</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>Get the Hulu App</li>
            <li>Log In</li>
            <li>Sign Up Now</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
