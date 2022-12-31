import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

export function EditAdmin() {
  let navigate = useNavigate();
  const { id } = useParams();
  
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
  useEffect(() => {
    loadAdmin();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8082/admin/${id}`, admin);
    navigate("/AdminScreen/CenterProfile");
  };
  const loadAdmin = async () => {
    const result = await axios.get(`http://localhost:8082/admin/${id}`);
    setAdmin(result.data);
  };



  return (
   <>
   <h2><center>Edit Details</center></h2>
   <div className="input-container1">
  
  <form onSubmit={(e) => onSubmit(e)} >
  <h2><center>Edit Center</center></h2>
  <label>Name</label><br/>
        <input type="text" autoComplete="off" placeholder="Enter name of the center"  name="name" value={name}
            onChange={(e) => onInputChange(e)} /><br/>
      
      <label >Address</label><br/> 
        <input type="address" autoComplete="off" placeholder="Enter Address" name="address" value={address}
            onChange={(e) => onInputChange(e)}/><br/>
      <label >Image</label><br/>
        <input type="url" src="" placeholder="Enter image url" name="imageurl" value={imageurl}
            onChange={(e) => onInputChange(e)}/><br/>      
      <label >Email</label><br/>     
        <input type="text" autoComplete="off" placeholder="Enter Mail Id"  name="email" value={email}
            onChange={(e) => onInputChange(e)} /><br/>            
      <label>Description</label><br/>
        <input type="description" autoComplete="off" placeholder="Description about service center" name="description" value={description}
            onChange={(e) => onInputChange(e)} /><br/>
        
        
    
    <button type="submit">Submit</button>
  </form>
</div>
</>
  );
}
export default EditAdmin;




