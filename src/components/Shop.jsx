import Product from './Product.jsx';

export default function Shop({ products, onEditItem, onDeleteItem }) {
  
  return (
    <section id="shop">
      <h2>Craft Your Culinary Canvas: A Symphony of Signature Pizza Ingredients</h2>
      <ul id="products">
        {products.map((product) => (
          <li key={product.id}>
            <Product {...product} product={product} onEdit={onEditItem} onDelete={onDeleteItem}/>
          </li>
        ))}
      </ul>
    </section>
  );
}
