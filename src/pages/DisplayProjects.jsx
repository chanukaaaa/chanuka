import React from 'react';
import '../css/displayprojects.css'; // Adjust the path if necessary

const DisplayProjects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p>This is the Projects page.</p>
      <div className="project-cards">
        <div className="project-card">
          <img src="path-to-image.jpg" alt="Project Image" /> {/* Replace with actual image path */}
          <div className="project-details">
            <h3>Project Title</h3>
            <p>Project description goes here. Briefly describe what the project is about.</p>
            <div className="project-links">
              <a href="https://github.com/yourusername/project-repo" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://yourprojectwebsite.com" target="_blank" rel="noopener noreferrer">
                Website
              </a>
            </div>
            <button className="project-button">Read more...</button>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default DisplayProjects;
