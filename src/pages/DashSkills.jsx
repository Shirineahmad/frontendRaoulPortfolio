import React, { useEffect, useState } from 'react';
import DashSkillsTable from './DashSkillsTable';

const DashSkills = () => {

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  const fetchDashSkillsData = () => {
    fetch('http://localhost:8000/Skills/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDashSkillsData();
  }, []);

  const handleDelete = async (id) => {
    
    const response = await fetch(`http://localhost:8000/Skills/delete/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error(`Failed to delete row with ID: ${id}`);
      return;
    }

    
    setData((prevData) => prevData.filter((about) => about._id !== id));
    setErrorMessage('Skill deleted successfully.');
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };


  const filteredFrontData = data.filter((FrontSkill) => FrontSkill?.SkillType === 'Front');

  const filteredBackData = data.filter((FrontSkill) => FrontSkill?.SkillType === 'Back');

  const filteredOtherData = data.filter((FrontSkill) => FrontSkill?.SkillType === 'other');
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Skills</h1>
      {errorMessage && <p>{errorMessage}</p>}

      <h2>FrontEnd Skills</h2>
      <table className='DashSkillsTable'>
          <tr>
          
            <th>Skill Desc</th>
            <th>Skill Image</th>
          
          </tr>
       
          {filteredFrontData.map((skill) => (
            <DashSkillsTable
              key={skill._id}
              id={skill._id}
              SkillDesc={skill.SkillDesc}
              SkillImage={skill.SkillImage}
              onDelete={handleDelete}
            />
          ))}

         </table>


         <h2>BackEnd Skills</h2>
      <table className='DashSkillsTable'>
          <tr>
          
            <th>Skill Desc</th>
            <th>Skill Image</th>
          
          </tr>
       
          {filteredBackData.map((skill) => (
            <DashSkillsTable
              key={skill._id}
              id={skill._id}
              SkillDesc={skill.SkillDesc}
              SkillImage={skill.SkillImage}
              onDelete={handleDelete}
            />
          ))}

         </table>


         <h2>Other Skills</h2>
      <table className='DashSkillsTable'>
          <tr>
      
            <th>Skill Desc</th>
            <th>Skill Image</th>
          
          </tr>
       
          {filteredOtherData.map((skill) => (
            <DashSkillsTable
              key={skill._id}
              id={skill._id}
              SkillDesc={skill.SkillDesc}
              SkillImage={skill.SkillImage}
              onDelete={handleDelete}
            />
          ))}

         </table>
    </div>
  );
}

export default DashSkills