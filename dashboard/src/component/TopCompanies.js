import React from 'react';
import '../styles/TopCompanies.css';
import Google from '../assets/Google.png';
import Uber from '../assets/Uber.png';
import Zapier from '../assets/Zapier.png';
import Airtel from '../assets/Airtel.png';
import Accenture from '../assets/Accenture.png';
import McKinsey from '../assets/McKinsey.png';
import NineMobile from '../assets/9mobile.png';


const TopCompanies = () => {
  return (
    <div className="top-companies-container">
      <div className="top-companies-text">
        <h2>Over 1000+ jobs from top companies in our network</h2>
        <p>
          Every day we index millions of jobs directly from employer websites.
          We're committed to accurate, high-quality jobs so you won't find old,
          duplicated, or spammy listings here.
        </p>
        <p>
          Organize and automate your job search while at home or on the go.
          We'll deliver new, relevant jobs of interest straight to your inbox.
        </p>
        <a href="#learn-more">Learn More &rarr;</a>
      </div>
      <div className="top-companies-logos">
        <div className="logo-row">
          <img src={Uber} alt="Uber" className="logo" />
          <img src={NineMobile} alt="9mobile" className="logo" />
        </div>
        <div className="logo-row">
          <img src={Zapier} alt="Zapier" className="logo" />
        </div>
        <div className="logo-row">
          <img src={Google} alt="Google" className="logo" />
          <img src={Airtel} alt="Airtel" className="logo" />
        </div>
        <div className="logo-row">
          <img src={Accenture} alt="Accenture" className="logo" />
        </div>
        <div className="logo-row">
          <img src={McKinsey} alt="McKinsey & Company" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;