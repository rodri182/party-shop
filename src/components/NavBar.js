import React from "react";
import { Link } from "react-router-dom";
import {CartWidget} from "./CartWidget";

export const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="./">Party-Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
             <Link className="nav-link active"  to="./">Nosotros</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="./">Productos</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="./">Compras</Link>
            </li>
          </ul>
         <p><CartWidget/></p>
    </div>
  </div>
</nav>
 
  );
}
