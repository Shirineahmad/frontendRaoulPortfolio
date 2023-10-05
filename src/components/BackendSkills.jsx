import React from 'react';
import SkillContent from './SkillsContent';
import { useEffect, useState } from 'react';
import "../css/SkillsSection.css";

function BackendSkills() {

    const [data, setData] = useState([]);
    const fetchDataForBackSkills = () => {
        fetch(`${process.env.REACT_APP_API_URL}/Skills/getAll`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data)
            setData(data.data)})
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        fetchDataForBackSkills();
      }, []);

      const filteredData = data.filter((FrontSkill) => FrontSkill?.SkillType === 'BackEnd');


    return (
        <div className="backend-skills">
       {filteredData.map((BackSkill) => (
        <SkillContent
          key = {BackSkill?._id}
          iconSrc={BackSkill?.SkillImage}
          skillName={BackSkill?.SkillDesc}
        />
      ))}
           
        </div>
    );
}
export default BackendSkills;