import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/logo/icons8-star-filled-48.png'
import star_dull_icon from '../assets/logo/icons8-star-filled-40.png'
import { ShopContext } from '../../context/ShopContext'
export const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}= useContext(ShopContext);
  return (
    <div className='productdisplay'>
       <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt="" />
          </div>
       </div>
       <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src= {star_icon}alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon}alt="" />
                <img src= {star_dull_icon}alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                   ${product.old_price}
                </div>
            <div className="productdisplay-right-price-new">
                ${product.new_price}
            </div>
            </div>
            <div className="productdisplay-right-description">
                high quality shirt sarees and gowns 
            </div>
            <div className="productdisplay-right-size">
                <h1>select size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>2XL</div>
                </div>
            </div>
            <button  onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className='productdisplay-right-category'><span>category</span> women saree</p>
            <p className='productdisplay-right-category'><span>category</span> modern latest</p>
       </div>
    </div>
  )
}
export default ProductDisplay