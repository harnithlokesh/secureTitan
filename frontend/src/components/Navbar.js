import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        {/* Logo */}
        <div className="logo-container">
          <img 
            src="/New-Logo.png" 
            alt="SecureTitan Logo" 
            className="logo-image" 
            loading="lazy"
          />
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
