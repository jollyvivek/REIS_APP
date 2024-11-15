import React from 'react'
import logo from '../assets/svg (1).svg'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-fluid my-3'>
      <div className='row'>
        <div className='col-md-4 mt-3'>
            <img className='footer-logo' src={logo} alt="" />
        </div>
        <div className='col-md-3 mt-3'>
            <h4 className=' py-2 fs-3'>Company</h4>
            <div className='fotter-middle gap-2'>
              <Link to="/" className='fopter-link fs-5'>Home</Link>
              <Link to="/about" className='fopter-link fs-5'>About</Link>
              <Link to="/services" className='fopter-link fs-5'>Services</Link>
              <Link to="/contact" className='fopter-link fs-5'>Contact</Link>
            </div>
        </div>
        <div className='col-md-5 mt-3'>
            <h4 className=' py-2 fs-4'>GET IN TOUCH</h4>
            <p className='m-0 mb-1 d-flex gap-3 fs-5'><span className='media-icon'><FaPhoneVolume /></span><span>8826841955</span></p>
            <p className='m-0 mb-1 d-flex gap-3 fs-5'><span className='media-icon'><IoIosMail /></span><span>heena@rhombuseducation.com</span></p>
            <div className='media-cont d-flex gap-2'>
              <span className='media-icon '><FaFacebookF /></span>
              <span className='media-icon '><FaInstagramSquare /></span>
              <span className='media-icon '><FaWhatsapp /></span>
              <span className='media-icon '><FaLinkedin /></span>
              <span className='media-icon '><FaTwitter /></span>
            </div>
        </div>
      </div>  
      
    </div>
  )
}

export default Footer