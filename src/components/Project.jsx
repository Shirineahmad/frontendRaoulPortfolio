import React from "react";
import styled from "styled-components";
import "../css/Project.css"


const Project = ({ imageUrl, title, description1, description2 }) => {
  return (
    
    
    <div className="ProjectContainer">
      <img className="ProjectImage" src="../../Images/Projectpic.png" alt="{title}" />
      <h2 className="ProjectTitle">Project Name</h2>
      <hr class="CustomHR" />
      <div className="ProjectDetails">
      <p className="ProjectDescription1">The website is about a honey product store, u can check all products, add items to your cart and simply order them!</p>
      <p className="ProjectDescription2">Tech used: MERN stack, Html, Css, TailwindCss, Javascript, React, Node, Express, Mongoose, MongoDb, Docker</p>
      <div className="ButtonWrapper">
        <button className="ProjectDemoButton">Live Demo</button>
        <button className="ProjectRepositoryButton">Repository</button>
      </div>
      </div>
    </div>
    
  );
};

export default Project;