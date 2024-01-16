import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const ShopNew = () => {
  return (
    <div>
    <Nav/>
    <div className="shop">
      <div className="shopTitle">
        <h1>Digital Product Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};
