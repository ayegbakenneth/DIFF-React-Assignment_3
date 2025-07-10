import React from 'react';
import '../styles/HowItWorks.css';
import Images from '../assets/Image.png';
import CheckMark from '../assets/CheckMark.png';

export default function HowItWorks() {
    return (
        <div className="how-it-works-section">
            <div className="image-panel">
                <img src={Images} alt="How it works"/>
            </div>
            <div className="text-panel">
                <h2>How it works</h2>
                <p>Getajob helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily.</p>
                <div className="feature-item">
                    <img src={CheckMark} alt="Checkmark" className="checkmark-icon" />
                    <div className="feature-text">
                        <h3>Search Jobs</h3>
                        <p>We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <img src={CheckMark} alt="Checkmark" className="checkmark-icon" />
                    <div className="feature-text">
                        <h3>Create a Profile and Get Noticed</h3>
                        <p>Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <img src={CheckMark} alt="Checkmark" className="checkmark-icon"/>
                    <div className="feature-text">
                        <h3>Apply for jobs</h3>
                        <p>Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}