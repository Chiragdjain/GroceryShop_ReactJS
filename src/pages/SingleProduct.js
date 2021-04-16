import React from "react";

import { useGlobalContext } from "../context";
import "../stylesheets/SingleProduct.css";

export default function SingleProduct({
  Name,
  amount,
  Price,
  Image,
  id,
  Category,
}) {
  const { addToCart } = useGlobalContext();
  return (
    <div className="item">
      <div className="div-image">
        <img className="image1" height="200px" src={Image} alt='' />
      </div>
      <div className="details">
        <p style={{marginTop:'10px'}} className='product-title'>
          <i>
            <b>{Name}</b>
          </i>
        </p>
        <p className='product-price'>
          Price:
          <i>
            <b>{Price}</b>
          </i>
        </p>
        <p className='product-category'>
          Category:
          <i>
            <b>{Category}</b>
          </i>
        </p>
        <hr />
      </div>
      <div className="addToButton">
        <button className='clickButton' onClick={() => addToCart(id, Category)}>
         Add to Cart
        </button>
      </div>
    </div>
  );
}
