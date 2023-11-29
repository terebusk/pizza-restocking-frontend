import { useRef, useState, useEffect } from 'react';

import ProductModal from './components/ProductModal.jsx';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

import stock from './assets/stock.jpg';

const defaultProduct = {
  id: '',
  image: '',
  name: '',
  price: 0.00,
  description: '',
  date: '',
  special: false
};

function App() {
  const [filter, setFilter] = useState('');

  const [products, setProducts] = useState([...DUMMY_PRODUCTS]);

  const [modalProduct, setModalProduct] = useState(products[0]);
  const [displayedProducts, setDisplayedProducts] = useState([...products]);

  function handleChange(inputIdentifier, value) {
    setModalProduct((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: value
      }
    });
  }

  const modal = useRef();

  function handleAddItem() {
    let lastId = 1;
    if (products.length) {
      lastId = +products.reduce(function (prev, current) {
        return (prev && prev.id) > current.id ? prev : current
      }).id + 1;
    }
    const newProduct = { ...defaultProduct, id: lastId, image: stock, type: 'not available' };
    setProducts((prevProducts) => {
      return [...prevProducts, newProduct];
    });
  }

  function handleShowModal(id) {
    const existingProduct = products.findIndex(
      (product) => product.id === id
    );
    const existingCartItem = products[existingProduct];

    if (!existingCartItem) {
      setModalProduct(defaultProduct);
    } else {
      setModalProduct(existingCartItem);
    }
    modal.current.open();
  }

  function handleEditItemDetails(itemDetails) {
    setProducts((prev) => {
      const products = [...prev];
      const index = products.findIndex(obj => obj.id === itemDetails.id);

      if (index !== -1) {
        products[index] = itemDetails;
      } else {
        console.error(`Object with ID ${itemDetails.id} not found in the array.`);
      }
      return products;
    });
  }

  function handleDeleteItem(id) {
    setProducts((previousProducts) => {
      const products = [...previousProducts];

      return products.filter((product) => { return product.id !== id });
    });
  }

  function filterResults(selectedCategory) {
    setFilter(selectedCategory);
    setDisplayedProducts((prev) => {
      if (!selectedCategory) {
        return [...products];
      }
      return [...products.filter((product) => product.type === selectedCategory)];
    })
  }

  useEffect(() => {
    filterResults(filter);
  }, [filter, products])

  return (
    <>
      <ProductModal ref={modal} product={modalProduct} filter={filter} onChange={handleChange} onSave={handleEditItemDetails} />
      <Header categories={[...new Set(products.map((product) => product.type))]} onCategoryChange={filterResults} />
      <Shop products={displayedProducts} onEditItem={handleShowModal} onDeleteItem={handleDeleteItem} modal={modal} onAddItem={handleAddItem} />
    </>
  );
}

export default App;
