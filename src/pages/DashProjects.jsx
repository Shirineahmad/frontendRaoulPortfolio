import React, { useEffect, useState } from 'react';
import DashProjectTable from './DashProjectTable';
import "../css/DashProjects.css";

const MyProjects = () => {

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [ProjectName, setProjectName] = useState('');
  const [ProjectDesc, setProjectDesc] = useState('');
  const [TechUsed, setTechUsed] = useState('');
  const [DemoLink, setDemoLink] = useState('');
  const [RepoLink, setRepoLink] = useState('');
  const [image, setProjectImage] = useState(null);

  const fetchDashProjectsData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/MyProjects/getAll`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchDashProjectsData();
  }, []);

  const handleDelete = async (id) => {

    const response = await fetch(`${process.env.REACT_APP_API_URL}/MyProjects/delete/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error(`Failed to delete row with ID: ${id}`);
      return;
    }


    setData((prevData) => prevData.filter((project) => project._id !== id));
    
    setErrorMessage('Project deleted successfully.');
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };

  const handleProjectInputs = async (e) => {
    e.preventDefault();
    if (data.length > 8) {
      setErrorMessage('You can max add 9 projects');
      setTimeout(() => {
        setErrorMessage('');
      }, 10000);
      return;
    }

    const formData = new FormData();
    formData.append('ProjectName', ProjectName);
    formData.append('ProjectDesc', ProjectDesc);
    formData.append('TechUsed', TechUsed);
    formData.append('DemoLink', DemoLink);
    formData.append('RepoLink', RepoLink);
    formData.append('image', image);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/MyProjects/add`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.error('HTTP error! Status:', response.status);
        console.error('Response:', response);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        console.log('project added successfully:', data.data);
        setErrorMessage('Data added successfully.');
        setProjectName('');
        setProjectDesc('');
        setTechUsed('');
        setDemoLink('');
        setRepoLink('');
        setProjectImage(null);
        setTimeout(() => {
          setErrorMessage('');
        }, 10000);
      } else {
        console.error('Error adding project:', data.message);
        setErrorMessage('Error adding Project: ' + data.message);
      }
    } catch (error) {
      console.error('An error occurred while adding Project:', error);
      setErrorMessage('An error occurred while adding Project.');
    }
  };



  return (
    <div>
      <h1 className='Projects-Dashboard-h1'>Projects</h1>
      {errorMessage && <p>{errorMessage}</p>}

      <h2 className='Projects-tittle-Dash'> All Projects : </h2>
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
            id={project._id}
            key={project._id}
            ProjectImage={project.ProjectImage}
            ProjectName={project.ProjectName}
            description={project.ProjectDesc}
            techUsed={project.TechUsed}
            DemoLink={project.DemoLink}
            RepoLink={project.RepoLink}
            onDelete={handleDelete}
          />
        ))}
      </table>

      <h2 className='Projects-tittle-Dash'> Add New Project : </h2>
      <form className='DashProjectForm' onSubmit={handleProjectInputs} encType='multipart/form-data'>
        <label htmlFor='ProjectName' className='Project-label'>Project Name</label>
        <input className='Project-input'
          type='text'
          required={true}
          placeholder='Enter Project Name'
          value={ProjectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label htmlFor='ProjectDesc' className='Project-label'>Project Description</label>
        <input className='Project-input'
          type='text'
          required={true}
          placeholder='Enter Project Desc'
          value={ProjectDesc}
          onChange={(e) => setProjectDesc(e.target.value)}
        />
        <label htmlFor='TechUsed' className='Project-label'>Tech Used</label>
        <input className='Project-input'
          type='text'
          required={true}
          placeholder='Enter The TechUsed'
          value={TechUsed}
          onChange={(e) => setTechUsed(e.target.value)}
        />
        <label htmlFor='DemoLink' className='Project-label'>Demo Link</label>
        <input className='Project-input'
          type='text'
          required={true}
          placeholder='Enter DemoLink'
          value={DemoLink}
          onChange={(e) => setDemoLink(e.target.value)}
        />
        <label htmlFor='RepoLink' className='Project-label'>Repo Link</label>
        <input className='Project-input'
          type='text'
          required={true}
          placeholder='Enter RepoLink'
          value={RepoLink}
          onChange={(e) => setRepoLink(e.target.value)}
        />
        <label htmlFor='ProjectImage' className='Project-label'>Project Image</label>
        <input className='Project-input'
          type='file'
          required={true}
          accept='image/*'
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setProjectImage(file);
            }
          }}
        />
        <br />
        <input type='submit' value='Submit' className='SubmitProjectForm' />
      </form>
    </div>
  );
}

export default MyProjects