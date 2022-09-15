import './IceDamsView.css'
import iceDam from '../../images/ice-dam.jpeg'
import iceBuildUp from '../../images/building-ice-dam.jpeg'

const IceDamsView = () => {
  return (
    <div className="iceDam">
      <h1>Ice Dams View</h1>
      <p><img src={iceDam} alt='ice dam' align='right' height='225'></img>Ice Dams are common during a heavy snow year</p>
      <p>Ice dam back up can cause:</p>
      <ul>Building Ice Dam</ul>
      <ul>Wet Ceilings and Walls</ul>
      <ul>Rotten Wood</ul>
      <ul>Mold Buildup</ul>
      <ul>Structural Damage</ul>
      <ul><img src={iceBuildUp} alt='ice build up' align='right' height='85'></img>Loss of Insulation Effectiveness</ul>
      <p>We carefully remove snow and ice while protecting your roof using only plastic shovels, ice melt, and steaming systems.</p>
    </div>
  )
}

export default IceDamsView