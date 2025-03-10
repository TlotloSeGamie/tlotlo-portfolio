import React from "react";
import "./About.css";
import Front from "../Assets/fronten1.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-details">
          <img src={Front} alt="Tlotlo Se Gamie" className="about-image" />
          <div className="about-text">
            <h1>
              Hi, I'm <strong>Tlotlo</strong>
            </h1>
            <h2>
              A <strong>junior frontend developer</strong>
            </h2>
            <p>
              I'm a passionate developer dedicated to building user-friendly and
              innovative applications. My journey began with a curiosity for
              technology and has evolved into a mission to deliver impactful
              solutions.
            </p>
            <div className="about-actions">
              <div className="social-links">
                <a
                  href="https://github.com/TlotloSeGamie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <FaGithub className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tlotlego-segami-168699232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <FaLinkedin className="icon" />
                </a>
              </div>
              <div className="contact-hire-btn">
                <a href="#contact" className="contact-button">
                  Contact
                </a>
                <a
                  href="#hire"
                  className="hire-button"
                  onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href = "mailto:t88segamie@gmail.com";
                  }}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
