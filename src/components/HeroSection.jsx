import React from 'react';
import '../css/HeroSection.css';

const HeroSection = ({ SmallDesc, HeroImage }) => {
  return (
    <div className="head-section2">
      <div className="herosection3">
        <div className="helo">
          <p className="intro">Hello!</p>
          <p className="head-title">I'm Raoul Baddawi</p>
          <p className="intro">{SmallDesc}</p>
          <button className="btn_start">Get to Know Me</button>
        </div>
        <div className="cont-img">
          <img
            className="image1"
            src="/Images/HeroBackground.png"
            alt="Rectangle"
          />
          <img
            className="image2"
            src={`data:image/png;base64,${HeroImage}`}
            alt="Raoul"
          />
        </div>
      </div>
      <div className="heroSection3-responsive">
        <p className="intro1">Hello!</p>
        <p className="head-title">I'm Raoul Baddawi</p>
        <p className="intro">{SmallDesc}</p>
        <div className="cont-img">
          <img
            className="image1"
            src="/Images/HeroBackground.png"
            alt="Rectangle"
          />

          <button className="btn_start">Get to Know Me</button>
          <img
            className="image2"
            src={`data:image/png;base64,${HeroImage}`}
            alt="Raoul"
          />
        
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
