import { Link,useNavigate, useMatch, useResolvedPath } from "react-router-dom"

export default function Navigate() {
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
    <nav className="Navigate">
      <label className="site-titles">
        Online washing machine services</label>
     
      <ul>
        <CustomLink to="/AdminScreen/AddCenter">Add Center</CustomLink>
        <CustomLink to="/AdminScreen/CenterProfile">Center Profile</CustomLink>
        <Link to={"#"} onClick={logout}>Logout</Link>
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