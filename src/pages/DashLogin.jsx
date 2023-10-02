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
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDashLogInData();
  }, []);

  const handleLogInInputs = async () => {
    if (data.length > 0) {
      setErrorMessage('You should delete previous credentials before adding new ones.');
      setTimeout(() => {
        setErrorMessage(''); 
      }, 10000); 
      return;
    }

    const LogInDetails = { AdminUserName, AdminPass };
    console.log(LogInDetails);

    const response = await fetch('http://localhost:8000/LogIn/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(LogInDetails),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response);
    const logInData = await response.json();
    console.log(logInData);
    setErrorMessage('Credentials added successfully.');
    setUsername('');
    setPassword('');
    setTimeout(() => {
      setErrorMessage(''); 
    }, 10000); 
  };
  const handleDelete = async (idToDelete) => {
    const response = await fetch(`http://localhost:8000/LogIn/delete/${idToDelete}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response);
    setErrorMessage('Credentials deleted successfully.');
    setData([]);
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
            onDelete={handleDelete}
       
          />
        
          
        
      </table>

      <form className='DashLogInForm' onSubmit={handleLogInInputs}>
        <label htmlFor="UserName">Username</label>
        <input type="text" required={true} placeholder='Enter Username'
          value={AdminUserName} onChange={(e) => setUsername(e.target.value)}></input>
        <label htmlFor="Password">Password</label>
        <input type="password" required={true} placeholder='Enter Password'
          value={AdminPass} onChange={(e) => setPassword(e.target.value)}></input>
        <br />
        <input type="submit" value="Submit" className="SubmitLogInForm" />
      </form>
    </div>
  );
};

export default Login;
