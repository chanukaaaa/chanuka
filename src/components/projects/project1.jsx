import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import "./css/project1.css"; // Import the corresponding CSS file
// import cardImage1 from "src/assets/project/project-one.png"; // Corrected import statement

const Project1 = () => {
  const handleReadMore = () => {
    // Redirect to a different page when Read more button is clicked
    window.location.href = "/project1-details";
  };

  return (
    <div className="card">
      <img className="card-image" src={cardImage1} alt="Card Image" />
      <div className="project-info">
        <div className="project-bio">
          <h3>Project One</h3>
          <p>React, Redux, SASS</p>
        </div>
        <div className="project-link">
          <a href="https://github.com/chanukaaaa" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LanguageIcon />
          </a>
        </div>
      </div>
      <div className="buttons1">
        <Button
          className="btn"
          variant="contained"
          color="secondary"
          onClick={handleReadMore} // Call handleReadMore function when button is clicked
        >
          Read more...
        </Button>
      </div>
    </div>
  );
};

export default Project1;
