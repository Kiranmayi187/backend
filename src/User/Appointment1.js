import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import Navbar from "./Navbar";
export function Appointment1() {
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
  

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8082/user", user);
    navigate("/Mybooking");
  };
  


  return (
    <>
    <Navbar />
    <h1>Dashboard</h1> 
    <div className="box-container"> 
      <form>
       <label>  
         <h2>Bluestone Services</h2>
         ADDRESS:Plot no.67/A,Gachibowli,Telanagana.
          <br/>
          PHONE NO.:9878877341<br/>
          EMAIL ID: bluestoneservices@gmail.com<br/>
          TIMINGS:9:00am-4:00pm<br/>
          RATING: 4/5
        </label> 
      </form>
    </div>
    
  <div className="input-container2">
      <form onSubmit={(e) => onSubmit(e)} >
      <h2><center>Enter the details</center></h2>
      <label>Name</label><br/>
            <input type="text" autoComplete="off" placeholder="Enter name of the product"  name="name" value={name}
                onChange={(e) => onInputChange(e)} /><br/>
          <label>Model Number</label><br/>
            <input type="text" autoComplete="off"  placeholder="Enter Model No. of product"  name="modelno" value={modelno}
                onChange={(e) => onInputChange(e)} /><br/>
          <label>Date</label><br/>
            <input type="date" placeholder="Enter date of purchase"  name="date" value={date}
                onChange={(e) => onInputChange(e)} /><br/>
          <label >Contact number</label><br/>
            <input type="phone number" autoComplete="off"  placeholder="Enter Contact number" name="phonenumber" value={phonenumber}
                onChange={(e) => onInputChange(e)}/><br/>
          <label>Problem</label><br/>
            <input type="text" autoComplete="off" placeholder="Enter problem of product" name="problem" value={problem}
                onChange={(e) => onInputChange(e)} /><br/>
            
            
        <label>AVAILABLE SLOT:10:30am-11:30am</label><br/>
        <button type="submit">Book</button>
      </form>
    </div>
</>

  
  
  
  );
}
export default Appointment1;
