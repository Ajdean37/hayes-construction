import './Navbar.css'
import logo from '../images/logo.jpg'

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/"><img src={logo} alt="Wm Hayes Construction LLC" width="200" height='60'></img></a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/storm-damage">Storm Damage</a>
          </li>
          <li>
            <a href="/roofing">Roofing</a>
          </li>
          <li>
            <a href="/stucco">Stucco</a>
          </li>
          <li>
            <a href="/ice-dams">Ice Dams</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;