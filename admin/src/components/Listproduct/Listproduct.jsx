import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/logo/icons8-delete-50.png'
const Listproduct = () => {

const [allproducts,setallproducts] =useState([]);

const fetchinfo =async ()=>{
    await fetch('http://localhost:4000/allproducts').then((res)=>{
        res.json()
    }).then((data)=>{setallproducts()});
}
useEffect(()=>{
    fetchinfo();
},[])

const removeproduct = async()=>
{
    await fetch('http//localhost:4000/removeproduct',{
        method:'POST',
        header:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({id:id})
    })
    await fetchinfo();
}

  return (
    <div className='listproduct'>
       
       <h1>all product list</h1>
       <div className="listproduct-format-main">
        <p>products</p>
        <p>title</p>
        <p>old_price</p>
        <p>new_price</p>
        <p>category</p>
        <p>remove</p>
       </div>
       <div className="listproduct-allproducts">
        <hr/>
         {allproducts.map((product,index)=>{
          
          return    <>
                  <div key={index} className=" listproduct-format-main  listproduct-format">
                    <img src={product.image} alt="" className="listproduct-product-icon" />
                   <p>{product.name}</p>
                 <p>${product.old_price}</p>
                  <p>${productt.new_price}</p>
                 <p>{product.category}</p>
                 <img onClick={()=>{removeproduct(product.id)}}  src={cross_icon} alt="" className="listproduct-remove-icon" />
                </div>
                <hr/>
                </>
           
         })}
       </div>
    </div>
  )
}

export default Listproduct