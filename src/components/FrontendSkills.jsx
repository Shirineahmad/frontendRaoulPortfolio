import React from 'react';
import { useEffect, useState } from 'react';
import SkillContent from './SkillsContent';
import "../css/SkillsSection.css";
function FrontendSkills() {
    const [data, setData] = useState([]);
    const fetchDataForFrontSkills = () => {
        fetch(`${process.env.REACT_APP_API_URL}/Skills/getAll`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data)
            setData(data.data)})
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        fetchDataForFrontSkills();
      }, []);

      const filteredData = data.filter((FrontSkill) => FrontSkill?.SkillType === 'FrontEnd');

    return (
       <div className="frontend-skills">
      {filteredData.map((FrontSkill) => (
        <SkillContent
          key = {FrontSkill?._id}
          iconSrc={FrontSkill?.SkillImage}
          skillName={FrontSkill?.SkillDesc}
        />
      ))}
    </div>
    );
}

export default FrontendSkills;
