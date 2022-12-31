import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link,useParams} from "react-router-dom";
import Navigate from "./Navigate";

export function AddCenter() {
  let navigate = useNavigate();
  
  
  const [admin, setAdmin] = useState({
    name:"",
    address:"",
    imageurl:"",
    email:"",
    description:"",
  })
  const { name,address,imageurl,email,description } = admin;
  const onInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8082/admin",admin);
    navigate("/AdminScreen/CenterProfile");
  };
  
  
  return (
    <>
    <Navigate />
    <h1><center>Add Center</center></h1> 
    <div className="templatecont1">
    <div className="template_cont">
      {
       
              <div className="template1" >
                    <img src={admin.imageurl} alt="Image Appear Here"  />
                    <h3>{admin.name}</h3>
                    <p className="location">{admin.address}</p>
                  </div>
          
      }
        



    </div>
    
  <div className="input-container">
      <form onSubmit={(e) => onSubmit(e)} >
      <h2><center>Enter the details</center></h2>
      <label>Name</label><br/>
            <input type="text" autoComplete="off" placeholder="Enter name of the center"  name="name" value={name}
                onChange={(e) => onInputChange(e)} /><br/>
          <label >Location</label><br/> 
            <input type="address" autoComplete="off" placeholder="Enter Location" name="address" value={address}
                onChange={(e) => onInputChange(e)}/><br/>
          <label >Image URL</label><br/>
            <input type="url" src="" placeholder="Enter image url" name="imageurl" value={imageurl}
                onChange={(e) => onInputChange(e)}/><br/>      
          <label >Email</label><br/>     
            <input type="text" autoComplete="off" placeholder="Enter Mail Id"  name="email" value={email}
                onChange={(e) => onInputChange(e)} /><br/>            
          <label>Description</label><br/>
            <input type="description" autoComplete="off" placeholder="Description about service center" name="description" value={description}
                onChange={(e) => onInputChange(e)} /><br/>
        <button type="submit">Add</button>
      </form>
    </div>
    </div>
</>

  
  
  
  );
}
export default AddCenter;
