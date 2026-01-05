import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <p>Discover the beauty and culture of our amazing city through immersive experiences.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@tourismcity.com</p>
          <p>Phone: +34 123 456 789</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tourism Promotion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

