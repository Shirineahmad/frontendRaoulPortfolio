import React from 'react';
import SkillContent from './SkillsContent';
import { useEffect, useState } from 'react';
import "../css/SkillsSection.css";

function OtherSkills() {

    const [data, setData] = useState([]);
    const fetchDataForOtherSkills = () => {
        fetch('http://localhost:8000/Skills/getAll')
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data)
            setData(data.data)})
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        fetchDataForOtherSkills();
      }, []);

      const filteredData = data.filter((FrontSkill) => FrontSkill?.SkillType === 'other');

    return (
        <div className="other-skills">
        {filteredData.map((OtherSkill) => (
        <SkillContent
          iconSrc={OtherSkill?.SkillImage}
          skillName={OtherSkill?.SkillDesc}
        />
      ))}
            
        </div>
    );
}
export default OtherSkills;