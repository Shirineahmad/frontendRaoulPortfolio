import React from 'react';
import '../css/AboutMe.css'

const AboutMeCards = ({AboutTitle , AboutDesc}) => {
  return (
    
          <li className="AboutMe-liContainer">
            <div className="AboutMeSmallContainer">
              <span className="model-name">{AboutTitle}</span>
              <span className="model-desc">{AboutDesc}</span>
            </div>
            
          </li>
          
  );
};

export default AboutMeCards;
