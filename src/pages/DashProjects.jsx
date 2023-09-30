import React, { useEffect, useState } from 'react';
import DashProjectTable from './DashProjectTable';

const MyProjects = () => {

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchDashProjectsData = () => {
    fetch('http://localhost:8000/MyProjects/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = async (id) => {
    
    const response = await fetch(`http://localhost:8000/MyProjects/delete/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error(`Failed to delete row with ID: ${id}`);
      return;
    }

    
    setData((prevData) => prevData.filter((about) => about._id !== id));
    setErrorMessage('Project deleted successfully.');
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };

  useEffect(() => {
    fetchDashProjectsData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      {errorMessage && <p>{errorMessage}</p>}

      <table className='DashProjectTable'>
          <tr>
            <th>Project Name</th>
            <th>Description</th>
            <th>Tech Used</th>
            <th>Demo Link</th>
            <th>Repo Link</th>
            <th>Project Image</th>
          </tr>

      {data.map((project) => (
          <DashProjectTable 
          key={project._id} 
          ProjectImage={project.ProjectImage}
          ProjectName = {project.ProjectName}
          description = {project.ProjectDesc}
          techUsed = {project.TechUsed}
          DemoLink = {project.DemoLink}
          RepoLink = {project.RepoLink}
          onDelete={handleDelete}
          />
        ))}
        </table>
    </div>
  );
}

export default MyProjects