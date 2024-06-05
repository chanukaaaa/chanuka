import React from 'react';
import "../css/header.css";
import profileImage from '../assets/profile.png'

const Header = () => {
  return (
    <header id="hero">
      <section className="header-container">
        <img className="profile-image" src={profileImage} alt="profile" />    
        <h1>Hi I'm Chanuka</h1>
        <div className="content-text">
          <h2>IT Undergraduate</h2>
          <h2>Coding the possibilities, crafting the future.</h2>
          <p>
            A passionate Frontend Developer with experience in web
            design, development.
          </p>
        </div>
        <button class="btn btn-connect" onclick="window.open('https://github.com/CommunityPro/portfolio-html', '_blank')">
        Connect With Me
        </button>


      </section>
    </header>
  );
};

export default Header;
