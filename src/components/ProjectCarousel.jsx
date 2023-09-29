import Carousel from "react-elastic-carousel";
import { useEffect, useState } from 'react';
import React from 'react';
import Project from "./Project";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 }
];


const ProjectCarousel = () => {
  const [ProjectData, setProjectData] = useState([]);

  const fetchDataForProjectSection = () => {
    fetch('http://localhost:8000/MyProjects/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        setProjectData(data.data)})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDataForProjectSection();
  }, []);
  return (
    <div className="ProjectCarousel-wrapper" id="ProjectCarousel-wrapper">
      <div className="FooterTitles">
        <b className="TheEnd">My Projects</b></div>
      <Carousel breakPoints={breakPoints}>
      {ProjectData.map((project) => (
          <Project 
          key={project._id} 
          ProjectImage={project.ProjectImage}
          ProjectName = {project.ProjectName}
          description = {project.ProjectDesc}
          techUsed = {project.TechUsed}
          DemoLink = {project.DemoLink}
          RepoLink = {project.RepoLink}
          />
        ))}
      </Carousel>
      <div className="ProjectFooter">
        <b className="SubTitleFooter">Got some extraordinary reviews</b></div>
    </div>
  );
};

export default ProjectCarousel;