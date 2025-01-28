import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header-main-container">
            <div className="logo">
                <h1>Tlotlego <span>Segami</span></h1>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav>
                <ul className={`head-links ${menuOpen ? 'active' : ''}`}>
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
