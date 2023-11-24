import { useRef, useState } from 'react';

import ProductModal from './components/ProductModal.jsx';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

function App() {
  const [modalProduct, setModalProduct] = useState({
    id: '',
    image: '',
    title: '',
    price: 0.00,
    description: '',
  });

  const modal = useRef();

  const [products, setProducts] = useState([...DUMMY_PRODUCTS]);
  const [displayedProducts, setDisplayedProducts] = useState([...products]);

  function updateAndOpenModal(id) {
    setModalProduct(products.filter((product) => product === id));
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
    setDisplayedProducts((prev) => {
      if (!selectedCategory) {
        return [...products];
      }
      return [...products.filter((product) => product.type === selectedCategory)];
    })
  }

  return (
    <>
      <ProductModal
        ref={modal}
        product={modalProduct}
        onSave={handleEditItemDetails}
      />
      <Header
        categories={[...new Set(products.map((product) => product.type))]} onCategoryChange={filterResults}
      />
      <Shop products={displayedProducts} onEditItem={updateAndOpenModal} onDeleteItem={handleDeleteItem} />
    </>
  );
}

export default App;
