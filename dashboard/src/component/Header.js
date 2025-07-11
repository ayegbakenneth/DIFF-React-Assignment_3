import React from 'react';
import '../styles/Header.css';
import Logo from '../assets/Logo.png';
import Hero from '../assets/Hero.png'
function Header() {
    return (
        <div className="headerContainer">
            <header className="header">
                <nav className="nav">
                    <img src={Logo} alt="logo" className="logo"/>
                    <ul id="menu">
                        <li>Companies</li>
                        <li>Candidates</li>
                        <li>Assesments</li>
                        <li>Post a Job</li>
                        <li>Career Advice</li>
                    </ul>
                    <div className="authLinks">
                        <ul id="auth">
                            <li>Sign Up</li>
                            <li id="login">Log In</li>
                        </ul>
                    </div>
                </nav>
                <div id="hero-section">
                    <div className="left-panel">
                        <h2><p>Find a</p><p id="job">job</p><p> easily</p></h2>
                        <p>With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>
                        <div className="search-container">
                            <input type="text" id="searchInput" placeholder='Enter keywords, skill, interest' />
                            <input type="text" id="locationInput" placeholder='Location' />
                            <button type="button" id="searchButton">Search</button>
                        </div>
                        <div className="trustedBy">
                            <p>Trusted by:</p>
                            <div className="logos">
                                <img src="https://www.alx.org/wp-content/uploads/2022/01/alx-logo.png" alt="ALX Logo" />
                                <img src="https://www.alx.org/wp-content/uploads/2022/01/africa-future-logo.png" alt="Africa Future Logo" />
                                <img src="https://www.alx.org/wp-content/uploads/2022/01/africa-future-logo.png" alt="Africa Future Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="right-panel">
                        <img src={Hero} alt="Hero" className="hero-image" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;