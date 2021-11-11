import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const myStyle = {
    color: "white",
  };
  return (
    <nav className="nav">
      <Link style={myStyle} to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav__links">
        <Link style={myStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={myStyle} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Nav;
