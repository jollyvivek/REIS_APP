import React from 'react'
import profileImg from '../assets/AboutImage.jpeg'

const About = () => {
  return (
    <div className='container-fluid mt-3'>
        <div className='row'>
            <div className='col-md-6 mt-3'>
                <h3>Hi, I am <span className='text-info'>Henna Gupta</span> Founder and CEO of Rhombus Eduction and Immigration Service.</h3>
                <p className='mb-3'>Over 13 years of experience in the education and immigration field. Trusted certifications from the British Council and ICEF.</p>
                <p className='mb-3'>Welcome to Rhombus Education and Immigration Services, where we guide you toward achieving your academic and
                    professional dreams abroad.Our mission is to empower individuals with personalized
                    education and immigration solutions.
                </p>
                <p className='mb-3'> At Rhombus, we believe in a holistic approach to education and career planning. Whether you're aspiring to study
                    at a prestigious university or seeking immigration opportunities, our expert team is dedicated to providing clear
                    guidance and unwavering support throughout your journey.
                </p>
                <p className='mb-3'>With a focus on transparency, trust, and tailored services, we have helped countless students and professionals 
                   navigate complex processes with ease. Join us as we open doors to opportunities and help you build a brighter future.
                </p>
                <p className='mb-3'>A team of dedicated professionals committed to your success. Comprehensive, end-to-end support for students and education
                     agents alike.
                </p>
                <p>Let us help you take the next step in your academic and professional journey. Contact us today to get started new journey with us .</p>
            </div>
            <div className='col-md-6 mt-3 text-center'>
                <img className='img-fluid rounded-4' src={profileImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About