import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.css";

import logo1 from "../images/backimage2.jfif";
import detergent from '../images/detergent.webp'
import fresh from "../images/fresh.jfif";
import dairy from "../images/dairy.jfif";
import dry from "../images/dryfruits.jpg";
import breakfast from "../images/breakfast.jfif";
import chocolate from "../images/chocolate.jfif";

export default function Home() {
  return (
    <div>
      <main>
        <div className="main-div">
          <img width="100%" height="600px" src={logo1} alt="" />
          <div className="centered">A Place To Buy Happiness</div>
        </div>
      </main>
      <div className="div-topic">
        <h1>CATEGORIES</h1>
      </div>
      <div className="grid-container">
        <div className="item1">
          <img className="image" src={fresh} alt=""></img>
          <div className="middle">
            <div className="text">
              <Link to="/product/Fruits">Fresh Products</Link>
            </div>
          </div>
        </div>
        <div className="item2">
          <img className="image" src={dairy} alt=""></img>
          <div className="middle">
            <div className="text">
              <Link to="/product/Dairy_Products">Dairy Products</Link>
            </div>
          </div>
        </div>
        <div className="item3">
          <img className="image" src={dry} alt=""></img>
          <div className="middle">
            <div className="text">
              <Link to="/product/Dry_Fruits">Dry Fruits</Link>
            </div>
          </div>
        </div>
        <div className="item4">
          <img className="image" src={detergent} alt=""></img>
          <div className="middle">
            <div className="text">
              <Link to="/product/Detergents">Detergents</Link>
            </div>
          </div>
        </div>
        <div className="item5">
          <img className="image" src={breakfast} alt=""></img>
          <div className="middle">
            <div className="text">
              <Link to="/product/Cereals">BreakFast Essentials</Link>
            </div>
          </div>
        </div>
        <div className="item6">
          <img className="image" src={chocolate} alt=""></img>
          <div className="middle">
            <div className="text">
              <Link to="/product/Chocolates">Chocolates</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
