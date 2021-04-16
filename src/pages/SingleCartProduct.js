import React from "react";

import { useGlobalContext } from "../context";
import "../stylesheets/SingleProduct.css";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  RiDeleteBin6Line,
} from "react-icons/all";

export default function SingleProduct({
  Name,
  amount,
  Price,
  Image,
  id,
  Category,
}) {
  const { increaseItem, decreaseItem, removeItem } = useGlobalContext();
  return (
    <div className="item">
      <div className="div-image">
        <img className="image1" height="200px" src={Image} alt=''/>
      </div>
      <div style={{ marginTop: "0px" }} className="details">
        <p style={{ marginTop: "10px" }} className="product-title">
          <i>
            <b>{Name}</b>
          </i>
        </p>
        <p className="product-price">
          Price:
          <i>
            <b>{Price}</b>
          </i>
        </p>
        <p className="product-category">
          Category:
          <i>
            <b>{Category}</b>
          </i>
        </p>
      
        <button
          onClick={() => removeItem(id)}
          style={{marginBottom:'10px', fontSize: "15px" }}
        >
          <RiDeleteBin6Line style={{ color: "red" }} fontSize={"20px"} />
        </button>
    
      </div>
      <div className="cartButton">
        <button
          style={{marginBottom:'1vw'}}
          onClick={() => increaseItem(id, Category)}
        >
          <IoIosArrowUp fontSize={"20px"} />
        </button>
        <br />

        <b style={{ marginLeft: "1vw" ,color:'white'}}>{amount}</b>

        <br />
        <button
          style={{ marginTop: "1vw" }}
          onClick={() => decreaseItem(id, Category)}
        >
          <IoIosArrowDown fontSize={"20px"} />
        </button>
      </div>
    </div>
  );
}
