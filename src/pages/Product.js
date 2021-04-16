import React from "react";
import data from "../data";
import { useParams } from "react-router-dom";

import SingleProduct from "./SingleProduct";
import "../stylesheets/Product.css";

export default function Product() {
  

  const { name } = useParams();

  return (
    <div>
      <div className="main-container-1">
        <h1 style={{fontSize:'5vw'}}>{name}</h1>
      </div>

      <div>
        {data[name].map((item) => {
          return <SingleProduct key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
