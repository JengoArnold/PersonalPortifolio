import React from "react";
import "../styles/About.css";

function About() {
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
            for networking, cyber security, and building practical digital
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
      </div>
    </section>
  );
}

export default About;