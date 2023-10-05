import React, { useEffect, useState } from 'react';
import DashHeroTable from './DashHeroTable';
import '../css/DashHero.css';

const Heros = () => {
  const [heroData, setHeroData] = useState({
    _id: '',
    SmallDesc: '',
    image: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [SmallDesc, setSmallDesc] = useState('');
  const [image, setHeroImage] = useState(null);

  const fetchDashHeroData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/Hero/getAll`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        if (data.data.length === 1) {
          const hero = data.data[0];
          setHeroData(hero);
          setSmallDesc(hero.SmallDesc);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchDashHeroData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault(); 

    const idToUpdate = heroData._id;
    const formData = new FormData();
    formData.append('SmallDesc', SmallDesc);
    formData.append('image', image);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/Hero/update/${idToUpdate}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    //fetchDashHeroData();

    const data = await response.json();
    if (data.success) {
      console.log('Data updated successfully:', data.data);
      setErrorMessage('Data updated successfully.');
      setTimeout(() => {
        setErrorMessage('');
      }, 10000);
    } else {
      console.error('Error updating data:', data.message);
      setErrorMessage('Error updating data: ' + data.message);
    }
  } catch (error) {
    console.error('An error occurred while updating data:', error);
    setErrorMessage('An error occurred while updating data.');
  }
  };

  return (
    <div>
      <h1 className='HeroDashboard-h1'>Hero</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <h2 className='HeroDashboard-h2'> Current Hero Section </h2>
      <table className='DashHeroTable'>
        <thead>
          <tr>
            <th>Hero Desc</th>
            <th>Hero Image</th>
          </tr>
        </thead>
        <tbody>
          <DashHeroTable
            key={heroData._id}
            id={heroData._id}
            SmallDesc={heroData.SmallDesc}
            HeroImage={heroData.HeroImage}
          />
        </tbody>
      </table>

      <h2 className='HeroDashboard-h2'> Update Hero Section </h2>
      <form className='DashHeroForm' onSubmit={handleUpdate} encType='multipart/form-data'>
        <label htmlFor='SmallDesc'>Small Description</label>
        <input
          type='text'
          required={true}
          placeholder='Enter Small Description'
          value={SmallDesc}
          onChange={(e) => setSmallDesc(e.target.value)}
        />
        <label htmlFor='HeroImage'>Hero Image</label>
        <input
          type='file'
          required={true}
          accept='image/*'
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setHeroImage(file);
            }
          }}
        />
        <br />
        <input type='submit' value='Update' className='SubmitHeroForm' />
      </form>
    </div>
  );
};

export default Heros;
