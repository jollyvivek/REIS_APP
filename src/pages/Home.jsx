import React from 'react'
import WelcomeImg from '../assets/welcomeImg.webp'
import { useNavigate } from 'react-router-dom'
import AustraliaFlag from '../assets/australia.png'
import UKFlag from '../assets/united-kingdom.png'
import NewzealandFlag from '../assets/new-zealand.png'
import CanadaFlag from '../assets/canada.png'
import USAFlag from '../assets/USA-Flag.png'
import GermanyFlag from '../assets/germany.png'

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
                <div className='row'>
                  <div className='col-md-2'><img src={AustraliaFlag} className='img-fluid' alt="AustraliaFlag" /></div>
                  <div className='col-md-2'><img src={UKFlag} className='img-fluid' alt="UKFlag" /></div>
                  <div className='col-md-2'><img src={NewzealandFlag} className='img-fluid' alt="NewzealandFlag" /></div>
                  <div className='col-md-2'><img src={CanadaFlag} className='img-fluid' alt="CanadaFlag" /></div>
                  <div className='col-md-2'><img src={USAFlag} className='img-fluid' alt="USAFlag" /></div>
                  <div className='col-md-2'><img src={GermanyFlag} className='img-fluid' alt="GermanyFlag" /></div>
                </div>
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