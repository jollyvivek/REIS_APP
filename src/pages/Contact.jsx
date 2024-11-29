import React, { useState } from 'react'
import Title from '../components/Title'
import ContactUsBanner from '../assets/contactUsImg.jpg'
import { IoMailOpen } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8012c811-6460-427f-a978-5f025ee6d254");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12 contact-banner text-center'>
                <img className='img-fluid rounded-3' src={ContactUsBanner} alt="" />
            </div>
        </div>
        <Title title="GET IN TOUCH" subTitle=""/>
        <div className='row'>
            <div className='col-md-6'>
                <p className='d-flex gap-2  align-items-center fs-4 m-0'>
                    <span>Send us a message</span><span className='mail-icon fs-2'><IoMailOpen /></span>
                </p>
                <p className='p-0 m-0'>We’re here to help! Have questions about education or immigration services? Fill out the
                    form with your details and queries, and our team will get back to you promptly. Simply 
                    enter your name, email, and message, then hit "Submit." Whether you’re seeking guidance on study
                     programs, visa applications, or anything else, Rhombus Education and Immigration Services is ready 
                     to assist. Your journey starts with a simple step—reach out to us today!
               </p>
               <p className='m-0 p-0 text-info '>Don’t hesitate—your future awaits. Submit the form now and let us help you achieve your dreams!</p>
                <p className='d-flex gap-3  align-items-center fs-5 m-0 p-0'>
                    <span className='media-icon pb-2 fs-2'><IoIosMailUnread /></span>
                    <span>heena@rhombuseducation.com</span>
                </p>
                <p className='d-flex gap-3  align-items-center fs-5 m-0'>
                    <span className='media-icon fs-3'><FaPhoneVolume /></span>
                    <span>8826841955</span>
                </p>
                <div className='d-flex gap-2  align-items-center fs-5 m0-0'>
                    <p><span className='media-icon fs-2'><FaLocationDot /></span></p>
                    <p className='d-flex flex-column justify-content-center '>
                        <span>303, Chiranjeev Tower</span>
                        <span>Nehru Place, New Delhi 110019</span>
                    </p>
                </div>

            </div>
            <div className='col-md-6'>
                <form action="" onSubmit={onSubmit}>
                    <div className="my-2 ">
                        <label htmlFor="UserName" className="form-label">Name :</label>
                        <input type="text" className="form-control" id="UserName" name='UserName' autoComplete="off" placeholder="Enter Your Name" required/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="Phone" className="form-label">Phone  :</label>
                        <input type="number" className="form-control" id="Phone" name='Phone' autoComplete="off" placeholder="Enter Your Phone Number" required/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="Email" className="form-label">Email :</label>
                        <input type="email" className="form-control" id="Email" name='Email'  autoComplete="off"  placeholder="Enter Your Email Id" required/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="Message" className="form-label">Message :</label>
                        <textarea className="form-control" id="Message" name='Message' autoComplete="off" rows="3" placeholder='Message Here' required></textarea>
                    </div>
                    <div className='my-3 text-end'>
                        <button type='submit' className='btn btn-primary px-3 '> SUBMIT</button>
                    </div>

                    </form>
                    <span className="send-msg ">{result}</span>
            </div>
        </div>




    </div>
  )
}

export default Contact