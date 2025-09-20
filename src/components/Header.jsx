import React from 'react'
import Navbar from './Navbar';
import Logo from './Logo';
import Contenedor from './Contenedor';

function Header() {
  return (
    <header>
        <Logo/>
        <Navbar/>
        <Contenedor saludo="¡Bienvenido a Mi Tienda Online!" />
    </header>
  )
}

export default Header