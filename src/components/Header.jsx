import { useContext } from 'react'
import { ProductsContext } from '../store/stored_products_context';

export default function Header() {
  const { filterByType, selectedFilter } = useContext(ProductsContext);
  const handleChange = (event) => {
    filterByType(event.target.value);
  };
  const { products } = useContext(ProductsContext);
  const categories=[...new Set(products.map((product) => product.type))];
  
  return (
    <>
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Pizza Engridiente" />
          <h1>Pizza Ingredients</h1>
        </div>
        <p>
          <span>
        <label htmlFor="categorySelect">Select a category:</label>
        <select className="custom-select" id="categorySelect" value={selectedFilter} onChange={handleChange}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        </span>
        </p>
      </header>
    </>
  );
}
