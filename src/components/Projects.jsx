import React, { useState } from 'react';
import '../css/projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Project One',
        description: 'This is a short description of project one.',
        fullDescription: 'This is the full description of project one. It includes more details about the project.',
        imageUrl: '../assets/thumbnails/project1_thumbnail.jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/yourprofile',
        githubUrl: 'https://github.com/yourprofile/project-one'
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'This is a short description of project two.',
        fullDescription: 'This is the full description of project two. It includes more details about the project.',
        imageUrl: 'path/to/image2.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/yourprofile',
        githubUrl: 'https://github.com/yourprofile/project-two'
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'This is a short description of project three.',
        fullDescription: 'This is the full description of project three. It includes more details about the project.',
        imageUrl: 'path/to/image3.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/yourprofile',
        githubUrl: 'https://github.com/yourprofile/project-three'
    },
    {
        id: 4,
        title: 'Project Four',
        description: 'This is a short description of project four.',
        fullDescription: 'This is the full description of project four. It includes more details about the project.',
        imageUrl: 'path/to/image4.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/yourprofile',
        githubUrl: 'https://github.com/yourprofile/project-four'
    },
    {
        id: 5,
        title: 'Project Five',
        description: 'This is a short description of project five.',
        fullDescription: 'This is the full description of project five. It includes more details about the project.',
        imageUrl: 'path/to/image5.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/yourprofile',
        githubUrl: 'https://github.com/yourprofile/project-five'
    },
    {
        id: 6,
        title: 'Project Six',
        description: 'This is a short description of project six.',
        fullDescription: 'This is the full description of project six. It includes more details about the project.',
        imageUrl: 'path/to/image6.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/yourprofile',
        githubUrl: 'https://github.com/yourprofile/project-six'
    },
];

const Projects = () => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (project) => {
        setModalContent(project);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.imageUrl} alt={project.title} />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="project-buttons">
                            <button onClick={() => openModal(project)}>Read More</button>
                            <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
            {modalContent && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img src={modalContent.imageUrl} alt={modalContent.title} />
                        <h2>{modalContent.title}</h2>
                        <p>{modalContent.fullDescription}</p>
                    </div>
                </div>
            )}
            <button className="see-more-button" onClick={() => window.location.href='/projects'}>See More</button>
        </div>
    );
};

export default Projects;
