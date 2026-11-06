import React, { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/Hero.css";

const specialties = [
  {
    id: "networking",
    label: "Networking",
    title: "Making networks stronger by design",
    description:
      "I’m building a foundation in networking and system security, and learning how connected systems can stay reliable and resilient.",
  },
  {
    id: "development",
    label: "Web development",
    title: "Building useful digital experiences",
    description:
      "I also bring ideas to life with modern web technologies, combining practical problem solving with thoughtful, user-friendly design.",
  },
];

function Hero() {
  const [activeSpecialty, setActiveSpecialty] = useState(specialties[0]);
  const revealRef = useScrollReveal();

  return (
    <section id="home" className="hero" ref={revealRef}>
      <div className="hero-background" aria-hidden="true">
        <img src="/JENGO.png" alt="" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Jengo Arnold</h1>
          <div className="hero-specialty-picker">
            <span className="hero-specialty-label">Explore my focus</span>
            <div className="hero-specialty-options" role="group" aria-label="Areas of focus">
              {specialties.map((specialty) => (
                <button
                  key={specialty.id}
                  type="button"
                  className="hero-specialty-button"
                  aria-pressed={activeSpecialty.id === specialty.id}
                  onClick={() => setActiveSpecialty(specialty)}
                >
                  {specialty.label}
                </button>
              ))}
            </div>
          </div>

          <div
            className="hero-role-panel"
            key={activeSpecialty.id}
            aria-live="polite"
            aria-atomic="true"
          >
            <h2>{activeSpecialty.title}</h2>
            <p>{activeSpecialty.description}</p>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <a href="/JENGO CV NEW.docx" className="btn-primary" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
          <div className="hero-social">
            <span className="hero-social-label">Find me on</span>
            <div className="hero-social-icons" aria-label="Social media icons">
              <span role="img" aria-label="Facebook">
                <FaFacebookF aria-hidden="true" />
              </span>
              <span role="img" aria-label="WhatsApp">
                <FaWhatsapp aria-hidden="true" />
              </span>
              <span role="img" aria-label="GitHub">
                <FaGithub aria-hidden="true" />
              </span>
              <span role="img" aria-label="X">
                <FaXTwitter aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;