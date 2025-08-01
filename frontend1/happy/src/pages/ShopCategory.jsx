// import React, { useContext } from 'react'
// import './ShopCategory.css'
// import { ShopContext } from '../context/ShopContext'
// import dropdown_icon from '../components/assets/logo/icons8-double-down-50.png'
// import Item from '../components/Items/Item'
// export const ShopCategory = (props) => {

//   const {all_product} =useContext(ShopContext);
//   return (
//     <div className='shop-category'>
//       <img className="shopcategory-banner" src={props.banner} alt="" />
//       <div className="shopcategory-indexsort">
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
//         <div className="shopcategory-sort">
//           sort by <img src={dropdown_icon} alt="" />
//         </div>
//       </div>
//       <div className="shopcategory-products">
//         {all_product.map((item,i)=>{
//           if(props.category === item.category){
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//           }
//           else{
//             return null;

//           }
//         })}
//       </div>
//       <div className="shopcategory-loadmore">
//         Explore more
//       </div>
//     </div>
//   )
// }
// export default ShopCategory

import React, { useContext } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/logo/icons8-double-down-50.png';
import Item from '../components/Items/Item';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!all_product || all_product.length === 0) {
    return <p style={{ textAlign: 'center' }}>Loading products...</p>;
  }

  const filteredProducts = all_product.filter(
    (item) =>
      item.category?.toLowerCase().trim() === props.category.toLowerCase().trim()
  );

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="category banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="sort icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
