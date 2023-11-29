import { useContext, useState } from 'react';
import Product from './Product.jsx';
import { ProductsContext } from '../store/stored_products_context.jsx';
import { defaultProduct } from '../store/stored_products_context.jsx';
import ProductModal from './ProductModal.jsx'

export default function Catalogue() {
  const { products, addProduct, filteredProducts } = useContext(ProductsContext);
  const [modalProduct, setModalProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  function updateModal(inputIdentifier, value) {
    setModalProduct((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: value
      }
    });
  }

  function showModal(id) {
    const existingProduct = products.find((product) => product.id === id);

    if (!existingProduct) {
      setModalProduct({ ...defaultProduct });
    } else {
      setModalProduct({ ...existingProduct });
    }
    setIsOpen(true);
  }

  return (
    <section id="shop">
      <h2>Craft Your Culinary Canvas: A Symphony of Signature Pizza Ingredients</h2>
      <p>
        <button onClick={addProduct}>+</button>
      </p>
      <ul id="products">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Product {...product} openModal={showModal} />
          </li>
        ))}
      </ul>
      <ProductModal open={isOpen} setOpen={setIsOpen} product={modalProduct} onModalUpdate={updateModal} />
    </section>
  );
}
