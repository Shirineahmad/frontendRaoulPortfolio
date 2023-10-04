import React, { useEffect, useState } from 'react';
import DashHeroTable from './DashHeroTable';
import "../css/DashHero.css";


const Heros = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [SmallDesc, setSmallDesc] = useState('');
  const [image, setHeroImage] = useState(null); 

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

  const handleHeroInputs = async (e) => {
    e.preventDefault();
    if (data.length > 0) {
      setErrorMessage('You should delete the old data before inserting new one.');
      setTimeout(() => {
        setErrorMessage('');
      }, 10000);
      return;
    }
  
    const formData = new FormData();
    formData.append('SmallDesc', SmallDesc);
    formData.append('image', image);
  
    try {
      const response = await fetch('http://localhost:8000/Hero/add', {
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
        console.log('Hero added successfully:', data.data);
        setErrorMessage('Data added successfully.');
        setSmallDesc('');
        setHeroImage(null);
        setTimeout(() => {
          setErrorMessage('');
        }, 10000);
      } else {
        console.error('Error adding hero:', data.message);
        setErrorMessage('Error adding hero: ' + data.message);
      }
    } catch (error) {
      console.error('An error occurred while adding hero:', error);
      setErrorMessage('An error occurred while adding hero.');
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hero</h1>
      {errorMessage && <p>{errorMessage}</p>}

      <table className="DashcontainHeroTable">
        <tr>
          <th>HeroDesc</th>
          <th>HeroImage</th>
        </tr>

        {data.map((hero) => (
          <DashHeroTable
            key={hero._id}
            id={hero._id}
            SmallDesc={hero.SmallDesc}
            HeroImage={hero.HeroImage}
            onDelete={handleDelete}
          />
        ))}
      </table>

      <form
        className="DashHeroContainForm"
        onSubmit={handleHeroInputs}
        encType="multipart/form-data"
      >
        <table className="DashcontainHeroTable">
          <tr>
            <th>
              <label htmlFor="SmallDesc" className="DashHeroLabel">
                Small Description
              </label>
            </th>
            <th>
              <label htmlFor="HeroImage" className="DashHeroLabel">
                Hero Image
              </label>
            </th>
          </tr>
          <tr>
            <td>
              <input
                className="DashHeroInputForm"
                type="text"
                required={true}
                placeholder="Enter Small Description"
                value={SmallDesc}
                onChange={(e) => setSmallDesc(e.target.value)}
              />
            </td>
            <td>
              <input
                className="DashHeroInputForm"
                type="file"
                required={true}
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setHeroImage(file);
                  }
                }}
              />
            </td>
            <input type="submit" value="Submit" className="submitHeroform" />
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Heros;
