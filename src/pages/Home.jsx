import React from 'react'
import WelcomeImg from '../assets/welcomeImg.webp'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='container-fluid'>
      <div className='row mt-3'>
            <div className='col-md-6 home d-flex flex-column justify-content-center '>
                <h3>Welcome to Rhombus Education and Immigration Services</h3>
                <p>  At Rhombus Education and Immigration Services, we specialize in helping students navigate
                     the complexities of studying abroad. Whether you're applying for a student visa or seeking 
                     guidance on the right university, we provide expert advice and comprehensive support every 
                     step of the way. With certifications from the British Council, our team is dedicated to
                      delivering exceptional service and personalized solutions for students and education agents
                     worldwide.
                </p>
                <div className='home-btn-con d-flex gap-3'>
                    <button className='btn  btn-dark home-btn' onClick={()=>navigate('/contact')}>Study Visa</button>
                    <button className='btn btn-dark home-btn' onClick={()=>navigate('/contact')}>Tourist Visa</button>
                </div>
            </div>
            <div className='col-md-6 mt-3'>
                <img className='img-fluid rounded-3' src={WelcomeImg} alt="" />
            </div>
      </div>
    </div>
  )
}

export default Home