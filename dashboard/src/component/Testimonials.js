import React from 'react';
import '../styles/Testimonials.css';
import IrmaBlack from '../assets/IrmaBlack.png';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>What are our customers saying</h2>
      <div className="testimonial">
        <div className="testimonial-image">
          <img src={IrmaBlack} alt="Irma Black" />
        </div>
        <div className="testimonial-text">
          <p>
            “The platform is really convenient to reach out to companies & I have managed
            to secure 2 interviews already! I can also track my application status instead of
            wondering whether the company has seen or shortlisted me”
          </p>
          <h4>Irma Black</h4>
          <p>HR Manager at MasterCard</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;