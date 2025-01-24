import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tlotlo Se Gamie. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/TlotloSeGamie" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:example@example.com">Email</a>
      </div>
      <p>Thank you for visiting my portfolio!</p>
    </footer>
  );
};

export default Footer;
