import React, { useContext } from "react";
import { ShopContext } from "../../components/context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product max-w-sm rounded overflow-hidden shadow-lg">
      <img src={productImage} />
      <div className="description px-6 py-4">
        <p className="font-bold text-xl mb-2">
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
    </p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};