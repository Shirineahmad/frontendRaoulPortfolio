import React, {Component} from 'react';
import "../css/Login.css"
const Login = () => {


  return (
    <div className="LoginMain">  	
    <input type="checkbox" id="LoginChk" aria-hidden="true" />

        <div className="Login">
            <form className="LoginForm">
                <label for="LoginChk" aria-hidden="true">Log in</label>
                <input className="LoginInput" type="email" name="email" placeholder="Email" required="" />
                <input className="LoginInput" type="password" name="pswd" placeholder="Password" required="" />
                <button>Log in</button>
            </form>
        </div>


</div>
  );
};

export default Login;