import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
    
      tech: ["React", "Firebase", "CSS"],
      github: " https://jengo.arnoldjaz5.workers.dev/",
    },
    {
      title: "Jerry International School Website",
     
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JengoArnold",
    },
    {
      title: "Harfordbridge International School Website",
    
      tech: ["React", "Responsive Design"],
      github: "https://github.com/JengoArnold",
    },
    {
      title: "Dry My Tears International Website",
      description:
        "A mission-driven website for a nonprofit organization focused on awareness, support, and community impact.",
      tech: ["React", "Accessibility", "Content Strategy"],
      image:
        "https://image.thum.io/get/width/1200/https://drymytearsinternational.org/",
      github: "https://drymytearsinternational.org/",
    },
   
    {
      title: "GitHub Account",
   
      tech: ["GIT", "GITHUB"],
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
              {project.image ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-image-link"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-image"
                  />
                </a>
              ) : null}

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
                  {project.title === "Dry My Tears International Website"
                    ? "Visit Website"
                    : "View Project"}
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