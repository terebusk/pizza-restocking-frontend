import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import EditProduct from './EditProduct';

const ProductModal = forwardRef(function Modal({ product, onSave, onChange }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{product.name}</h2>
      <div className='user-input'>
        <EditProduct product={product} onChange={onChange}/>
        <form method="dialog" id="modal-actions">
          <button>Close</button>
          <button onClick={() => onSave(product)}>Save</button>
        </form>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ProductModal;
