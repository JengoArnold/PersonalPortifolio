import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Jengo Arnold. All rights reserved.</p>
        <div className="footer-right">
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-social-icons" aria-label="Social media icons">
            <span role="img" aria-label="X">
              <FaXTwitter aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
