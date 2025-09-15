import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === parseInt(itemId)));
      }, 1000);
    });

    getProduct.then((res) => setItem(res));
  }, [itemId]);

  return (
    <div>
      {item ? <ItemDetail product={item} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
