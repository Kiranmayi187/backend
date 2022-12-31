import React,{useState,useEffect} from "react";
import axios from "axios";
import Navigate from "./Navigate";
import { Link,useParams,useNavigate } from "react-router-dom";
export default function CenterProfile() {
  const [admins, setAdmins] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();
  
  useEffect(() => {
    loadAdmins();
  }, []);
 
  
  const loadAdmins = async () => {
   
    const result = await axios.get("http://localhost:8082/admins");
    setAdmins(result.data);
  };
  
  const deleteAdmin = async (id) => {
    await axios.delete(`http://localhost:8082/admin/${id}`);
    loadAdmins();
  };
  
 

  return (
    <>
    <Navigate />
    <div className="container3" >
      <div className="py-4">
        <table className="table border shadow" cellspacing="15">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Image URL</th>
              <th scope="col">Email</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{admin.name}</td>
                <td>{admin.address}</td>
                <td>{admin.imageurl}</td>
                <td>{admin.email}</td>
                <td>{admin.description}</td>
                <td>
                  
                  <Link className= "button1" to={`/editadmin/${admin.id}`}>EDIT</Link> <br/>
                  <button className= "button2" onClick={() => deleteAdmin(admin.id)}>DELETE</button>
                  
                  
                   
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   
    
 
</>

  
  
  
  );
}

