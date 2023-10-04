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

        // Set the input field values using the fetched data
        if (data.data.length === 1) {
          const fetchedData = data.data[0];
          setDesc(fetchedData.SmallDesc);
          setPhone(fetchedData.PhoneNb);
          setEmail(fetchedData.Email);
          setLinkedIn(fetchedData.InLink);
          setFb(fetchedData.FbLink);
          setInstagram(fetchedData.InstagramLink);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDashContactInfoData();
  }, []);

  const handleUpdate = async () => {

    if (data.length !== 1) {
      setErrorMessage('No data to update.');
      return;
    }

    const idToUpdate = data[0]._id;
    const updatedContactInfoDetails = { SmallDesc, PhoneNb, Email, InLink, FbLink, InstagramLink };

    const response = await fetch(`http://localhost:8000/ContactInfoAndDesc/update/${idToUpdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedContactInfoDetails),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response);
    setErrorMessage('data updated successfully.');
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };

  return (
    <div className="contactInfoDesc">
      <h1 className='Contact-Dashboard'>ContactInfo, Social Share And Desc</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <table className='DashContactInfoTable'>
        <tr className='Table-content-contactinfo'>
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
            InstagramLink={data.InstagramLink}

          />
        ))} </table>

      <form className='DashContactInfoForm' onSubmit={handleUpdate}>
        <label htmlFor="SmallDesc" className='ContactInfo-label'> Small Desc</label>
        <input className='ContactInfo-input' type="text" required={true} placeholder='Enter SmallDesc'
          value={SmallDesc} onChange={(e) => setDesc(e.target.value)}></input>
        <label htmlFor="PhoneNb" className='ContactInfo-label'>Phone Number</label>
        <input className='ContactInfo-input' type="text" required={true} placeholder='Enter Phone Number'
          value={PhoneNb} onChange={(e) => setPhone(e.target.value)}></input>
        <label htmlFor="Email" className='ContactInfo-label'>Email</label>
        <input className='ContactInfo-input' type="text" required={true} placeholder='Enter Email'
          value={Email} onChange={(e) => setEmail(e.target.value)}></input>
        <label htmlFor="InLink" className='ContactInfo-label'>LinkedIn Link</label>
        <input className='ContactInfo-input' type="text" required={true} placeholder='Enter LinkedIn Link'
          value={InLink} onChange={(e) => setLinkedIn(e.target.value)}></input>
        <label htmlFor="FbLink" className='ContactInfo-label'>FaceBook Link</label>
        <input className='ContactInfo-input' type="text" required={true} placeholder='Enter FaceBook Link'
          value={FbLink} onChange={(e) => setFb(e.target.value)}></input>
        <label htmlFor="InstagramLink" className='ContactInfo-label'>Instagram Link</label>
        <input className='ContactInfo-input' type="text" required={true} placeholder='Enter Instagram Link'
          value={InstagramLink} onChange={(e) => setInstagram(e.target.value)}></input>
        <br />
        <input type="submit" value="Submit" className="SubmitContactInfoForm" />
      </form>




    </div>
  );
}

export default ContactInfo;
