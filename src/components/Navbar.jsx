import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav>
      <h2>NYT Home</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/bazar">Audio</Link></li>
        <li><Link to="/category/hogar">Bazar</Link></li>
        <li><Link to="/category/hogar">Café & Té</Link></li>
        <li><Link to="/category/hogar">Electro</Link></li>
        <li><Link to="/category/hogar">Iluminacion</Link></li>
        <li><Link to="/category/hogar">Limpieza</Link></li>
        <li><Link to="/category/hogar">Mate</Link></li>
        <li><Link to="/category/hogar">Cocina</Link></li>
        <li><Link to="/category/hogar">Recipientes</Link></li>
        <li><Link to="/category/hogar">Tech</Link></li>
        <li><Link to="/category/hogar">Termos</Link></li>
        <li><Link to="/category/hogar">Consolas</Link></li>     
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default Navbar;
