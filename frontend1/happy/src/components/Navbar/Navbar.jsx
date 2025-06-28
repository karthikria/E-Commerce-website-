import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo/Pink Purple Cute Feminine Fashion Style Logo.png'
import cart_icon from '../assets/logo/cart png.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import dropdown_icon from '../assets/logo/icons8-double-down-50.png'
export const Navbar = () => {
  const [menu,setMenu]= useState("shop");
  const {getTotalCartItems} =useContext(ShopContext);
  const menuRef =useRef();

  const dropdown_toggle =(e) =>{
             menuRef.current.classList.toggle('nav-menu-visible');
             e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img  className="logo1"src={logo} alt="" />
        <p>RIA SHOPPY</p>

      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="" />
     <ul ref={menuRef} className="nav-menu">
      <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration :'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration :'none'}}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration :'none'}}to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration :'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
     </ul>
     <div className="nav-login-cart">
      {localStorage.getItem('auth-token')
      ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>logout</button> 
        
      :<Link to='/login'><button>login</button></Link>}
      <Link to='/cart'><img className='logo2' src={cart_icon} alt="" /></Link>
      <div className="nav-cart-count">
        {getTotalCartItems()}
      </div>
     </div>
    </div>
  )
}
export default Navbar
