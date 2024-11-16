import React from 'react'
import Title from '../components/Title'
import ContactUsBanner from '../assets/contactUsImg.jpg'
import { IoMailOpen } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
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
                <p className='d-flex gap-2  align-items-center fs-4'>
                    <span>Send us a message</span><span className='mail-icon fs-2'><IoMailOpen /></span>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem beatae quaerat doloribus deleniti
                     voluptas velit aperiam eum voluptatum, voluptate unde consequuntur officiis totam minima cum?
                </p>
                <p className='d-flex gap-3  align-items-center fs-5 mt-2'>
                    <span className='media-icon pb-2 fs-2'><IoIosMailUnread /></span>
                    <span>heena@rhombuseducation.com</span>
                </p>
                <p className='d-flex gap-3  align-items-center fs-5 mt-2'>
                    <span className='media-icon fs-3'><FaPhoneVolume /></span>
                    <span>8826841955</span>
                </p>
                <div className='d-flex gap-2  align-items-center fs-5 mt-2'>
                    <p><span className='media-icon fs-2'><FaLocationDot /></span></p>
                    <p className='d-flex flex-column justify-content-center '>
                        <span>303, Chiranjeev Tower</span>
                        <span>Nehru Place, New Delhi 110019</span>
                    </p>
                </div>

            </div>
            <div className='col-md-6'>
                <form action="">
                    <div className="mb-1">
                        <label htmlFor="UserName" className="form-label">Name :</label>
                        <input type="email" className="form-control" id="UserName" placeholder="Enter Your Name"/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="Phone" className="form-label">Phone  :</label>
                        <input type="number" className="form-control" id="Phone" placeholder="Enter Your Phone Number"/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="Email" className="form-label">Email :</label>
                        <input type="email" className="form-control" id="Email" placeholder="Enter Your Email Id"/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message :</label>
                        <textarea className="form-control" id="Message" rows="3" placeholder='Message Here'></textarea>
                    </div>
                    <div className='mt-2 text-end'>
                        <button type='button' className='btn btn-primary px-5 '> Send</button>
                    </div>

                    </form>
            </div>
        </div>




    </div>
  )
}

export default Contact