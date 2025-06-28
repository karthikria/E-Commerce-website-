import React, { useContext } from 'react'
import './cartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/logo/icons8-delete-50.png'
export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromcart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>products</p>
            <p>title</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
            <p>remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image}alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p> ${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>
                      $ {e.new_price*cartItems[e.id]}
                    </p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromcart(e.id)}} alt="" />
                </div>
                <hr/>
            </div>
            }
            return null;
        }
        )}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1> cart totals</h1>
                <div>
                    <div className="cartitems-totalitem">
                        <p>subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-totalitem">
                        <p>shipping fees</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-totalitem">
                        <h3>total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>procide to checkout</button>
            </div>
            <div className="cartitems-promocode">
                <p>if you have a promocode,enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promocode' />
                    <button>submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CartItems