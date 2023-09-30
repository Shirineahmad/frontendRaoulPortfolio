import React from 'react';
import "../css/SkillsSection.css";
function SkillContent({ iconSrc, skillName }) {
  return (
    <div className="skills-content">
      <img className="skills-icons" src={`data:image/svg+xml;base64,${iconSrc}`} alt="" srcSet="" />
      <p className="skills">{skillName}</p>
    </div>
  );
}

export default SkillContent;
