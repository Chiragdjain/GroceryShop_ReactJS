import React from "react";
import { useGlobalContext } from "../context";

import SingleCartProduct from "../pages/SingleCartProduct";
import "../stylesheets/cart.css";

export default function Cart() {
  let { cart, total, clearAll, items } = useGlobalContext();
  if (cart.length > 0) {
    return (
      <div>
        <div className="main-container-1">CART</div>

        {cart.map((item) => {
          return <SingleCartProduct key={item.id} {...item} />;
        })}
        <div>
          <h2 className="total-items">Total:{total}</h2>
        </div>
        <div>
          <h3 className="total-items">Total Items:{items}</h3>
        </div>
        
          <div className="total cartButton">
            <button className="clickButton" onClick={() => clearAll()}>
              Clear Cart
            </button>
          </div>
       
        
      </div>
    );
  }
  return (
    <div className="main-container">
      <h1>Cart is Empty</h1>
    </div>
  );
}
