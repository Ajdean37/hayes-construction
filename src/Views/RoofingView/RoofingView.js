import roofing from '../../images/home-roofing.jpeg'
import './RoofingView.css'

const RoofingView = () => {
  return (
    <div className="roofing">
      <h1>Roofing</h1>
      <p><img src={roofing} alt="home roofing" align="right" height='250'></img>Wm Hayes Construction is a professional roofing contractor.  Our team of experienced Home Roofing Minnesotainstallers blend old-time quality workmanship application with the technology of improved material and application methods.<br />
      <br />
      Let our experienced team work for you to install the best possible roof on your home.<br />
      <br />
      Hayes and crew will install a roof for you as if we were working on our own home.<br />
      <br />
      40 Years Roofing and Remodeling Experience<br />
      <br />
      We are a company that truly cares for our customers.</p>
    </div>
  )
}

export default RoofingView