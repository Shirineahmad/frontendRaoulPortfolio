import React, { useEffect, useState } from 'react';
import DashSkillsTable from './DashSkillsTable';
import "../css/DashSkill.css";

const DashSkills = () => {

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [SkillType, setSkillType] = useState('FrontEnd');
  const [SkillDesc, setSkillDesc] = useState('');
  const [image, setSkillImage] = useState(null);


  const fetchDashSkillsData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/Skills/getAll`)
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

    const response = await fetch(`${process.env.REACT_APP_API_URL}/Skills/delete/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error(`Failed to delete row with ID: ${id}`);
      return;
    }


    setData((prevData) => prevData.filter((skill) => skill._id !== id));
    setErrorMessage('Skill deleted successfully.');
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };


  const filteredFrontData = data.filter((FrontSkill) => FrontSkill?.SkillType === 'FrontEnd');

  const filteredBackData = data.filter((BackSkill) => BackSkill?.SkillType === 'BackEnd');

  const filteredOtherData = data.filter((OtherSkill) => OtherSkill?.SkillType === 'Other');

  const handleSkillsInputs = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append('SkillType', SkillType);
    formData.append('SkillDesc', SkillDesc);
    formData.append('image', image);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/Skills/add`, {
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
        console.log('Skill added successfully:', data.data);
        setErrorMessage('Data added successfully.');
        setSkillType('');
        setSkillDesc('');
        setSkillImage(null);
        setTimeout(() => {
          setErrorMessage('');
        }, 10000);
      } else {
        console.error('Error adding skills:', data.message);
        setErrorMessage('Error adding Skill: ' + data.message);
      }
    } catch (error) {
      console.error('An error occurred while adding Skill:', error);
      setErrorMessage('An error occurred while adding Skill.');
    }
  };


  return (
    <div>
      <h1 className='SkillsDashboard-h1'>Skills</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <div className='SkillsDashboard-grid'>
        <div className='SkillsDashboard-front'>
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
        </div>

        <div className='SkillsDashboard-back'>
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
        </div>

        <div className='SkillsDashboard-other'>
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
      </div>

      <h2 className='SkillsDashboard-h2'> Add New Skill</h2>
      <form className='DashSkillsForm' onSubmit={handleSkillsInputs} encType='multipart/form-data'>
        <div className='SkillsDashboard-form'>
        <label htmlFor='SkillType'>Skill Type</label>
        <select
          required={true}
          value={SkillType}
          onChange={(e) => setSkillType(e.target.value)}
        >
          <option value='FrontEnd'>FrontEnd </option>
          <option value='BackEnd'> BackEnd </option>
          <option value='Other'>Other</option>
        </select>
        <label htmlFor='SkillDesc'>Skill Description</label>
        <input
          type='text'
          required={true}
          placeholder='Enter Skill Desc'
          value={SkillDesc}
          onChange={(e) => setSkillDesc(e.target.value)}
        />
        <label htmlFor='SkillImage'>Skill Image</label>
        <input className='image-input'
          type='file'
          required={true}
          accept='image/*'
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setSkillImage(file);
            }
          }}
        />
        <br />
        </div>
        <input type='submit' value='Add' className='SubmitSkillForm' />
      </form>
    </div>
  );
}

export default DashSkills