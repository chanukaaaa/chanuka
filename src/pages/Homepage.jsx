import React from 'react';
import Projects from '../components/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog'; // Import the Blog component

export const Homepage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <div id="projects">
        <Projects />
      </div>
      <Blog /> {/* Add the Blog component */}
      <Footer />
    </div>
  );
};
