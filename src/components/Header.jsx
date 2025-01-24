import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-main-container">
            <div className="logo">
                <h1>Tlotlego <span>Segami</span></h1>
            </div>
            <nav>
                <ul className="head-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#assessments">Assessments</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
