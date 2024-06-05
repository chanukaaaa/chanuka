import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import "../css/navbar.css";
import Logo from "../assets/ChanukaLogo.png";
import MoonImage from "../assets/moon.svg";
import SunImage from "../assets/sun.svg";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to switch theme
  const switchTheme = (checked) => {
    const theme = checked ? "dark" : "light";
    setIsDarkMode(checked);
    localStorage.setItem("theme", theme);
    document.body.className = theme; // Apply the theme to the body
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to toggle dark mode
  const toggleDarkMode = (e) => {
    const checked = e.target.checked;
    setIsDarkMode(checked);
    switchTheme(checked);
  };

  // Effect to set initial theme based on local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      switchTheme(savedTheme === "dark");
    }
  }, []);

  // Close mobile menu when link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle logo click to navigate to home page
  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate("/"); // Navigate to the home page
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/" onClick={handleLogoClick}>
            <img className="logo-image" src={Logo} alt="logo" />
          </a>
        </div>
        <div className="menu">
          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <li>
              <Link className="nav-link" to="/projects" onClick={closeMobileMenu}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact" onClick={closeMobileMenu}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/blog" onClick={closeMobileMenu}>
                BLOG
              </Link>
            </li>
            <li>
              <a
                className="nav-link btn btn-primary"
                href="https://github.com/CommunityPro/portfolio-html"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME <i className="fas fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="theme-switch">
          <input
            type="checkbox"
            id="switch"
            className="toggle-checkbox"
            onChange={toggleDarkMode}
            checked={isDarkMode}
          />
          <label className="toggle-icons" htmlFor="switch">
            <img
              className="moon"
              src={isDarkMode ? SunImage : MoonImage}
              alt={isDarkMode ? "sun" : "moon"}
            />
          </label>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
