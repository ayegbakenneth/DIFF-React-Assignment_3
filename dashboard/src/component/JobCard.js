import React from 'react';
import '../styles/JobCard.css';

function JobCard({ jobType, companyLogo, jobTitle, companyName, location }) {
    return (
        <div className="job-card">
            <div className="job-card-header">
                <span className="job-type">{jobType}</span>
            </div>
            <div className="job-card-body">
                <div className="company-logo-container">
                    <img src={companyLogo} alt={`${companyName} logo`} className="company-logo" />
                </div>
                <h3 className="job-title">{jobTitle}</h3>
            </div>
            <hr className="separator" />
            <div className="job-card-footer">
                <div className="footer-info">
                    <span className="company-name">{companyName}</span>
                    <span className="location">{location}</span>
                </div>
                <a href="summit"className="apply-now-btn">Apply now</a>
            </div>
        </div>
    );
}

export default JobCard;