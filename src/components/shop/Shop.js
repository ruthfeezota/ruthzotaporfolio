import React from "react";
import Nav from "../Nav";
import { PRODUCTS } from "../../products"
import Footer from "../Footer";
import { Product } from "./product"


function Shop() {
	return (
		<div className="">
			<Nav />
			<div>
				<h1 className="mb-4 mt-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl text-center">
					Digital Products Shop
				</h1>
			</div>
      <div className="products">
      {PRODUCTS.map((product) => <Product data={product}/>)}

      </div>

			<Footer />
		</div>
	);
}

export default Shop;
