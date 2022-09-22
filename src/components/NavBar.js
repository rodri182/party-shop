import React from "react";
import { Link } from "react-router-dom";
import {CartWidget} from "./CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="./">Party-Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
             <Link className="nav-link active"  to="./category/1">Nosotros</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="./category/2">Productos</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="./category/3">Compras</Link>
            </li>
          </ul>
         <p><CartWidget/></p>
    </div>
  </div>
</nav>
 
  );
}
