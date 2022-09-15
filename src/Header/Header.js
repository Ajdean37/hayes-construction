import './Header.css';
import stormDamage from '../images/storm-damage-season.jpeg'

const Header = () => {
  return (
    <div className="header">
      <img src={stormDamage} alt='storm damage' height='200' width='800'></img>
    </div>
  )
}

export default Header