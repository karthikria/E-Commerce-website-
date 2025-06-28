import React from 'react'
import './Hero.css'
import hand_icon from '../assets/logo/Pink Purple Cute Feminine Fashion Style Logo.png'
import arrow_icon from '../assets/logo/icons8-arrow-50.png'
import hero_img  from '../assets/woman-9116667_1280.jpg'
export const Hero = () => {
  return (
    <div className='hero'>
       <div className="Hero-left">
          <h2>
            NEW ARRIVALS ONLY
          </h2>
          <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt=""/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow_icon} alt="" />
          </div>
       </div>
       <div className="Hero-right">
        <img src={hero_img} alt="" />
       </div>
    </div>
  )
}
export default Hero