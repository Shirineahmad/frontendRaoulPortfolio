import React from 'react';
import '../css/HeroSection.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  


  return (
    <div className="header" >
      <div className="headerlogo">
      <a href="#HeroSectionMain"><img src="/Images/logo-removebg.png" alt="Logo"/></a>
      </div>
      <div className="headerlist">
        <ul className="menu-list">
          <li className="menu-items"><a href="#AboutMe-void">About me</a></li>
          <li className="menu-items"><a href="#MySkills">My Skills</a></li>
          <li className="menu-items"><a href="#ProjectCarousel-wrapper">My Projects</a></li>
          <li className="menu-items"><a href="#TestimonialSection">Testimonials</a></li>
          <li className="menu-items"><a href="#MainFooter">Contact Me</a></li>
        </ul>
      </div>
      <div className="headeruser">
      <Link to="/login">
          <img src="/Images/user.png" alt="User" />
        </Link>        
      </div>
      
    </div>
  );
};

export default NavBar;