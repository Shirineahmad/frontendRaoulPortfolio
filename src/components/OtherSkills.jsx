import React from 'react';
import SkillContent from './SkillsContent';
import { useEffect, useState } from 'react';
import "../css/SkillsSection.css";

function OtherSkills() {

    const [data, setData] = useState([]);
    const fetchDataForOtherSkills = () => {
        fetch(`${process.env.REACT_APP_API_URL}/Skills/getAll`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data)
            setData(data.data)})
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        fetchDataForOtherSkills();
      }, []);

      const filteredData = data.filter((FrontSkill) => FrontSkill?.SkillType === 'Other');

    return (
        <div className="other-skills">
        {filteredData.map((OtherSkill) => (
        <SkillContent
          key = {OtherSkill?._id}
          iconSrc={OtherSkill?.SkillImage}
          skillName={OtherSkill?.SkillDesc}
        />
      ))}
            
        </div>
    );
}
export default OtherSkills;