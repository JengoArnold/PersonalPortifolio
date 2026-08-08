import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    "Network Configuration",
    "Cisco Packet Tracer",
    "TCP/IP Networking",
    
    "HTML & CSS",
    "JavaScript",
    "React",
    "Firebase",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <span>What I work with</span>
          <h2>Technical Skills</h2>
          <p>
            I keep building my knowledge across networking, security, and web
            technologies to create strong, practical solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-icon">✦</span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;