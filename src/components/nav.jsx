import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

const nav = () => {
  return (
    <div className='nav-position fixed'>
        <Link to='/'><img src='/images\Screenshot_2025-07-14_155808-removebg-preview.png' alt='logo' width={130}/></Link>
        <ul className='nav-links'>
            <Link to="/" style={{color:"black" , textDecoration:"none"}}><li className='hovering'>Home</li></Link>
            <Link to="/about" style={{color:"black" , textDecoration:"none"}}><li className='hovering'>About Us</li></Link>
            <Link to="/newinnovation" style={{color:"black" , textDecoration:"none"}}><li className='hovering'>New Innovation</li></Link>
            <Link to="/services" style={{color:"black" , textDecoration:"none"}}><li className='hovering'>Services</li></Link>
            <Link to="/careers" style={{color:"black" , textDecoration:"none"}}><li className='hovering'>Careers</li></Link>
            <Link to="/contact" style={{color:"black" , textDecoration:"none"}}><li className='hovering'>Contact us</li></Link>
            <Link to="/enquiry" style={{color:"black" , textDecoration:"none"}}><li className='hovering'>Service Enquiry</li></Link>
        </ul>
    </div>
  )
}

export default nav