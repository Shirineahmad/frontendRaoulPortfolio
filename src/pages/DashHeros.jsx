import React, { useEffect, useState } from 'react';
import DashHeroTable from './DashHeroTable';

const Heros = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [smallDesc, setSmallDesc] = useState('');
  const [heroImage, setHeroImage] = useState('');

  const fetchDashHeroData = () => {
    fetch('http://localhost:8000/Hero/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDashHeroData();
  }, []);

  const handleDelete = async (idToDelete) => {
    const response = await fetch(`http://localhost:8000/Hero/delete/${idToDelete}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response);
    setErrorMessage('Data deleted successfully.');
    setData([]);
  };

  const handleHeroInputs = async () => {
    if (data.length > 0) {
      setErrorMessage('You should delete the old data before inserting a new one.');
      setTimeout(() => {
        setErrorMessage('');
      }, 10000);
      return;
    }
  
    
    const formData = new FormData();
    formData.append('SmallDesc', smallDesc);
    formData.append('HeroImage', heroImage);
  
    try {
      const response = await fetch('http://localhost:8000/Hero/add', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData);
      setErrorMessage('Data added successfully.');
      fetchDashHeroData(); 
      setSmallDesc('');
      setHeroImage(null); 
      setTimeout(() => {
        setErrorMessage('');
      }, 10000);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
      <div>
          <h1 style={{textAlign:'center'}}>Hero</h1>
          {errorMessage && <p>{errorMessage}</p>}

          <table className='DashHeroTable'>
          <tr>
            <th>HeroDesc</th>
            <th>HeroImage</th>
        
          </tr>
    
       
          <DashHeroTable
            id={data[0]?._id}
            SmallDesc={data[0]?.SmallDesc}
            HeroImage={data[0]?.HeroImage}
            onDelete={handleDelete}
        
       
          />   </table>

      <form className='DashHeroForm' onSubmit={handleHeroInputs}>
        <label htmlFor="SmallDesc">Small Description</label>
        <input
          type="text"
          required={true}
          placeholder='Enter Small Description'
          value={smallDesc}
          onChange={(e) => setSmallDesc(e.target.value)}
        />
        <label htmlFor="HeroImage">Hero Image</label>
        <input
          type="file"
          required={true}
          accept="image/*"
          onChange={(e) => setHeroImage(e.target.files[0])}
        />
        <br />
        <input type="submit" value="Submit" className="SubmitHeroForm" />
      </form>
        
          
        
    



    </div>
  )
}

export default Heros