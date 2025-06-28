import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo/Pink Purple Cute Feminine Fashion Style Logo.png'
import profilelogo from '../../assets/logo/user-male-circle.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className='nav-logo'/>
        <img src={profilelogo} alt=" " className='nav-profile' />
    </div>
  )
}

export default Navbar