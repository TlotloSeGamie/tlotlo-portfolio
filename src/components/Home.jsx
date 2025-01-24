import React from "react";
import './Home.css';
import tlotlo from '../Assets/tlotlo.jpg';


const Home = () => {
    return(
        <div className="home-main-comtainer">
            <div className="hom-container">
                <div className="home-container">
                    <img src={tlotlo} className="tlotlo"/>
                    <div className="intro">
                        <h3>Hey I'm <span>Tlotlego</span></h3>
                        <p>Հայերեն Shqip ‫العربية Български Català 中文简体 Hrvatski Česky Dansk Nederlands English Eesti Filipino Suomi Français ქართული Deutsch Ελληνικά ‫עברית हिन्दी Magyar Indonesia Italiano Latviski Lietuviškai македонски Melayu Norsk Polski Português Româna Pyccкий Српски Slovenčina Slovenščina Español Svenska ไทย Türkçe Українська Tiếng Việt
                        </p>
                        <div className="socials">
                            <a href="#">Facebook</a>
                            <a href="#">Github</a>
                            <a href="#">Linkin</a>
                        </div>
                        <button className="resume">Resume</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Home;