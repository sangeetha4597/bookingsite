import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
        <div className="navItems">
          <button className="navButton" >{  <Link  to="./login" className="navButton" >Login</Link>}</button>
          <button className="navButton">{  <Link  to="./register" className="navButton" >Sign up</Link>}</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar