import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Paw Finder</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/adopt">Adopt Pet</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
