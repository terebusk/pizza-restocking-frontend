import { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import EditProduct from './EditProduct';
import { ProductsContext } from '../store/stored_products_context';

function ProductModal({ open, setOpen, product, onModalUpdate }) {
  const modal = useRef();

  useEffect(() => {
    if (open) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [open]);

  const { updateProduct } = useContext(ProductsContext);

  function handleSave() {
    updateProduct(product);
    setOpen(false);
  }

  function handleClose() {
    setOpen(false);
  }

  return createPortal(
    <dialog id="modal" ref={modal} >
      <h2>{product.name}</h2>
      <div className='user-input'>
        <EditProduct product={product} onModalUpdate={onModalUpdate}/>
        <form method="dialog" id="modal-actions">
          <button onClick={handleClose}>Close</button>
          <button onClick={handleSave}>Save</button>
        </form>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
};

export default ProductModal;
