import React from 'react';
// import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-main-container">
            <div className="logo">
                <h1>Tlotlego <span>Segami</span></h1>
            </div>
            <nav>
                <ul className="nav-links">
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

export default Navbar;
