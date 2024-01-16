import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../context/shop-context";

export const Product = (props) => {
	const { id, productName, price, productImage } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

	return (
		<div class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md product">
			<img src={productImage} alt="product image" />
			<span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
				Sale
			</span>
			<div className="mt-4 px-5 pb-5 description">
				<p class="text-xl tracking-tight text-slate-900">
					<b>{productName} </b>
				</p>

				<p class="text-xl font-bold text-red-300"> ${price}</p>
				<button className="addToCartBttn" onClick={() => addToCart (id)}>Add To Cart{cartItemAmount > 0  && <> ({cartItemAmount})</>}
                 </button>
			</div>
		</div>
	);
};
