import React from 'react'
import { useParams } from 'react-router-dom'
import testimonials from '../../Data/testimonials'
import './TestimonialView.css'

const TestimonialView = () => {
  const params = useParams()
  const results = testimonials.filter(item => item.key === params.key)
  const testimonial = results[0];
  return (
    <>
      <h1>{testimonial.person_name}</h1>
      <div className='format-paragraph'>{testimonial.testimonial}</div>
    </>
  )
}

export default TestimonialView