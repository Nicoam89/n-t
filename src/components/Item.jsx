import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: "150px", borderRadius: "8px" }} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;