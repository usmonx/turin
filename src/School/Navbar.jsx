import React, { useState } from 'react';
import './Navbar.css';
import Logo from "../imges/Logo.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed-top">
        <img className='logo' src={Logo} alt="" />
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Services</a>
        <a href="#" className="nav-link">Contact</a>
    </nav>
  );
};

export default Navbar;
