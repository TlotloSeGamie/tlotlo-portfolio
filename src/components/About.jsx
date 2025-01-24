import React from 'react';
import './About.css';
import tlotlo from '../Assets/tlotlo.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-details">
          <img
            src={tlotlo}
            alt="Tlotlo Se Gamie"
            className="about-image"
          />
          <div className="about-text">
            <h1>Hi, I'm <strong>Tlotlo</strong></h1>
            <h2>A <strong>junior frontend developer</strong></h2>
            <p>
              I'm a passionate developer dedicated to building user-friendly and innovative applications. 
              My journey began with a curiosity for technology and has evolved into a mission to deliver impactful solutions.
            </p>
            <div className="about-actions">
              <div className='social-links'>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaGithub className="icon" />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaLinkedin className="icon" />
                </a>
              </div>
              <div className='contact-hire-btn'>
                <button className="contact-button">Contact</button>
                <button className="hire-button">Hire Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
