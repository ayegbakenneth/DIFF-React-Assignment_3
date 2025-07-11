import React from 'react';
import '../styles/Footer.css';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Get-a-Job" />
          <p>
            Getajobng provides a full online service for anyone looking for a new job. We're
            not a recruitment agency, we're a job site.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#terms">Terms & Condition</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Job Seekers</h4>
            <ul>
              <li><a href="#create-account">Create Account</a></li>
              <li><a href="#job-list">Job List</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Employers</h4>
            <ul>
              <li><a href="#create-account">Create Account</a></li>
              <li><a href="#post-job">Post a Job</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social Media</h4>
            <div className="social-icons">
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright Get-a-Job RMS 2019, All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;