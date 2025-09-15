import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={() => alert(`Agregaste ${count} productos al carrito`)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount
