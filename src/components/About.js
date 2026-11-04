import React, { useState } from "react";
import "../styles/About.css";

const focusAreas = [
  {
    id: "security",
    label: "Cybersecurity",
    title: "Building a security-first mindset",
    description:
      "I’m developing my skills in SOC analysis, threat detection, and incident response, with a focus on understanding how to protect real systems.",
    tags: ["SOC analysis", "Threat detection", "Incident response"],
  },
  {
    id: "development",
    label: "Web development",
    title: "Making useful ideas real",
    description:
      "I enjoy turning practical problems into clear, user-friendly web experiences and strengthening my skills with every project I build.",
    tags: ["Frontend", "Problem solving", "User experience"],
  },
  {
    id: "networking",
    label: "Networking",
    title: "Understanding how systems connect",
    description:
      "I’m curious about the infrastructure behind the internet: how devices communicate, how networks are designed, and where they can be made more secure.",
    tags: ["Network fundamentals", "Systems", "Continuous learning"],
  },
];

function About() {
  const [activeFocus, setActiveFocus] = useState(focusAreas[0]);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-intro">
          <span>Who I am</span>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <p>
            I’m Jengo Arnold, a Computer Science learner with a growing passion
            for networking, cyber security, and building practical digital web based
            solutions. I enjoy understanding how systems work, securing them,
            and creating experiences that are both functional and user-friendly.
          </p>
          <p>
            My interest in SOC analysis, threat detection, and incident response
            keeps me motivated to keep learning and improving. I also enjoy
            web development, where I combine creativity and technical skills to
            build modern projects that solve real-world problems.
          </p>
        </div>

        <div className="about-focus">
          <div className="about-focus-heading">
            <span>What I’m exploring</span>
            <p>Choose a focus to learn more about what drives me.</p>
          </div>

          <div
            className="about-focus-options"
            role="group"
            aria-label="Areas of focus"
          >
            {focusAreas.map((focus) => (
              <button
                key={focus.id}
                type="button"
                className="about-focus-button"
                aria-pressed={activeFocus.id === focus.id}
                onClick={() => setActiveFocus(focus)}
              >
                {focus.label}
              </button>
            ))}
          </div>

          <article className="about-focus-panel" key={activeFocus.id}>
            <h3>{activeFocus.title}</h3>
            <p>{activeFocus.description}</p>
            <ul aria-label={`${activeFocus.label} topics`}>
              {activeFocus.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;