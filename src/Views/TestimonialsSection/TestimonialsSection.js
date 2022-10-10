import './TestimonialsSection.css';
import testimonials from '../../Data/testimonials'
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  console.log(testimonials);
  return (

    <div className='testimonials-section'>
      <h1>Testimonials</h1>
      <div>
        {
          testimonials.map(item => (
            <div className='testimonials-preview'>
              <Link to={`testimonials/${item.key}`}>
                <div>{item.preview}</div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default TestimonialsSection