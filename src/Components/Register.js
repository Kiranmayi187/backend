import React, { useState } from "react";


export function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');
    const [role,setRole]=useState('');
    
    
   
    

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post(`http:localhost:8080/api/auth/signin`, user)
        alert("User Registation Successfully");
      
    }

  return (
    <div className="auth-form-container">
    <h2>Register</h2>
<form className="register-form" onSubmit={(e) => onSubmit(e)}>

   <label htmlFor="name">Full name</label>
    <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="Enter User name" id="username" name="username"  />
    <label htmlFor="email">email</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Email" id="email" name="email" />
    <label htmlFor="password">Password</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="Password" id="Password" name="Password" />
    <label htmlFor="role">role</label>
    <input value={role} onChange={(e) => setRole(e.target.value)} type="role" placeholder="role" id="role" name="role" />
    <button type="submit">Submit</button>
</form>
<button className="link-btn" onClick={() => window.open('login')}>Already have an account? Login here.</button>
</div>
    
  );
};

export default Register;