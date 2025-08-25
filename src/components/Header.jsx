import React from 'react'
import Navbar from './Navbar';
import Logo from './Logo';
import Contenedor from './Contenedor';

function Header() {
  return (
    <header>
        <Navbar/>
        <Logo/>
        <Contenedor saludo="¡Bienvenido a MiTienda Online!" />
    </header>
  )
}

export default Header