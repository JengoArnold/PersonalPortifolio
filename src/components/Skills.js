import React from "react";
import {
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaGlobe,
  FaHtml5,
  FaJs,
  FaNetworkWired,
  FaNodeJs,
  FaReact,
  FaRoute,
} from "react-icons/fa6";
import { SiFirebase } from "react-icons/si";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    { name: "Network Configuration", icons: [FaNetworkWired], iconClass: "network" },
    { name: "Cisco Packet Tracer", icons: [FaRoute], iconClass: "network" },
    { name: "TCP/IP Networking", icons: [FaGlobe], iconClass: "network" },
    { name: "HTML & CSS", icons: [FaHtml5, FaCss3Alt], iconClass: "html-css" },
    { name: "JavaScript", icons: [FaJs], iconClass: "javascript" },
    { name: "React", icons: [FaReact], iconClass: "react" },
    { name: "Node.js", icons: [FaNodeJs], iconClass: "node" },
    { name: "Firebase", icons: [SiFirebase], iconClass: "firebase" },
    { name: "Git & GitHub", icons: [FaGitAlt, FaGithub], iconClass: "git" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <span>What I work with</span>
          <h2>Technical Skills</h2>
         
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <span
                className={`skill-icons skill-icons--${skill.iconClass}`}
                aria-hidden="true"
              >
                {skill.icons.map((Icon, index) => (
                  <Icon key={`${skill.name}-${index}`} />
                ))}
              </span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;