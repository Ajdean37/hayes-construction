import './HomeView.css'
import hailStones from '../../images/hail-stones.jpeg'
import ActionCard from '../../ActionCard/ActionCard'
import home1 from '../../images/home-damage-after.jpeg'
import home2 from '../../images/home-siding-after.jpeg'
import home3 from '../../images/home-roofing.jpeg'
import windows from '../../images/house-roofing.jpeg'
import stucco from '../../images/home-siding-after.jpeg'
import icedam from '../../images/ice-dam.jpeg'
import waterDamage from '../../images/water-damage.jpeg'
import houseRoofing from '../../images/roofing-house.jpeg'
import { Link } from 'react-router-dom'
import TestimonialSection from '../TestimonialsSection/TestimonialsSection'

const HomeView = () => {
  return (

    <div className='home-view'>
      <div className='about-us-home'>
        <h1>About Us</h1>
        <p>We take our construction projects seriously. Wm Hayes Construction LLC was established in 1971. Our staff is highly qualified and dedicated. We work hard to make sure that our customers get exactly the kind of service they need. </p>
      </div>

      <div className='services-home'>
        <div>
          <h1>Services</h1>
        </div>
        <ul>
          <li>
          <Link to='/storm-damage'>
            <div className='storm-damage-photo'>
              <img src={hailStones} alt="roof damage" height='150' width='150'></img>
            </div>
            <div>Storm Damage</div>
          </Link>
          </li>
          <li>
          <Link to='/roofing'>
            <div className='house-roofing-photo'>
              <img src={houseRoofing} alt="house roof" height='150' width='150'></img>
            </div>
            <div>Roofing</div>
          </Link>  
          </li>
          <li>
          <Link to='/stucco'>
            <div className='stucco-photo'>
              <img src={stucco} alt="stucco" height='150' width='150'></img>
            </div>
            <div>Stucco</div>
          </Link>
          </li>
          <li>
          <Link to='/ice-dams'>
            <div className='icedam-photo'>
              <img src={icedam} alt="ice dam" height='150' width='150'></img>
            </div>
            <div>Ice Dams</div>
          </Link>
          </li>
          {/* <li>
            <div className='siding-photo'>
              <img src={home1} alt="siding" height='150' width='150'></img>
            </div>
            <div>
              <a href='/siding'>Siding</a>
            </div>
          </li>
          <li>
            <div className='windows-photo'>
              <img src={windows} alt="windows" height='150' width='150'></img>
            </div>
            <div>
              <a href='/windows'>Windows</a>
            </div>
          </li>
          <li>
            <div className='water-damage-photo'>
              <img src={waterDamage} alt="water damage" height='150' width='150'></img>
            </div>
            <div>
              <a href='/waterintrusion'>Water Intrusion</a>
            </div>
          </li> */}
        </ul>
      </div>

      <div className='action-card'>
        <ActionCard title='Give us a call!' />
      </div>
      
      <div className='projects-home'>
        <div>
          <h1>Projects</h1>
        </div>
        <ul>
          <li>
            <Link to='/project1'>
              <div>
                <img src={home1} alt='home project 1' height='200' width='225'></img>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/project2'>
              <div>
                <img src={home2} alt='home project 2' height='200' width='225'></img>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/project3'>
              <div>
                <img src={home3} alt='home project 3' height='200' width='225'></img>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className='testimonials-home'>
          <TestimonialSection />
      </div>

      <div className='action-card'>
        <ActionCard title='Call us today!'/>
      </div>

      <div className='materials'>
        <h1>List product brands or partners here</h1>
      </div>

    </div>
  )
}

export default HomeView