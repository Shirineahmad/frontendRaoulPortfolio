import { useEffect, useState } from 'react';
import React from 'react';
import AboutMe from './AboutMe.jsx';
import Footer from './Footer';
import HeroSection from './HeroSection';
import NavBar from './NavBar';
import ProjectCarousel from './ProjectCarousel';
import Skills from './Skills';
import TestimonialsSection from './TestimonialsSection';


const RaoulPortfolio = () => {
  const [HeroData, setHeroData] = useState([]);

  const fetchDataForHeroSection = () => {
    fetch('http://localhost:8000/Hero/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        setHeroData(data.data)})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDataForHeroSection();
  }, []);
  return (
    <div>
    <NavBar/>
    <HeroSection
          key={HeroData[0]?._id}
          SmallDesc={HeroData[0]?.SmallDesc}
          HeroImage={HeroData[0]?.HeroImage}
    />
    <AboutMe/>
    <Skills/>
    <ProjectCarousel />
    <TestimonialsSection/>
  
    <Footer/>
    </div>
  );
};

export default RaoulPortfolio;
