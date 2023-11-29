import Product from './Product.jsx';

export default function Shop({ products, onEditItem, onDeleteItem, onAddItem, modal}) {
  
  return (
    <section id="shop">
      <h2>Craft Your Culinary Canvas: A Symphony of Signature Pizza Ingredients</h2>
      <p>
        <button onClick={onAddItem}>+</button>
      </p>
      <ul id="products">
        {products.map((product) => (
          <li key={product.id}>
            <Product {...product} product={product} onEdit={onEditItem} onDelete={onDeleteItem} modal={modal}/>
          </li>
        ))}
      </ul>
    </section>
  );
}
