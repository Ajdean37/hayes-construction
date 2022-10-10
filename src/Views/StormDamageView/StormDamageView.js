import './StormDamageView.css';
import roofDamage from '../../images/roof-damage.jpeg'


const StormDamageView = () => {
  return (
    <div className='storm-damage-view'>
      <div className='storm-damage-photo'>
        <img src={roofDamage} alt="roof damage" height='250'></img>
      </div>

      <div className='storm-damage'>
        <h1>Damaging Storms are a Reality.</h1>

        <p>Storm damage can create stress with both the inconvenience of extreme home repairs and having to deal with your insurance company to cover the cost. When your roof is damaged, there is a good chance that your homeowner's insurance will cover the repair expense.</p>

        <p>Wm Hayes Construction will meet with the adjuster to review the estimate and scope of work.</p>
      </div>
    </div>
  )
}

export default StormDamageView;