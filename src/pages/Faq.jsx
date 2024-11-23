import React from 'react'
import FaqBanner from '../assets/FaqImg.jpeg'
import Title from '../components/Title'

const Faq = () => {
  return (
    <div className='container-fluid'>
        <div className='row mt-3'>
            <div className='col-md-6 d-flex align-items-center mb-3'>
            <h3 className='text-info'>Here’s a list of possible FAQs for Rhombus, focusing on visa processes and related services. You can adjust them based 
            on the specific countries and visa types you handle:</h3>
            </div>
            <div className='col-md-6 mb-3 text-center'>
                <img className='img-fluid rounded-3'  src={FaqBanner} alt="" />
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 mt-3'>
                <Title title="General FAQs"/>
                <p className='w-75 m-auto'>What services does Rhombus offer? Rhombus specializes in student visas, work visas, tourist visas, and immigration
                     assistance, helping individuals through each step of their application process.
                </p>
                <p className='w-75 m-auto mt-2'>How do I start my visa application process with Rhombus? Simply contact us through our website, email, or phone, and one of
                     our visa consultants will guide you through the next steps, from gathering documents to submitting your application.
                </p>
                <p className='w-75 m-auto mt-2'>Can Rhombus help me if I’m already in the application process? Yes, we can provide support at any stage of your application,
                     including document verification, interview preparation, and additional guidance.
                </p>
                <p className='w-75 m-auto mt-2'>What countries does Rhombus handle for student visas? We primarily focus on student visas for [insert countries here, e.g.,
                     the US, Canada, Australia, and the UK], but feel free to ask if you have a different destination in mind.
                </p>
                <p className='w-75 m-auto mt-2'>How long does the visa application process take? The processing time varies depending on the visa type and destination
                 country. Generally, student visas may take 3-6 weeks, while other visas can vary from a few weeks to several months.
                 </p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 mt-3'>
                <Title title="Student Visa FAQs"/>
                <p className='w-75 m-auto'>What documents are needed for a student visa? Commonly required documents include a passport,
                     acceptance letter from the educational institution, proof of funds, and academic transcripts. We’ll provide you with 
                     a detailed list based on your country of study.
                </p>
                <p className='w-75 m-auto mt-2'>Do I need to pass an English language test for a student visa? Most countries require English
                     proficiency tests like IELTS or TOEFL. We can help you understand the specific requirements of each country.
                </p>
                <p className='w-75 m-auto mt-2'>Does Rhombus assist with visa interviews? Yes, we offer interview preparation services,
                     helping you understand what to expect and practicing questions that may be asked by visa officers.
                </p>
                <p className='w-75 m-auto mt-2'>Can I work while studying on a student visa? Many countries allow part-time work for students.
                     We can provide information on the work policies for your destination country.
                </p>
                <p className='w-75 m-auto mt-2'>What if my student visa application is denied? We can help you understand the reasons for denial,
                     explore options for reapplication, and provide support in strengthening your application.
                 </p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Faq