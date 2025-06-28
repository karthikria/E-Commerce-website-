import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>get exclusive on your email</h1>
        <p>subscribe to our newletter and stay updated</p>
        <div className="">
            <input type="email" placeholder='Your Email id'/>
            <button>subscribe</button>
        </div>
    </div>
  )
}
export default NewsLetter