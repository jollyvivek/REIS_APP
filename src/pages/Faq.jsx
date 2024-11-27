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
        <div className='row'>
            <div className='col-md-12 mt-3'>
                <Title title="Work Visa FAQs"/>
                <p className='w-75 m-auto'>What are the requirements for a work visa? Generally, a work visa requires an employment offer from 
                    a company in the destination country, along with necessary qualifications and experience. Requirements may vary by country.
                </p>
                <p className='w-75 m-auto mt-2'>How long can I stay on a work visa? The duration depends on the country and specific visa type.
                     Some work visas are renewable, while others have fixed terms.
                </p>
                <p className='w-75 m-auto mt-2'>Can Rhombus help with permanent residency applications? Yes, we offer guidance for those looking
                     to transition from a work visa to permanent residency, including assistance with eligibility and document requirements.
                </p>
                <p className='w-75 m-auto mt-2'>What should I do if my work visa is about to expire? We recommend contacting us at least three
                     months before your visa expires so we can help with the renewal or extension process.
                </p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 mt-3'>
                <Title title="Tourist Visa FAQs"/>
                <p className='w-75 m-auto'>What are the basic requirements for a tourist visa? Requirements typically include a passport, proof
                     of funds, travel itinerary, and sometimes a letter of invitation. We can provide a checklist based on the destination.
                </p>
                <p className='w-75 m-auto mt-2'>How long can I stay on a tourist visa? This depends on the destination country, with most 
                    tourist visas allowing stays of 30 to 90 days. We can confirm the duration based on your travel plans.
                </p>
                <p className='w-75 m-auto mt-2'>Can I extend my tourist visa while abroad? In some countries, tourist visas can be extended. We
                     can advise on the extension policies and processes for your destination.
                </p>
                <p className='w-75 m-auto mt-2'>What happens if my tourist visa application is denied? We can help review the reasons for 
                    denial, suggest any additional documentation needed, and advise on reapplication options.
                </p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 mt-3'>
                <Title title="Application & Processing FAQs"/>
                <p className='w-75 m-auto'>How much does Rhombus charge for visa assistance? Fees vary based on the type of visa and service
                     package you choose. We’ll provide a detailed breakdown during your initial consultation.
                </p>
                <p className='w-75 m-auto mt-2'>Does Rhombus offer support for visa applications outside my home country? Yes, we assist with
                     visa applications regardless of your current location. Contact us to learn more.
                </p>
                <p className='w-75 m-auto mt-2'>Can I track the progress of my visa application? Most consulates and embassies provide tracking
                     options. We’ll keep you informed of any updates we receive on your behalf.
                </p>
                <p className='w-75 m-auto mt-2'>What payment methods does Rhombus accept? We accept bank transfers, credit/debit cards, and 
                    online payment options. Please contact us for specific details.
                </p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 mt-3'>
                <Title title="Miscellaneous FAQs"/>
                <p className='w-75 m-auto'>What if I have a criminal record? Can I still apply for a visa? Having a criminal record may impact
                     your eligibility, depending on the visa type and destination. We can help assess your options and advise on possible 
                     solutions.
                </p>
                <p className='w-75 m-auto mt-2'>Can Rhombus assist with visas for family members? Yes, we offer support for family visas, 
                    including spouse, dependent, and parent visas, based on the destination country’s regulations.
                </p>
                <p className='w-75 m-auto mt-2'>Does Rhombus offer consultations for individuals not yet sure about visa applications?
                     Absolutely! Our initial consultation is designed to help you understand your options and make informed decisions.
                </p>
                <p className='w-75 m-auto mt-2 d-none'>These FAQs can be customized and expanded as needed. Let me know if there’s anything specific
                     you’d like to add!
                </p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Faq