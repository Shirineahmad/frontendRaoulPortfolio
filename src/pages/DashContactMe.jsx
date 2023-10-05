import React, { useEffect, useState } from 'react';
import DashContactTable from './DashContactTable';
import "../css/DashContactMe.css";

const ContactMe = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  const fetchDashContactInData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/ContactMe/getAll`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDashContactInData();
  }, []);

  const handleDelete = async (id) => {

    const response = await fetch(`${process.env.REACT_APP_API_URL}/ContactMe/delete/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error(`Failed to delete row with ID: ${id}`);
      return;
    }


    setData((prevData) => prevData.filter((contact) => contact._id !== id));
    setErrorMessage('Mail Readed successfully.');
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };
  return (
    <div>
      <h1 className='ContactMe-Dashboard '>Contacted By</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <p>You Have  {data.length} unreaded messages </p>
      <table className='DashContactTable'>
        <tr>
          <th>UserName</th>
          <th>Email</th>
          <th>Message</th>

        </tr>
        {data.map((contact) => (
          <DashContactTable
            key={contact._id}
            id={contact._id}
            UserName={contact.UserName}
            Email={contact.Email}
            Message={contact.Message}
            onDelete={handleDelete}
          />

        ))}
      </table>
    </div>
  );
}

export default ContactMe