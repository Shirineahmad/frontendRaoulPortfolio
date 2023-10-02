import React, { useEffect, useState } from 'react';
import DashContactInfoTable from './DashContactInfoTable';
import "../css/DashContactInfo.css";


function ContactInfo() {
  const [data, setData] = useState([]);
  const [SmallDesc, setDesc] = useState('');
  const [PhoneNb, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [InLink, setLinkedIn] = useState('');
  const [FbLink, setFb] = useState('');
  const [InstagramLink, setInstagram] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchDashContactInfoData = () => {
    fetch('http://localhost:8000/ContactInfoAndDesc/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDashContactInfoData();
  }, []);

  const handleContactInfoInputs = async () => {
    if (data.length > 0) {
      setErrorMessage('You should delete previous Info before adding new ones.');
      setTimeout(() => {
        setErrorMessage(''); 
      }, 10000); 
      return;
    }

    const ContactInfoDetails = { SmallDesc, PhoneNb, Email, InLink, FbLink, InstagramLink };
    console.log(ContactInfoDetails);

    const response = await fetch('http://localhost:8000/ContactInfoAndDesc/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ContactInfoDetails),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response);
    const ContactInfoData = await response.json();
    console.log(ContactInfoData);
    setErrorMessage('Info added successfully.');
    setDesc('');
    setPhone('');
    setEmail('');
    setLinkedIn('');
    setFb('');
    setInstagram('');
    setTimeout(() => {
      setErrorMessage(''); 
    }, 10000); 
  };

  const handleDelete = async (idToDelete) => {
    const response = await fetch(`http://localhost:8000/ContactInfoAndDesc/delete/${idToDelete}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response);
    setErrorMessage('Info deleted successfully.');
    setData([]);
  };


 

  return (
    <div className="contactInfoDesc">
      <h1>ContactInfo, Social Share And Desc</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <table className='DashContactInfoTable'>
          <tr>
            <th>SmallDesc</th>
            <th>PhoneNb</th>
            <th>Email</th>
            <th>LinkedIn Link </th>
            <th>FaceBook Link</th>
            <th>Instagram Link</th>
          
          </tr>
          {data.map((data) => (
            <DashContactInfoTable
            id={data._id}
            SmallDesc={data.SmallDesc}
            PhoneNb={data.PhoneNb}
            Email={data.Email}
            InLink={data.InLink}
            FbLink={data.FbLink}
            InstagramLink={data.PhoneNb}
            onDelete={handleDelete}

             
            />
          ))} </table>

        <form className='DashContactInfoForm' onSubmit={handleContactInfoInputs}>
        <label htmlFor="SmallDesc">SmallDesc</label>
        <input type="text" required={true} placeholder='Enter SmallDesc'
          value={SmallDesc} onChange={(e) => setDesc(e.target.value)}></input>
        <label htmlFor="PhoneNb">Phone Number</label>
        <input type="text" required={true} placeholder='Enter Phone Number'
          value={PhoneNb} onChange={(e) => setPhone(e.target.value)}></input>
        <label htmlFor="Email">Email</label>
        <input type="text" required={true} placeholder='Enter Email'
          value={Email} onChange={(e) => setEmail(e.target.value)}></input>
        <label htmlFor="InLink">LinkedIn Link</label>
        <input type="text" required={true} placeholder='Enter LinkedIn Link'
          value={InLink} onChange={(e) => setLinkedIn(e.target.value)}></input>
          <label htmlFor="FbLink">FaceBook Link</label>
        <input type="text" required={true} placeholder='Enter faceBook Link'
          value={FbLink} onChange={(e) => setFb(e.target.value)}></input>
        <label htmlFor="InstagramLink">Instagram Link</label>
        <input type="text" required={true} placeholder='Enter Instagram Link'
          value={InstagramLink} onChange={(e) => setInstagram(e.target.value)}></input>
        <br />
        <input type="submit" value="Submit" className="SubmitContactInfoForm" />
      </form>

        
        
      
    </div>
  );
}

export default ContactInfo;
