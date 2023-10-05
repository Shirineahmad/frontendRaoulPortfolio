import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    fetch(`${process.env.REACT_APP_API_URL}/LogIn/getAll`)
      .then((response) => response.json())
      .then((data) => {
        const adminData = data.data[0];
        if (
          adminData.AdminUserName === userName &&
          adminData.AdminPass === password
        ) {
          setError("");
          setIsLoggedIn(true);
          localStorage.setItem('isLoggedIn',true);
          
        } else {
          setError("Username or password is incorrect");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while logging in");
      });
  };

  return (
    <div className="LoginMain">
      <div className="LoginContainer">
        <div className="LoginFormContainer">
          <div className="Login">
            <form className="LoginForm">
              <label htmlFor="LoginChk" aria-hidden="true">
                Log in
              </label>
              <input
                className="LoginInput"
                type="text"
                name="UserName"
                placeholder="UserName"
                required=""
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                className="LoginInput"
                type="password"
                name="Password"
                placeholder="Password"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isLoggedIn ? (
                <Link to="/dashboard">
                  <button type="button">Log in</button>
                </Link>
              ) : (
                <button type="button" onClick={handleLogin}>
                  Log in
                </button>
              )}
            </form>
            {error && <p className="error-message">{error}</p>}
          </div>
          </div>
         
          <div className="LoginImageContainer">
            <img src="/Images/login.gif" alt="" className="LoginImage" />
          </div>
        
      </div>
    </div>
  );
};

export default Login;
