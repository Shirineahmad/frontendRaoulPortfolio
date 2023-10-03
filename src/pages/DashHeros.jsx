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
    fetch('http://localhost:8000/Hero/getAll')
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
    formData.append('HeroImage', image);

    try {
      const response = await fetch(`http://localhost:8000/Hero/update/${idToUpdate}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    
    //  fetchDashHeroData();

      console.log('Update successful');
      setErrorMessage('Data updated successfully.');
      setTimeout(() => {
        setErrorMessage('');
      }, 10000);
    } catch (error) {
      console.error('Error updating data:', error);
      setErrorMessage('An error occurred while updating.');
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hero</h1>
      {errorMessage && <p>{errorMessage}</p>}

      <table className='DashHeroTable'>
        <thead>
          <tr>
            <th>HeroDesc</th>
            <th>HeroImage</th>
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
        <input type='submit' value='Submit' className='SubmitHeroForm' />
      </form>
    </div>
  );
};

export default Heros;
