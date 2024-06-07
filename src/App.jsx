import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Homepage } from './pages/Homepage';
import { ThemeProvider } from './components/ThemeContext';
import Project1 from './components/projects/project1';
import Projects from './pages/DisplayProjects';
import GoToTopButton from './components/GoToTopButton';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <GoToTopButton />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
