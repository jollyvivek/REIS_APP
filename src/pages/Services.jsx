import React from 'react'
import ServiceImg from '../assets/Service_pic.jpg'
import ConsultImg from '../assets/consulting_image.jpeg'
import Title from '../components/Title'

const Services = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-6 mt-3'>
                <Title title="OUR SERVICES"/>
                <p>At Rhombus Education and Immigration Services, we offer a comprehensive range of services designed to help students
                    navigate the complexities of studying abroad. Whether you are just starting your journey or need assistance with the
                     final steps, we are here to provide expert guidance every step of the way.
                </p>
                <p><span className='text-info'>Student Visa Assistance :</span>  Expert guidance on visa applications for studying in the UK,
                 Canada, Australia, and more.
                </p>
                <p><span className='text-info'> University Placement :</span>  Helping students choose the right institution based on their goals 
                    and academic profile.
                </p>
                <p><span className='text-info'>Application & Document Review :</span>  Ensuring your application is complete, accurate, and aligned
                    with university requirements.
                 </p>
                 <p><span className='text-info'> Consultancy for Education Agents :</span>  Partnering with education agents to provide end-to-end 
                    services for their student clients.
                </p>
            </div>
            <div className='col-md-6 mt-3'>
                <img className='img-fluid rounded-3' src={ServiceImg} alt="SeriverImg" />
            </div>
        </div>
        {/* Our Services In details */}
        <div className='row flex-column-reverse flex-md-row mt-2'>
                <Title title="OUR SERVICES IN DETAILS"/>
                <div className='col-md-6 mt-3'>
                    <img className='img-fluid rounded-3' src={ConsultImg} alt="ConsultingIMg" />
                </div>
                <div className='col-md-6 mt-3'>
                    <Title subTitle="Education Consulting"/>
                    <p>Choosing the right university and course is one of the most important decisions you'll make in your academic journey.
                         Our experienced education consultants work closely with you to understand your academic goals, career aspirations,
                         and personal preferences, helping you select the best institution that aligns with your needs.
                    </p>
                    <p> <span className='text-info'>University Selection :</span>  We assist you in choosing the right university based on
                         your academic interests, budget,location preference, and career goals.
                    </p>
                    <p><span className='text-info'>Program Matching :</span> Our team helps you find the most suitable programs and courses
                         that match your qualifications and future aspirations.
                     </p>
                     <p><span className='text-info'>Application Guidance :</span>  We provide step-by-step assistance with the application
                         process, ensuring all necessary documents are in order and deadlines are met.
                    </p>
                </div>

        </div>
        <div className='row'>
            <div className='col-md-6 mt-3'>
                <Title subTitle="Visa Assistance"/>
                <p>Securing a student visa is a crucial part of studying abroad, and we offer expert visa consultancy to ensure your 
                    application is successful. Our team stays up-to-date with the latest immigration policies and procedures, making
                     the visa process as smooth and efficient as possible.
                </p>
                <p><span className='text-info'>Student Visa Consultation:</span>  We provide clear guidance on visa requirements for various countries, including 
                    the Australia, UK, Canada  and more.
                </p>
                <p><span className='text-info'>Visa Application Support:</span>  Our team assists you in completing your visa application, gathering necessary documents,
                     and preparing for interviews
                </p>
                <p> <span className='text-info'>  Visa Approval Follow-up :</span> We monitor the progress of your visa application and provide assistance in case any
                     issues arise during the process.
                </p>
            </div>
            <div className='col-md-6 mt-3'>

            </div>
        </div>
        
        
        
        
        
        
    </div>
  )
}

export default Services