import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="#header">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
