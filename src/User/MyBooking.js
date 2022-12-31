import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useParams} from "react-router-dom";
import Navbar from "./Navbar";


export default function Mybooking() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();


useEffect(() => {
  loadUsers();
}, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/users");
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8082/user/${id}`);
    loadUsers();
  };
  

  return (
    <>
    <Navbar />
    <div className="container3">
      <div className="py-4">
        <table className="table border shadow" cellspacing="15">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Model No</th>
              <th scope="col">Date</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Problem</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.modelno}</td>
                <td>{user.date}</td>
                <td>{user.phonenumber}</td>
                <td>{user.problem}</td>
                <td>
                  
                  <Link className= "button1" to={`/edituser/${user.id}`}>EDIT</Link> <br/>
                  <button className= "button2" onClick={() => deleteUser(user.id)}>DELETE</button>
                  
                   
                  
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