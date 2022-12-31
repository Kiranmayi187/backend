
import "./User/styles.css"
import "./style.css"


import Home from "./User/Home"
import Appointment2 from "./User/Appointment2"
import MyBooking from "./User/MyBooking"
import  EditUser  from "./User/EditUser"
import Dashboard from "./User/Dashboard"
import Appointment3 from "./User/Appointment3"
import Navbar from "./User/Navbar"
import Appointment1 from "./User/Appointment1"
import LoginScreen from "./LoginScreen"
import RegisterScreen from "./RegisterScreen"
import { Route,  Routes } from "react-router-dom"
import Navigate from "./Admin/Navigate"
import AddCenter from "./Admin/AddCenter"
import CenterProfile from "./Admin/CenterProfile"
import AdminScreen from "./Admin/AdminScreen"
import EditAdmin from "./Admin/EditAdmin"
import AdminRegisterScreen from "./Admin/AdminRegisterScreen"

  function App () {
    
  
  
  
    return(
      <>
      <div className="container"  >
      <Routes>
      <Route path="/" element={<RegisterScreen />} />
      <Route path="/LoginScreen" element={<LoginScreen />} />
      <Route exact path="/Navbar" element={ <Navbar />} />
      <Route  path="/Home" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Appointment1" element={<Appointment1 />} />
      <Route path="/Appointment2" element={<Appointment2 />} />  
      <Route path="/Appointment3" element={<Appointment3 />} />     
          <Route path="/MyBooking" element={<MyBooking />} />
          <Route path="/EditUser/:id" element={<EditUser />}/>  
          <Route path="/AdminRegisterScreen" element={<AdminRegisterScreen />} />
          <Route path="/AdminScreen" element={<AdminScreen />} />
          <Route path="/Navigate" element={<Navigate />} />
          <Route path="/AdminScreen/AddCenter" element={<AddCenter />} />
          <Route path="/AdminScreen/CenterProfile" element={<CenterProfile />} /> 
          <Route path="/EditAdmin/:id" element={<EditAdmin />}/> 
        </Routes>       
      </div>
      </>   
    )
}
export default App