import { useEffect, useState } from 'react';
import React from 'react';
import '../css/AboutMe.css'
import AboutMeCards from './AboutMeCards';

const AboutMe = () => {
  const [data, setData] = useState([]);

  const fetchDataForAboutSection = () => {
    fetch('http://localhost:8000/About/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        setData(data.data)})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDataForAboutSection();
  }, []);
  return (
    
    <div className="AboutMe-void" id="AboutMe-void">
      <div className="AboutMe-crop">
        <ul id="AboutMelist" className="AboutMe-UlContainer" style={{ "--count": 6 }}>
        {data.map((about) => (
            <AboutMeCards
              key={about._id}
              AboutTitle={about.AboutTitle}
              AboutDesc={about.AboutDesc}
            />
          ))}
        </ul>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="AboutMe-mask">
        <div className="AboutMe-mask-txt">There is Always more to know,<br />Check Out my skills</div>
      </div>
      <div className="center-circle">
        <div className="center-circle-txt">About Me</div>
      </div>
    </div>
  );
};

export default AboutMe;
