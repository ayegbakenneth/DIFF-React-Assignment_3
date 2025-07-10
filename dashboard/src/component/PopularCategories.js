import React from 'react';
import CategoriesCard from './CategoriesCard';
import Healthcare from '../assets/Healthcare.jpeg';
import Education from '../assets/Education.jpeg';
import DataAnalyst from '../assets/DataAnalyst.jpeg';
import Accounting from '../assets/Accounting.jpeg';
import Technology from '../assets/Technology.png';
import Multimedia from '../assets/Multimedia.png';
import Security from '../assets/Security.jpeg';
import OilAndGas from '../assets/OilAndGas.png';
import '../styles/JobCategories.css';

function PopularCategories() {

    const categoriesJobs = [
        {
            categoriesImage: OilAndGas,
            title: "Oil and Gas",
            numberOfJobs: "(20 new jobs)"
        },

        {
            categoriesImage: Healthcare,
            title: "Healthcare",
            numberOfJobs: "(10 new jobs)"
        },

        {
            categoriesImage: Education,
            title: "Education",
            numberOfJobs: "(10 new jobs)"
        },

        {
            categoriesImage: Accounting,
            title: "Accounting",
            numberOfJobs: "(10 new jobs)"
        },

        {
            categoriesImage: Multimedia,
            title: "Design, Art and Multimedia",
            numberOfJobs: "(20 new jobs)"
        },

        {
            categoriesImage: Technology,
            title: "Technology",
            numberOfJobs: "(10 new jobs)"
        },

        {
            categoriesImage: Security,
            title: "Security",
            numberOfJobs: "(10 new jobs)"
        },

        {
            categoriesImage: DataAnalyst,
            title: "Data Analyst",
            numberOfJobs: "(10 new jobs)"
        }
    ]
    return (
        <div className="popularCategories">
            <div className="categories-section-header">
                <span>Popular Categories</span>
            </div>
            <div className="categories-container">
                {categoriesJobs.map((jobs, index) => (
                    <CategoriesCard
                        key={index}
                        categoriesImage={jobs.categoriesImage}
                        title={jobs.title}
                        numberOfJobs={jobs.numberOfJobs}
                    />
                ))}
            </div>
        </div>
    )
}

export default PopularCategories;