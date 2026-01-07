import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Llinars del Vallès</h3>
          <p>Descobreix la bellesa i la cultura d'aquest poble del Vallès Oriental amb experiències immersives. Un lloc ple d'història, natura i tradició catalana.</p>
        </div>
        <div className="footer-section">
          <h3>Contacte</h3>
          <p>Ajuntament de Llinars del Vallès</p>
          <p>Plaça de l'Ajuntament, 1</p>
          <p>08450 Llinars del Vallès</p>
          <p>Tel: 938 40 00 01</p>
          <p>Email: ajuntament@llinarsdelvalles.cat</p>
        </div>
        <div className="footer-section">
          <h3>Informació Turística</h3>
          <p>Turisme Vallès</p>
          <p>www.turismevalles.com</p>
          <div className="social-links">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Llinars del Vallès - Turisme. Tots els drets reservats.</p>
      </div>
    </footer>
  );
};

export default Footer;

