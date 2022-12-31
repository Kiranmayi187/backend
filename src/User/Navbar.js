import { Link, useMatch,useNavigate, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();
      // HANDLE LOGOUT EVENT
    const logout = (e) => {
        e.preventDefault();
        console.log('Logout');

        // CLEAR DATA FROM STORAGE
        localStorage.clear();
        sessionStorage.clear();

        navigate("/");
    }
    window.addEventListener('popstate', () =>{
      
      navigate("/");
    });

  return (
   <nav className="nav">
      
  
      <label className="site-title">
        Online washing machine services</label>
      <ul>
        <CustomLink to="/Home">Home</CustomLink>
        <CustomLink to="/Dashboard">Dashboard</CustomLink>
        <CustomLink to="/MyBooking">MyBooking</CustomLink>
        <CustomLink to="/AdminRegisterScreen">Admin</CustomLink>
        <Link to="#" onClick={logout} >Logout</Link>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
   
  )
}

