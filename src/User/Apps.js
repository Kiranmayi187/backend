import Navbar from "./Navbar"
import Home from "./Home"
import Dashboard from "./Dashboard"
import Appointment1 from "./Appointment1"
import Appointment2 from "./Appointment2"
import Appointment3 from "./Appointment3"
import MyBooking from "./MyBooking"
import  EditUser  from "./EditUser"
import {  Routes, Route } from "react-router-dom"

function App(){
    return(
      <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Appointment1" element={<Appointment1 />} />
          <Route path="/Appointment2" element={<Appointment2 />} />
          <Route path="/Appointment3" element={<Appointment3 />} />
          <Route path="/MyBooking" element={<MyBooking />} />
          <Route path="/EditUser/:id" element={<EditUser />}/>
        </Routes>
      </div>
        </>
    )
}
export default App