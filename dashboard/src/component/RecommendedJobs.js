import React from 'react';
import JobCard from './JobCard';
import '../styles/JobCard.css';
import Paystack from '../assets/Paystack.png';
import Google from '../assets/Google.png';
import Access from '../assets/Access.png';
import Flutterwave from '../assets/Flutterwave-logo.png';

function RecommendedJobs() {
    const jobData = [
        {
            jobType: 'Full time',
            companyLogo: Paystack,
            jobTitle: 'QA Engineer',
            companyName: 'Paystack',
            location: 'Lagos, Nigeria'
        },
        {
            jobType: 'Part time',
            companyLogo: Google,
            jobTitle: 'Product Analyst',
            companyName: 'Google',
            location: 'Lagos, Nigeria'
        },
        {
            jobType: 'Full time',
            companyLogo: Flutterwave,
            jobTitle: 'HR Manager',
            companyName: 'Flutterwave',
            location: 'Abuja, Nigeria'
        },
        {
            jobType: 'Full time',
            companyLogo: Access,
            jobTitle: 'QA Engineer',
            companyName: 'Paystack',
            location: 'Lagos, Nigeria'
        }
    ];

    return (
        <div className="recommended-jobs-section">
            <div className="section-header">
                <h2>Recommended Jobs</h2>
                
            </div>
            <div className="job-cards-grid">
                {jobData.map((job, index) => (
                    <JobCard
                        key={index}
                        jobType={job.jobType}
                        companyLogo={job.companyLogo}
                        jobTitle={job.jobTitle}
                        companyName={job.companyName}
                        location={job.location}
                    />
                ))}
            </div>
            <div className="nav-arrows">
                    <span className="arrow">← →</span>
                    
                </div>
        </div>
    );
}

export default RecommendedJobs;