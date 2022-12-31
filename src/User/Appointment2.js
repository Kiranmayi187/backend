import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export function Appointment2() {
  let navigate = useNavigate();
  
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

    return(   
     
        <>
        <Navbar />
        <h1>Dashboard</h1> 
        <div className="boxs"> 
          <form>
           <label>  
             <h2>MK Services</h2>
             ADDRESS:13/45,Mylapore,Chennai,Tamil Nadu.
              <br/>
              PHONE NO.:9878877343<br/>
              EMAIL ID: MKservices@gmail.com<br/>
              TIMINGS:9:30am-3:30pm<br/>
              RATING: 3.5/5
            </label> 
          </form>
        </div>
        <div className="inputs">
      <form onSubmit={(e) => onSubmit(e)} >
      <h2><center>Enter the details</center></h2>
        <label>Name</label><br/>
            <input type="text" autoComplete="off"  placeholder="Enter name of the product"  name="name" value={name}
                onChange={(e) => onInputChange(e)} /><br/>
          <label>Model Number</label><br/>
            <input type="text" autoComplete="off"  placeholder="Enter Model No. of product"  name="modelno" value={modelno}
                onChange={(e) => onInputChange(e)}/><br/>
          <label>Date</label><br/>
            <input type="date" placeholder="Enter date of purchase"  name="date" value={date}
                onChange={(e) => onInputChange(e)} /><br/>
          <label >Contact number</label><br/>
            <input type="phone number" autoComplete="off" placeholder="Enter Contact number" name="phonenumber"value={phonenumber}
                onChange={(e) => onInputChange(e)}/><br/>
          <label>Problem</label><br/>
            <input type="text" autoComplete="off"  placeholder="Enter problem of product" name="problem" value={problem}
                onChange={(e) => onInputChange(e)}/><br/>
            
        <label>AVAILABLE SLOT:1:30pm-3:00pm</label><br/>
        <button type="submit">Book</button>
      </form>
    </div>
        </>    
    );
}
export default Appointment2;