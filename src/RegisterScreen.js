import React, { useState } from "react";


export function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');
    
    
    
  
    

    const onSubmit = async (e) =>{
        e.preventDefault();
        alert("Registration Completed Successfully");
        setUsername('');
        setEmail('');
        setPass('');
       
        
    }

  return (
    <div className="auth-form-container">
    <h2>Register</h2>
<form className="register-form" onSubmit={(e) => onSubmit(e)}>

   <label htmlFor="name">Full name</label>
    <input value={username} autoComplete="off" onChange={(e) => setUsername(e.target.value)}type="username" placeholder="Enter User name" id="username" name="username"  />
    <label htmlFor="email">email</label>
    <input value={email} autoComplete="off" onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Email" id="email" name="email" />
    <label htmlFor="password">Password</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="Enter Password" id="Password" name="Password" />
   
    <button type="submit">Submit</button>
</form>
<button className="link-btn" onClick={() => window.open('LoginScreen')}>Registered? Login here.</button>
</div>
    
  );
};

export default RegisterScreen;