import React from "react";
import {
  FaFacebookF,
  FaDownload,
  FaGithub,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/Hero.css";

function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section id="home" className="hero" ref={revealRef}>
      <div className="hero-background" aria-hidden="true">
        <img src="/JENGO.png" alt="" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-eyebrow">Hello, I’m</span>
          <h1>Jengo Arnold</h1>
          <div className="hero-intro">
            <h2>
              <span>Full-Stack Web-App Developer</span>
              <span>Aspiring Network Engineer</span>
            </h2>
            <p>
              Passionate about full-stack web development and computer
              networking, with a focus on building modern applications and
              understanding the networks that power our digital world.
            </p>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="hero-social">
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
            <a
              href="/JENGO CV NEW.docx"
              className="hero-resume-link"
              download
              aria-label="Download resume"
            >
              <FaDownload aria-hidden="true" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;