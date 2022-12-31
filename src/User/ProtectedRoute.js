import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/Home" className="site-title">
        Online washing machine services
      </Link>
      <ul>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/MyBooking">MyBooking</CustomLink>
        <Link to={"/LoginScreen"}>Logout</Link>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} 
      {...props}>
        {children}
      </Link>
    </li>
  )
}

