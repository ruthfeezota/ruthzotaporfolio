import React, { useContext } from "react";
import {PRODUCTS} from "../../products"
import { ShopContext } from "../../components/context/shop-context";

export default function cart() {
    const { cartItems}  = useContext(ShopContext);
  return (
    <div className='cart'>
    <div>
        <h1> Your Cart Items</h1>
    </div>
    <div className='cartItems'>
    {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {

        }
    })}

    {/* https://www.youtube.com/watch?v=tEMrD9t85v4 44:27 */}
    </div>
    </div>
  )
}
