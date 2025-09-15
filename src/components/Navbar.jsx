import React from 'react'
import CartWidget from './CartWidget';

function Navbar() {


  return (
    <nav>
      <h2>NYT Home</h2>
        <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/bazar">Bazar</Link></li>
        <li><Link to="/category/hogar">Hogar</Link></li>
      </ul>

      <CartWidget/>


    </nav>
  )
}

export default Navbar