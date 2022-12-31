import React, { useState,useEffect} from "react";

import './styles.css';
import './Dashboard1.css';

import Navbar from "./Navbar";
import axios from "axios";



function Home() {
  
  const [admins, setAdmins] = useState([]);
 
  useEffect(() => {
    loadAdmins();
  }, []);
 
  
  const loadAdmins = async () => {
   
    const result = await axios.get("http://localhost:8082/admins");
    setAdmins(result.data);
  };
 
  
    return (
     <>
     <Navbar />
      <h1><center>HOME</center></h1>
      
              <div className="templateContainer">    
              <div className="template_Container">  
              {       

                  <table>
                <tbody>
                  
                    {admins.map((admin) => 
                    (
                      <div className="template">
                      <tr>
                        <th scope="column" >
                        </th>
                        <img src={admin.imageurl} />
                        <h3> Center Name:{admin.name}</h3>
                        <h4>Location:{admin.address}</h4><br/>
                        </tr>   
                        </div>
                    ))}
                   
                    </tbody>
                    </table>

                    }
            
        </div>
        </div>
       
      
    
    
      
    </>
    )}
      

   
  export default Home;
