// import React, {createContext, useEffect, useState } from  "react";



// export const ShopContext =  createContext(null);
// const getDefaultCart =()=>{
//     let cart={};
//     for (let index = 0; index < 300+1; index++) {
//        cart[index] =0;

        
//     }
//     return cart;
// }
// const ShopContextProvider = (props)=> {

//     const [all_product,setAll_product] = useState([]);

//     useEffect(()=>{
//          fetch('http://localhost:4000/allproducts')
//          .then((response)=>response.json())
//          .then((data)=>setAll_product(data))
//         if(localStorage.getItem('auth-token')){
//             fetch('http://localhost:4000/getcart',{
//                 method:'POST',
//                 headers:{
//                     Accept : 'a]lication/json',
//                     'auth-token' :`${localStorage.getItem('auth-token')}`,
//                     'Content-Type' :'application/json',

//                 },
//                 body:"",
//             }).then((response)=>response.json())
//               .then((data)=>setCartItems(data)) ;
//         }


//     },[])

//     const [cartItems,setCartItems] =useState(getDefaultCart());
    
    
//     const addToCart =(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//          if(localStorage.getItem('auth-token')){
//             fetch('http://localhost:4000/addtocart',{
//                 method:'POST',
//                 headers:{
//                     Accept:'application/json',
//                     'auth-token' :`${localStorage.getItem('auth-token')}`,
//                     'Content-Type':'application/json',


//                 },
//                 body:JSON.stringify({"item":itemId}),
//             })
//             .then((response)=>response.json())
//             .then((data)=>console.log(data));
//          }
//     }
//     const removeFromCart =(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
//         if(localStorage.getItem('auth-token')){
//             fetch('http://localhost:4000/removefromcart',{
//                 method:'POST',
//                 headers:{
//                     Accept:'application/json',
//                     'auth-token' :`${localStorage.getItem('auth-token')}`,
//                     'Content-Type':'application/json',


//                 },
//                 body:JSON.stringify({"item":itemId}),
//             })
//             .then((response)=>response.json())
//             .then((data)=>console.log(data));
         
//         }
//     }
//     const getTotalCartAmount =()=>{
//         let totalAmount =0;
//         for(const item in cartItems)
//         {
//             if(cartItems[item]>0)
//             {
//                 let itemInfo = all_product.find((product)=>product.id ===Number(item))
//                 totalAmount+=itemInfo.new_price *cartItems[item]
//             }
           
//         }
//         return totalAmount;
//     }

//      const getTotalCartItems =()=>{
//         let totalItem =0;
//         for(const item in cartItems)
//         {
//             if(cartItems[item]>0)
//             {
//                 totalItem+= cartItems[item];

//             }
//         }
//         return totalItem;
//      }

//     const contextValue ={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}
//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//          </ShopContext.Provider>
//     )
// }
// export default ShopContextProvider;
import React, { createContext, useEffect, useState } from "react";

// Create context
export const ShopContext = createContext(null);

// Create empty cart with 301 items (IDs 0 to 300)
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

// Provider Component
const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Fetch products and cart (if logged in)
  useEffect(() => {
    // Fetch all products
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products fetched:", data);
        setAll_product(data);
      })
      .catch((err) => console.error("Failed to fetch products", err));

    // If logged in, fetch cart
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/json", // ✅ Fixed typo
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "", // No body needed
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Cart fetched:", data);
          setCartItems(data);
        })
        .catch((err) => console.error("Failed to fetch cart", err));
    }
  }, []);

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Added to cart:", data))
        .catch((err) => console.error("Add to cart failed", err));
    }
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Removed from cart:", data))
        .catch((err) => console.error("Remove from cart failed", err));
    }
  };

  // Calculate total price
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  // Calculate total items
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Context value
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;


