import './ActionCard.css';

const ActionCard = ({title}) => {
  return (
    <div className="contact">
      <h2>{title} </h2>
      <a href="tel:651-433-3342">(651) 433-3342</a>
    </div>
  )
}

export default ActionCard