import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

import { FiShoppingCart } from "react-icons/all";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">ReactZon</Link>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>

          <li>
            <Link to="/cart">
              <FiShoppingCart fontSize={'30px'} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
