// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo/logo.png'; // Import the logo image

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
