import React from 'react';
import "../css/footer.css";
import Facebook from '../assets/facebook-icon.svg'
import Twitter from '../assets/twitter-icon.svg'
import Linkedin from '../assets/linkedin-icon.svg'
import GitHub from '../assets/github-icon.svg'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <a href="mailto:communitypro47@gmail.com">chanukasweerasinghe@gmail.com</a>
        <div className="social">
        <div class="icon-container">
          <img className="icon" src={Linkedin} alt="linkedin" />
          <img className="icon" src={GitHub} alt="github" />
          <img className="icon" src={Facebook} alt="facebook" />
          <img className="icon" src={Twitter} alt="twitter" />
        </div>
        </div>
        {/* <div className="attribution">
          <a href="https://github.com/CommunityPro/portfolio-html" target="_blank" rel="noopener noreferrer">
            <img src="https://user-images.githubusercontent.com/62628408/157202263-9174da24-b19a-4017-9b7c-a1d26ae8f014.svg" alt="attribution" width="150px" />
          </a>
        </div> */}
        <p>Copyright &copy;chanukaaaa <span id="datee"></span>, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
