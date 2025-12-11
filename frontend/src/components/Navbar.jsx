import React from "react";
import "./components.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="components2">
        <Link to={'/'} className="link-heading">
          <h1>PRODUCT STORE</h1>
        </Link>
      </div>

      <div className="components1">
        <Link to={'/about'} className="link-heading"><h5>ABOUT</h5></Link>
        <Link to={'/create'}>
        <button type="button" className="btn btn-outline-primary">Add Product</button>
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
