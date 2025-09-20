import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>NYT Home</h2>
      <ul className={styles.navLinks}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/audio">Audio</Link></li>
        <li><Link to="/category/bazar">Bazar</Link></li>
        <li><Link to="/category/cafe">Café & Té</Link></li>
        <li><Link to="/category/electro">Electro</Link></li>
        <li><Link to="/category/iluminacion">Iluminación</Link></li>
        <li><Link to="/category/limpieza">Limpieza</Link></li>
        <li><Link to="/category/mate">Mate</Link></li>
        <li><Link to="/category/cocina">Cocina</Link></li>
        <li><Link to="/category/recipientes">Recipientes</Link></li>
        <li><Link to="/category/tech">Tech</Link></li>
        <li><Link to="/category/termos">Termos</Link></li>
        <li><Link to="/category/consolas">Consolas</Link></li>     
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default Navbar;
