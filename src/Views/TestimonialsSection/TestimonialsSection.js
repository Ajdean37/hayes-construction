import './TestimonialsSection.css';
import testimonials from '../../Data/testimonials'
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  return (

    <div className='testimonials-section'>
      <h1>Testimonials</h1>
      <div className='testimonials-preview'>
        {
          testimonials.map(item => (
            <div className='testimonial-card'>
              <Link to={`testimonials/${item.key}`}>
                <div className='card-header'>{item.person_name}</div>
                <div className='card-body'>{item.preview}</div>
                <div className='card-footer'>Click to continue reading</div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default TestimonialsSection