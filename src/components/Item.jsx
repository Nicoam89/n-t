import React from 'react'
import ImgItem from './ImgItem';
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item