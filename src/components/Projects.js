import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A polished React portfolio showcasing my work, skills, and contact options with responsive layout and clean design.",
      tech: ["React", "Firebase", "CSS"],
      github: " https://jengo.arnoldjaz5.workers.dev/",
    },
    {
      title: "Jerry International School Website",
      description:
        "Modern school website built to display admissions, curriculum, events, and staff information in a user-friendly format.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JengoArnold",
    },
    {
      title: "Harfordbridge International School Website",
      description:
        "Professional educational website designed to enhance the school’s online presence with clear navigation and responsive sections.",
      tech: ["React", "Responsive Design"],
      github: "https://github.com/JengoArnold",
    },
    {
      title: "Dry My Tears International Website",
      description:
        "A nonprofit website built to highlight mission, programs, volunteer opportunities, and donation support for the community.",
      tech: ["React", "Accessibility", "Content Strategy"],
      github: "  https://drymytearsinternational.org/",   
    },
    {
      title: "Basic LAN Setup",
      description:
        "Network design and configuration using Cisco Packet Tracer, including IP planning, device connectivity, and validation testing.",
      tech: ["Networking", "Cisco Packet Tracer"],
      github: "https://github.com/JengoArnold",
    },
    {
      title: "GitHub Account",
      description:
        "I used github to host the project's source code, track changes, and manage version control throughout all developments.",
      tech: ["GIT", "GITHUB"],
      github: "https://github.com/JengoArnold",
    },
    {
      title: "Network Security Lab",
      description:
        "Simulated security lab with firewall rules, VLAN segmentation, and monitoring to improve network defenses and visibility.",
      tech: ["Security", "Firewall", "VLAN"],
      github: "https://github.com/JengoArnold",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <span>Featured Work</span>
          <h2>Projects</h2>
          <p>Here are some of the projects that reflect my skills in networking, security, and web development.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-card-top">
                <span className="project-label">Project {index + 1}</span>
                <h3>{project.title}</h3>
              </div>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech?.map((item, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;