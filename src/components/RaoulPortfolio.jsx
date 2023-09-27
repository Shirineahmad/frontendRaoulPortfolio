import { useEffect, useState } from 'react';
import React from 'react';
import AboutMe from './AboutMe.jsx';
import Footer from './Footer';
import HeroSection from './HeroSection';
import NavBar from './NavBar';
import ProjectCarousel from './ProjectCarousel';

const RaoulPortfolio = () => {
  const [data, setData] = useState([]);

  const fetchDataForHeroSection = () => {
    fetch('http://localhost:8000/Hero/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        setData(data.data)})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDataForHeroSection();
  }, []);
  return (
    <div>
    <NavBar/>
    <HeroSection
          key={data[0]?._id}
          SmallDesc={data[0]?.SmallDesc}
          HeroImage={data[0]?.HeroImage}
    />
    <AboutMe/>
    <ProjectCarousel />
    <Footer/>
    </div>
  );
};

export default RaoulPortfolio;
