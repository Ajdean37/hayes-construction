import './HomeView.css'
import roofDamage from '../../images/roof-damage.jpeg'

const HomeView = () => {
  return (

    <div className='roof-damage'>
      <p><img src={roofDamage} alt="roof damage" align='right' height='250'></img>
      <h1 className='stormTitle'>Damaging Storms are a Reality.</h1>
      <br />
      Storm damage can create stress with both the inconvenience of extreme home repairs and having to deal with your insurance company to cover the cost. When your roof is damaged, there is a good chance that your homeowner's insurance will cover the repair expense.<br />
      <br />
      Wm Hayes Construction will meet with the adjuster to review the estimate and scope of work.</p>
    </div>
  )
}

export default HomeView