import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

export function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();
  
  const [user, setUser] = useState({
    name:"",
    modelno:"",
    date:"",
    phonenumber:"",
    problem:"",
  })
  const { name,modelno,date,phonenumber,problem } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8082/user/${id}`, user);
    navigate("/Mybooking");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8082/user/${id}`);
    setUser(result.data);
  };



  return (
   <>
   <h2><center>Edit Details</center></h2>
  <div className="input-container">
    
      <form onSubmit={(e) => onSubmit(e)} >
      <h2><center>Enter Name</center></h2>
      <label>Name</label><br/>
            <input type="text"  placeholder="Enter name of the product"  name="name" value={name}
                onChange={(e) => onInputChange(e)} /><br/>
          <label>Model Number</label><br/>
            <input type="text"  placeholder="Enter Model No. of product"  name="modelno" value={modelno}
                onChange={(e) => onInputChange(e)} /><br/>
          <label>Date</label><br/>
            <input type="date" placeholder="Enter date of purchase"  name="date" value={date}
                onChange={(e) => onInputChange(e)} /><br/>
          <label >Contact number</label><br/>
            <input type="phone number"  placeholder="Enter Contact number" name="phonenumber" value={phonenumber}
                onChange={(e) => onInputChange(e)}/><br/>
          <label>Problem</label><br/>
            <input type="text"  placeholder="Enter problem of product" name="problem" value={problem}
                onChange={(e) => onInputChange(e)} /><br/>
            
            
        
        <button type="submit">Submit</button>
      </form>
    </div>
    </> 

  
  
  
  );
}
export default EditUser;