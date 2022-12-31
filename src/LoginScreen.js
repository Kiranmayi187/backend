

import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Apps.css";


function LoginScreen() {
  let navigate = useNavigate();
  

  // React States
  const [user,setUser]=useState({
     
    username:"",
    password:"",
    
    
    
  })
  const { username,password } = user;
  
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const logout = () => {
    localStorage.removeItem('token-info');
  
  };
  
  
  const onSubmit= async(e)=>{
    e.preventDefault();
    navigate("/Home")
    }
  
    


  return (
    <div className="auth-form-container" onSubmit={(e) => onSubmit(e)}>
        <h2>Login</h2>
        <form className="login-form" >
        <label >Full name</label><br/>
        <input type="text" autoComplete="off" value={username} placeholder="Enter User name"  name="username" onChange={(e) => onInputChange(e)} /><br/>
        <label>Password</label><br/>
        <input type="password" value={password} placeholder="Enter Password"  name="password" onChange={(e) => onInputChange(e)} /><br/>    
         <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => window.open('/')}>Don't have an account? Register here.</button>
    </div>
)
  }
export default LoginScreen;