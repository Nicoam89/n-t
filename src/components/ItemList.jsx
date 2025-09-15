import Item from "./Item";

function ItemList({ products }) {
  return (
    <div>
      {products.map((p) => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ItemList
