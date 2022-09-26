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

const HomeView = () => {
  return (

    <div className='home-view'>
      <div className='about-us-home'>
        <h1>About Us</h1>
        <p>We take our construction projects seriously. Wm Hayes Construction LLC was established in 1971. Our staff is highly qualified and dedicated. We work hard to make sure that our customers get exactly the kind of roof they need. </p>
      </div>

      <div className='services-home'>
        <div>
          <h1>Our Services</h1>
        </div>
        <ul>
          <li>
            <div className='storm-damage-photo'>
              <img src={hailStones} alt="roof damage" height='150' width='150'></img>
            </div>
            <div>
              <a href='/stormdamage'>Storm Damage</a>
            </div>
          </li>
          <li>
            <div className='house-roofing-photo'>
              <img src={houseRoofing} alt="house roof" height='150' width='150'></img>
            </div>
            <div>
              <a href='/roofing'>Roofing</a>
            </div>
          </li>
          <li>
            <div className='stucco-photo'>
              <img src={stucco} alt="stucco" height='150' width='150'></img>
            </div>
            <div>
              <a href='stucco'>Stucco</a>
            </div>
          </li>
          <li>
            <div className='icedam-photo'>
              <img src={icedam} alt="ice dam" height='150' width='150'></img>
            </div>
            <div>
              <a href='/icedams'>Ice Dams</a>
            </div>
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
        <ActionCard />
      </div>
      
      <div className='projects-home'>
        <div>
          <h1>Our Projects</h1>
        </div>
        <div>
          <img src={home1} alt='home project 1' height='200' width='225'></img>
          <img src={home2} alt='home project 2' height='200' width='225'></img>
          <img src={home3} alt='home project 3' height='200' width='225'></img>
        </div>
      </div>

      <div className='testimonials-home'>
        <div>
          <h1>Testimonials</h1>
        </div>
        <div>
          <p>I first met Bill Hayes when I hired Wm Hayes Construction in 1985 to replace all the windows in my house.  He did such a fine job that the following year I again hired him to redo the outside of the house.  That job consisted of replacing the siding with steel siding, insulation, soffits, and fascia.   Later on he replaced my small deck with a 12 x 18 deck.  He told me that the base of the deck would support a room.

          Then I had the urge to change the inside of my home.  Now it was the bathroom's turn.  This room was stripped to the studs and remodeled.  The entry door was moved and new fixtures were installed.  At the same time, the two front bedrooms were made into a large master bedroom. This made the woodwork look old.  So, all the trim was replaced with oak, and the doors with six-panel solid oak throughout the house.

          In July of 2000 there was a huge hailstorm and I was left with a roof in terrible condiiton.  I called my insurance company so I could get my house repaired.  The insurance company was only willing to pay for a partial repair of the roof.  I called Bill again and he came over to look at the hail damage.  Bill told me not to worry; he took my insurance papers and contacted my insurance company.  About 4 weeks later I received a settlement from the insurance company for the entire replacement cost of a new roof.  Bill went to bat for me.

          As long as he was going to put on a new roof, I asked him to build me an addition at the same time. I remembered that the deck would support a room, so we decided on an 18x22 space with a vaulted ceiling and the good stuff, like a fireplace and lots of windows. I fondly call it my "west wing".

          Since I lost my deck to the construction of the addition, the following year he again was called on to build another deck, this time of material that would never need staining or upkeep. Bill knows what he is doing, and I have complete confidence in his knowledge and workmanship.  He pays close attention to the details that make his finished product one that I am proud to show my family and friends. 

          Thanks again Bill, for rebuilding my house!!

          Sharon

          White Bear Lake, MN</p>

          <p>Dear Sir:

          I recently had a roofing tear-off and re-roof on my 100+ year-old home in Mahtomedi, Minnesota. The contractor was Wm Hayes Construction.

          Mr. Hayes' attention to detail, code compliance, advice and customer service are an example for other contractors and clearly represent the intent of the Commerce's licensing requirements. Having been in Zoning and Inspection Service for over 20 years, I recognize that complaints are easy to come by and compliments few and far between.

          Lloyd

          Mahomedi, MN</p>
        </div>
      </div>

      <div className='action-card'>
        <ActionCard />
      </div>

      <div className='materials'>
        <h1>List product brands or partners here</h1>
      </div>

    </div>
  )
}

export default HomeView