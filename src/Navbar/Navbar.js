import {Link} from "react-router-dom"
import Header from "../Header/Header"
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <li className="navbar-brand"><Link to='/'>Home</Link></li>
        <li className="navbar-brand"><Link to='/about'>About</Link></li>
        <li className="navbar-brand"><Link to='/roofing'>Roofing</Link></li>
        <li className="navbar-brand"><Link to='/stucco'>Stucco</Link></li>
        <li className="navbar-brand"><Link to='/icedams'>Ice Dams</Link></li>
      </div>
    </div>
  )
}

export default Navbar;