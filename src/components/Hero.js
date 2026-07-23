import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Jengo Arnold</h1>
          <h2>Aspiring Networking & SOC Analyst Enthusiast</h2>
          <p>
            Passionate about network security, threat detection, incident
            response, and building secure digital solutions. I also have
            practical knowledge in software development and modern web
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src="/JENGO.jpeg" alt="Jengo Arnold" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;