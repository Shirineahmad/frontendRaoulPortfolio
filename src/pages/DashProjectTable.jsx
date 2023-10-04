import React from 'react';


const DashSkillsTable = ({ id, onDelete, ProjectImage, ProjectName, description, techUsed, DemoLink, RepoLink }) => {

  const handleDelete = () => {
    onDelete(id);
  };



  return (
    <tr>
      <td> {ProjectName} </td>
      <td>{description}</td>
      <td>{techUsed}</td>
      <td>{DemoLink}</td>
      <td>{RepoLink}</td>
      <td> <img className="DashProjectImage" src={`data:image/png;base64,${ProjectImage}`} alt='ProjectImage' /></td>
      <td>
        <button className='Delete-projects' onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default DashSkillsTable;