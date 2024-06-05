import React from "react";
import "../css/projects.css";
import cardImage1 from "../assets/thumbnails/project1_thumbnail.jpeg";
import cardImage2 from "../assets/project/project-two.png";
import cardImage3 from "../assets/project/project-three.png";
import cardImage4 from "../assets/project/project-four.png";
import cardImage5 from "../assets/project/project-five.png";
import cardImage6 from "../assets/project/project-six.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
import { useTheme } from "../components/ThemeContext "; // Import useTheme hook

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
        {/* First Row */}
        <div className="row">
          {/* First Card */}
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
            <br />
            <br />
            <br />
            <div className="buttons1">
              <Button className="btn" variant="contained" color="secondary">
                Read more
              </Button>
            </div>
          </div>

          {/* Second Card */}
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
            <br />
            <br />
            <br />
            <div className="buttons1">
              <Button className="btn" variant="contained" color="secondary">
                Read more
              </Button>
            </div>
          </div>

          {/* Third Card */}
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
            <br />
            <br />
            <br />
            <div className="buttons1">
              <Button className="btn" variant="contained" color="secondary">
                Read more
              </Button>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          {/* Fourth Card */}
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
            <br />
            <br />
            <br />
            <div className="buttons1">
              <Button className="btn" variant="contained" color="secondary">
                Read more
              </Button>
            </div>
          </div>
          {/* Fifth Card */}
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
            <br />
            <br />
            <br />
            <div className="buttons1">
              <Button className="btn" variant="contained" color="secondary">
                Read more
              </Button>
            </div>
          </div>
          {/* Sixth Card */}
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
            <br />
            <br />
            <br />
            <div className="buttons1">
              <Button className="btn" variant="contained" color="secondary">
                Read more
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Button className="button2">
        <span>See more...</span>
      </Button>
    </section>
  );
};

export default Projects;
