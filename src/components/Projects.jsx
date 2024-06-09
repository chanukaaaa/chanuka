import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "../css/projects.css";

import projectOne from "../assets/project/project-one.png";
import projectTwo from "../assets/project/project-two.png";
import projectThree from "../assets/project/project-three.png";
import projectFour from "../assets/project/project-four.png";
import projectFive from "../assets/project/project-five.png";
import projectSix from "../assets/project/project-six.png";

const projectsData = [
  {
    image: projectOne,
    title: "Project 1",
    shortDescription: "A short description of project 1",
    fullDescription: "A detailed description of project 1",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    image: projectTwo,
    title: "Project 2",
    shortDescription: "A short description of project 2",
    fullDescription: "A detailed description of project 2",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    image: projectThree,
    title: "Project 3",
    shortDescription: "A short description of project 3",
    fullDescription: "A detailed description of project 3",
    githubLink: "https://github.com/yourusername/project3",
  },
  {
    image: projectFour,
    title: "Project 4",
    shortDescription: "A short description of project 4",
    fullDescription: "A detailed description of project 4",
    githubLink: "https://github.com/yourusername/project4",
  },
  {
    image: projectFive,
    title: "Project 5",
    shortDescription: "A short description of project 5",
    fullDescription: "A detailed description of project 5",
    githubLink: "https://github.com/yourusername/project5",
  },
  {
    image: projectSix,
    title: "Project 6",
    shortDescription: "A short description of project 6",
    fullDescription: "A detailed description of project 6",
    githubLink: "https://github.com/yourusername/project6",
  },
  {
    image: projectSix,
    title: "Project 6",
    shortDescription: "A short description of project 6",
    fullDescription: "A detailed description of project 6",
    githubLink: "https://github.com/yourusername/project6",
  },
  {
    image: projectSix,
    title: "Project 6",
    shortDescription: "A short description of project 6",
    fullDescription: "A detailed description of project 6",
    githubLink: "https://github.com/yourusername/project6",
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="projects-title-container">
        <Typography variant="h1" className="projects-title">
          Projects
        </Typography>
        <Typography variant="h3" className="projects-subtitle">
          A collection of my recent works
        </Typography>
      </div>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <Card key={index} className="project-card">
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.shortDescription}
              </Typography>
            </CardContent>
            <CardActions>
            <Button
                className="see-more-btn"
                size="small"
                onClick={() => handleOpen(project)}
                style={{ marginLeft: "auto" }}
              >
                Read More
              </Button>
              <IconButton
                size="small"
                href={project.githubLink}
                target="_blank"
                style={{ marginLeft: "auto" }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </IconButton>
            </CardActions>
          </Card>
        ))}
        <Modal open={open} onClose={handleClose}>
          <Box className="modal-box">
            <IconButton className="modal-close-button" onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </IconButton>
            {selectedProject && (
              <>
                <Typography variant="h6" component="h2">
                  {selectedProject.title}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  {selectedProject.fullDescription}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
