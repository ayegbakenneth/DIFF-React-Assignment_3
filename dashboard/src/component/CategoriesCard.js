import React from 'react';
import '../styles/JobCategories.css';

function CategoriesCard({categoriesImage, title, numberOfJobs}) {
    return (    
            
        <div className="categories-card">
            <div className="jobCard-icon-container">
                <img src={categoriesImage} alt={title} />
            </div>
            <span className="category-title">{title}</span>
            <span className="category-jobs">{numberOfJobs}</span>
        </div>
    )
}

export default CategoriesCard;