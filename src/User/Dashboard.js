import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Dashboard(){
    
    return(
        <>
        <Navbar />
        <h1><center>AVAILABLE SERVICES</center></h1>
        <h3>Bluestone Services</h3>
        <Link className= "button1" to={`/Appointment1`}>Appointment</Link> <br/>
        <h3>MK Services</h3>
        <Link className= "button1" to={`/Appointment2`}>Appointment</Link> <br/>
        <h3>Lapping Services</h3>
        <Link className= "button1" to={`/Appointment3`}>Appointment</Link> <br/>
        </>
        
    )
    
}
export default Dashboard;