import React from 'react';
import '../css/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="head-section-2">
      <div className="herosection3">
        <div className="helo">
          <p className="intro">Hello!</p>
          <p className="head-title">I'm Raoul Baddawi</p>
          <p className="intro">A Full Stack Web Developer</p>
          <button className="btn_start">Get to Know Me</button>
        </div>
        <div className="cont-img">
          <img className="image1" src="/Images/HeroBackground.png" alt="Rectangle" />
          <img className="image2" src="/Images/raul.png" alt="Raoul" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
