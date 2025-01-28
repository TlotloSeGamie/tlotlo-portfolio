import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        I’d love to hear from you! Feel free to reach out via email or connect
        with me on social media.
      </p>
      <div className="contact-links">
        <a href="mailto:t88segamie@gmail.com.com" target="_blank" rel="noopener noreferrer">
          Email Me
        </a>
        <a href="https://github.com/TlotloSeGamie" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/tlotlego-segami-168699232/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
