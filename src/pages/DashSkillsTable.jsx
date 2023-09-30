import React from 'react';


const DashSkillsTable = ({ id, onDelete,  SkillDesc, SkillImage}) => {
    
    const handleDelete = () => {
        onDelete(id); };
        
        

  return (
    <tr>
      
        <td>{SkillDesc}</td>
        <td> <img className="DashSkillImage" src={`data:image/svg+xml;base64,${SkillImage}`} alt='SkillImage' /></td>
        <td>
        <button onClick={handleDelete}>Delete</button>
         </td>
    </tr>
  );
};

export default DashSkillsTable ;