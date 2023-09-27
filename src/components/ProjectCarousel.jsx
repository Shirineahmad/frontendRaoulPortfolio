import Carousel from "react-elastic-carousel";
import React, { useState } from "react";
import Project from "./Project";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 }
];
const numberOfProjects = 9;

const ProjectCarousel = () => {
  return (
    <div className="ProjectCarousel-wrapper" id="ProjectCarousel-wrapper">
      <div className="FooterTitles">
        <b className="TheEnd">My Projects</b></div>
      <Carousel breakPoints={breakPoints}>
        {[...Array(numberOfProjects)].map((_, index) => (
          <Project key={index} />
        ))}
      </Carousel>
      <div className="ProjectFooter">
        <b className="SubTitleFooter">Got some extraordinary reviews</b></div>
    </div>
  );
};

export default ProjectCarousel;