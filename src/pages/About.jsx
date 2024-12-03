import React from 'react'
import profileImg from '../assets/ProfileImage.jpeg'
import Title from '../components/Title'

const About = () => {
  return (
    <div className='container-fluid mt-3'>
        <div className='row'>
            <div className='col-md-6 mt-3 d-flex flex-column justify-content-center align-items-center'>
                <h3>Hi, I am <span className='text-info'>Heena Gupta</span> Founder and CEO of Rhombus Eduction and Immigration Service.</h3>
                <p className='mb-3'>Over 15 years of experience in the education and immigration field. Trusted certifications from the British Council and ICEF.</p>
                <p className='mb-3'>Welcome to Rhombus Education and Immigration Services, where we guide you toward achieving your academic and
                    professional dreams abroad. Our mission is to empower individuals with personalized
                    education and immigration solutions.
                </p>
                <p className='mb-3'> At Rhombus, we believe in a holistic approach to education and career planning. Whether you're aspiring to study
                    at a prestigious university or seeking immigration opportunities, our expert team is dedicated to provide clear
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
            <div className='col-md-6 mt-3  text-center'>
                <img className='img-fluid rounded-4' style={{height:"85%"}} src={profileImg} alt="image" />
            </div>
           
        </div>
         {/* history */}
         <div className='row mt-3'>
                <div className='col-md-12 mt-3'>
                    <Title title=" OUR HISTORY" />
                    <p className='history-desc'>Founded by <span className='text-info fw-bold'>Heena Gupta</span>, a professional with over 15 years of experience
                        in international education and student visa consultancy, Rhombus Education and Immigration Services was born out of 
                        a desire to make the study-abroad process easier and more accessible for students worldwide. Over the years, we have
                         successfully assisted countless students in securing placements in top universities across the Australia, UK, Canada,
                         Europe and many other countries across the globe, while ensuring they receive the proper guidance and support throughout their visa application process.
                    </p>
                    <p className='history-desc'>Our team has grown with the times, constantly updating our practices to stay ahead of evolving immigration regulations 
                        and educational trends. With certification from ICEF, we are proud to be a trusted partner for both
                        students and education agents.
                    </p>
                </div>
            </div>
            {/* mission */}
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <Title title="OUR MISSON" />
                    <p className='history-desc'>Our mission is simple: to guide students toward a brighter future by making studying abroad an 
                        achievable and exciting opportunity. We understand the significance of studying internationally and the impact it has 
                        on personal and professional growth. With a focus on personalized care and expert consultancy, we are dedicated to 
                        ensuring that every student has a smooth, efficient, and successful journey—from choosing the right university to 
                        obtaining a student visa.
                    </p>
                    <p className='history-desc'>We also offer comprehensive support to education agents, helping them manage their student
                         clients' applications and visa processes with ease, precision, and trust.
                    </p>
                </div>
            </div>
            {/* out team */}
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <Title title="TEAM" />
                    <p className='history-desc'>Our team consists of experienced education consultants, visa specialists, and support staff,
                         all dedicated to providing exceptional service. Each member of our team shares a passion for education and an 
                         unwavering commitment to client success. We work collaboratively to ensure that every student receives the best
                          possible guidance tailored to their individual needs, goals, and circumstances.
                    </p>
                    <p className='history-desc'>At Rhombus, we pride ourselves on being more than just a service provider—we are your partner
                         in the journey toward achieving your educational dreams.
                    </p>
                </div>
            </div>
            {/* Why choose Us */}
            <div className='row '>
                <div className='col-md-12 mt-3'>
                    <Title title="WHY CHOOSE US ?" subTitle=""/>
                    <p className='history-desc'>Over 15 years of expertise in the education and immigration field.
                        Personalized, one-on-one consultation to cater to each student's unique needs.
                        Trusted partner of the British Council.
                        Seamless support throughout the entire process, from university application to student visa approval.
                    </p>
                    <p className='history-desc'>Let us help you open doors to global education opportunities. Contact us today to
                         learn how we can assist you on your path to studying abroad!
                    </p>
                </div>
            </div>
    </div>
  )
}

export default About