import React, { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/About.css";

const focusAreas = [
  {
    id: "development",
    label: "Web App Development",
    title: "Building useful web applications",
    description:
      "I enjoy turning practical problems into clear, user-friendly web experiences and strengthening my skills with every project I build.",
    tags: ["Frontend", "Backend", "User experience"],
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
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="about" ref={revealRef}>
      <div className="about-container">
        <div className="about-intro">
          <span>Who I am</span>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
           <p>
              I build visually stunning and highly functional web applications
              with a blend of creativity and code.
            </p>
            <p>
              I specialize in crafting mobile-first, user-centric experiences
              using cutting-edge technologies.
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