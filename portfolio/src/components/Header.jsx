import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const handleMenuToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        Portfolio
      </a>
      <i
        id="menu-icon"
        className={`bx ${navActive ? 'bx-x' : 'bx-menu'}`}
        onClick={handleMenuToggle}
      ></i>
      <nav className={`navbar ${navActive ? 'active' : ''}`}>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
