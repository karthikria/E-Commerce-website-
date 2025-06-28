import React from 'react'

import './Footer.css';
import footer_logo from '../assets/logo/Pink Purple Cute Feminine Fashion Style Logo.png'
import instagram_icon from '../assets/logo/icons8-instagram-logo-94.png'
import pinterest_icon from '../assets/logo/icons8-pinterest-logo-94.png'
import whatsapp_icon from '../assets/logo/icons8-whatsapp-48.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>RIA SHOPPY</p>
        </div>
        <ul className="footer-links">
            <li>company</li>
            <li>products</li>
            <li>offices</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>copy right@ 2025 -All Right Reserved .</p>
        </div>
    </div>
  )
}
export default Footer