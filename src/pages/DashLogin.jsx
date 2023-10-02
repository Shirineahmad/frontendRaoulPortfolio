import React, { useEffect, useState } from 'react';
import DashLogInTable from './DashLogInTable';
import "../css/DashLogIn.css";

const Login = () => {
  const [data, setData] = useState([]);
  const [AdminUserName, setUsername] = useState('');
  const [AdminPass, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchDashLogInData = () => {
    fetch('http://localhost:8000/LogIn/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
        if (data.data.length === 1) {
          setUsername(data.data[0].AdminUserName);
          setPassword(data.data[0].AdminPass);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDashLogInData();
  }, []);

  const handleUpdate = async () => {
    
    if (data.length !== 1) {
      setErrorMessage('No data to update.');
      return;
    }

    const idToUpdate = data[0]._id;
    const updatedLogInDetails = { AdminUserName, AdminPass };

    const response = await fetch(`http://localhost:8000/LogIn/update/${idToUpdate}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedLogInDetails),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response);
    setErrorMessage('Credentials updated successfully.');
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>UserInfo</h1>
      {errorMessage && <p>{errorMessage}</p>}

      <table className='DashLogInTable'>
        
          <tr>
            <th>UserName</th>
            <th>Password</th>
          </tr>
        
      
          <DashLogInTable
            id={data[0]?._id}
            UserName={data[0]?.AdminUserName}
            Password={data[0]?.AdminPass}
          />
       
      </table>

      <form className='DashLogInForm' onSubmit={handleUpdate}>
        <label htmlFor="UserName">Username</label>
        <input
          type="text"
          required={true}
          placeholder='Enter Username'
          value={AdminUserName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          required={true}
          placeholder='Enter Password'
          value={AdminPass}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Update" className="SubmitLogInForm" />
      </form>
    </div>
  );
};

export default Login;
