import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">🌆 Discover Our City</h1>
        <nav className="nav">
          <a href="#activities">Activities</a>
          <a href="#gallery">Gallery</a>
          <a href="#audio">Audio Guide</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

