import React from 'react'
import ImgItem from './ImgItem';

function Item({producto,precio,descripcion}) {
  return (
    <div>

        <h3>Producto: {producto} </h3>
        <h3>Precio: ${precio}</h3>
        <p>Descripcion: {descripcion}</p>

    </div>
  )
}

export default Item