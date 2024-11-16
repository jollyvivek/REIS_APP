import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
// import Hero from './components/Hero'

const App = () => {
  return (
    <div className=''>
        <Navbar/>
        {/* <Hero/> */}
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
        </Routes>
    </div>
        <Footer/>
    </div>
  )
}

export default App