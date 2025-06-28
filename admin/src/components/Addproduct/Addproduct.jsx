import React, { useState } from 'react'
import './Addproduct.css'
import uploadicon from '../../assets/logo/upload.png'
const Addproduct = () => {
   const [image,setImage] =useState(false);
   const [productDetails,setproductDetails] = useState({
    name :"",
    image:"",
    category:"women",
    new_price:"",
    old_price :""
   })
   const imageHandler =(e)=>{
      setImage(e.target.files[0]);
   }
   const changeHandler =(e)=>{
    setproductDetails({...productDetails,[e.target.name]:e.target.value})
   }
    const Add_Product =async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData()
        formData.append('product',image);

        await fetch("http://localhost:4000/uploaad",{
            method : 'POST',
            header :{
                Accept : 'application/json',

            },
            body :formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http:localhost:4000/addproduct',{
                method:'POST',
                header:{
                    accept:'application/json',
                   ' content-type':'application/json',
                },
                body:JSON.stringify(product),

            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("productAdded"):alert("failed");
            })
        }
    }
  return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>product title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='type here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" id=" type here" />
            </div>
            <div className="addproduct-itemfield">
                <p> offer price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" id=" type here" />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>product category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                <option value="women">women</option>
                <option value="men">men</option>
                <option value="kids">kids</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):uploadicon} className='addproduct-thumnail-img' alt="" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            <button onClick={()=>{Add_Product()}} className='addproduct-button'> Add</button>
        </div>
    </div>
  )
}

export default Addproduct