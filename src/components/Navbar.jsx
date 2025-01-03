import React, { useEffect, useState } from 'react'
import '../styles/style.css'
import Logo from '../assets/svg.svg'
import { Link, useNavigate } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [sticky,setSticky] = useState(false)
    const [mobileMenu,setMobileMenu] = useState(false)
    const navigate = useNavigate();
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 20 ? setSticky(true):setSticky(false)
        })
    },[])

  const HamberMenuHandler =()=>{
       mobileMenu ? setMobileMenu(false):setMobileMenu(true);
  }

  return (
    <nav className={`nav-cont common-cont ${sticky ? 'dark-nav' : ''}`}>
          <div className='logo-cont'>
            <img className='logo' src={Logo} alt="logo" onClick={()=>navigate('/')} />
         </div>
          <div className={`menu-cont ${mobileMenu ? "":"mobile-menu"}`}>
            <Link to="/" className='nav-link'>HOME</Link>
            <Link to="/about" className='nav-link'>ABOUT</Link>
            <Link to="/services" className='nav-link'>SERVICES</Link>
            <Link to="/faq" className='nav-link'>FAQ</Link>
            <Link to="/contact" className='nav-link'>CONTACT</Link>
          </div>
          <div className='HamberMenu-cont'>
                <span className='Hamber-menu fs-1' onClick={HamberMenuHandler}><TiThMenu /></span>
                {/* <span className='cross-menu fs-3 text-primary'><ImCross /></span> */}
          </div>
    </nav>
  );
}

export default Navbar