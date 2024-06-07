import React from "react";
import "../css/projects.css";
import cardImage1 from "../assets/thumbnails/project1_thumbnail.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
import { useTheme } from "./ThemeContext"; // Import useTheme hook

const Projects = () => {
  const { isDarkMode } = useTheme(); // Use useTheme hook to access theme state
  return (
    <section
      id="projects"
      className={`project-container container ${isDarkMode ? "dark" : "light"}`}
    >
      <div className="division"></div>
      <div className="content-text">
        <h1>Projects</h1>
        <p>Check out some of my personal projects</p>
      </div>

      <article className="project">
        <div className="slider">
          <div className="slide">
            <div className="card">
              <img className="card-image" src={cardImage1} alt="Card Image" />
              <div className="project-info">
                <div className="project-bio">
                  <h3>Project One</h3>
                  <p>React, Redux, SASS</p>
                </div>
                <div className="project-link">
                  <a href="https://github.com/chanukaaaa" target="_blank">
                    <GitHubIcon />
                  </a>
                  <a href="#" target="_blank">
                    <LanguageIcon />
                  </a>
                </div>
              </div>
              <div className="buttons1">
                <Button className="btn" variant="contained" color="secondary">
                  Read more
                </Button>
              </div>
            </div>
          </div>
          <div className="card">
              <img className="card-image" src={cardImage1} alt="Card Image" />
              <div className="project-info">
                <div className="project-bio">
                  <h3>Project One</h3>
                  <p>React, Redux, SASS</p>
                </div>
                <div className="project-link">
                  <a href="https://github.com/chanukaaaa" target="_blank">
                    <GitHubIcon />
                  </a>
                  <a href="#" target="_blank">
                    <LanguageIcon />
                  </a>
                </div>
              </div>
              <div className="buttons1">
                <Button className="btn" variant="contained" color="secondary">
                  Read more
                </Button>
              </div>
            </div>
            <div className="card">
              <img className="card-image" src={cardImage1} alt="Card Image" />
              <div className="project-info">
                <div className="project-bio">
                  <h3>Project One</h3>
                  <p>React, Redux, SASS</p>
                </div>
                <div className="project-link">
                  <a href="https://github.com/chanukaaaa" target="_blank">
                    <GitHubIcon />
                  </a>
                  <a href="#" target="_blank">
                    <LanguageIcon />
                  </a>
                </div>
              </div>
              <div className="buttons1">
                <Button className="btn" variant="contained" color="secondary">
                  Read more
                </Button>
              </div>
            </div>
            
          {/* Add more cards here */}
        </div>
      </article>
    </section>
  );
};

export default Projects;
