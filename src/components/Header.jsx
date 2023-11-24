import { useState } from 'react'

export default function Header({categories, onCategoryChange}) {
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
    onCategoryChange(event.target.value);
  };

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
        <select className="custom-select" id="categorySelect" value={filter} onChange={handleChange}>
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
