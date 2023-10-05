import React from "react";
import styled from "styled-components";
import "../css/Project.css"


const Project = ({ ProjectImage, ProjectName, description, techUsed, DemoLink, RepoLink }) => {
  return (
    
    
    <div className="ProjectContainer">
      <img className="ProjectImage" src={`data:image/png;base64,${ProjectImage}`} alt="image" />
      <h2 className="ProjectTitle">{ProjectName}</h2>
      <hr className="CustomHR" />
      <div className="ProjectDetails">
      <p className="ProjectDescription1">{description}</p>
      <p className="ProjectDescription2">{techUsed}</p>
      <div className="ButtonWrapper">
        <a href={DemoLink} target="-blank">
        <button className="ProjectDemoButton">Live Demo</button>
        </a>
        <a href={RepoLink} target="-blank">
        <button className="ProjectRepositoryButton">Repository</button>
        </a>
      </div>
      </div>
    </div>
    
  );
};

export default Project;