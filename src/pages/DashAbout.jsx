import React, { useEffect, useState } from 'react';
import DashAboutTable from './DashAboutTable';

const About = () => {
  const [data, setData] = useState([]);
  const [AboutTitle, setTitle] = useState('');
  const [AboutDesc, setDesc] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchDashAboutData = () => {
    fetch('http://localhost:8000/About/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDashAboutData();
  }, []);

  const handleAboutInputs = async () => {
    if (data.length > 7) {
      setErrorMessage('You should delete previous credentials before adding new ones.');
      setTimeout(() => {
        setErrorMessage(''); 
      }, 10000); 
      return;
    }

    const AboutDetails = { AboutTitle, AboutDesc };
    console.log(AboutDetails);

    const response = await fetch('http://localhost:8000/About/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(AboutDetails),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response);
    const AboutData = await response.json();
    console.log(AboutData);
    setErrorMessage('About added successfully.');
    setTitle('');
    setDesc('');
    setTimeout(() => {
      setErrorMessage(''); 
    }, 10000); 
  };


  const handleDelete = async (id) => {
    
    const response = await fetch(`http://localhost:8000/About/delete/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error(`Failed to delete row with ID: ${id}`);
      return;
    }

    
    setData((prevData) => prevData.filter((about) => about._id !== id));
    setErrorMessage('About deleted successfully.');
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About</h1>
      {errorMessage && <p>{errorMessage}</p>}

      <table className='DashAboutTable'>
          <tr>
            <th>AboutTitle</th>
            <th>AboutDesc</th>
          
          </tr>
          {data.map((about) => (
            <DashAboutTable
              key={about._id}
              id={about._id}
              AboutTitle={about.AboutTitle}
              AboutDesc={about.AboutDesc}
              onDelete={handleDelete}
            />
          ))}

         </table>

         <form className='DashAboutForm' onSubmit={handleAboutInputs}>
        <label htmlFor="AboutTitle">AboutTitle</label>
        <input type="text" required={true} placeholder='Enter About Title'
          value={AboutTitle} onChange={(e) => setTitle(e.target.value)}></input>
        <label htmlFor="AboutDesc">AboutDesc</label>
        <input type="text" required={true} placeholder='Enter AboutDesc'
          value={AboutDesc} onChange={(e) => setDesc(e.target.value)}></input>
        <br />
        <input type="submit" value="Submit" className="SubmitAboutForm" />
      </form>
         
        
    </div>
  );
}

export default About