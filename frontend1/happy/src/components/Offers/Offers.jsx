import React from 'react'
import './Offers.css' 
import exclusive_img from '../assets/female/gown4.jpg'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers for you</h1>
          <p>only on best sellers products </p>
          <button>Check Now</button>
        </div>
        <div className="offers-right">
        <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}
export default Offers