import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const ProductModal = forwardRef(function Modal({ product, onSave }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  const [inputState, setInputState] = useState({ ...product } || {});

  function handleChange(inputIdentifier, newValue) {
    setInputState((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: newValue
      }
    });
  }

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{product.title}</h2>
      <label>Title</label>
      <input onChange={(event) => {handleChange('title', event.target.value)}}/>
      <label>Price</label>
      <input onChange={(event) => {handleChange('price', event.target.value)}}/>
      <label>Description</label>
      <input onChange={(event) => {handleChange('description', event.target.value)}}/>
      <form method="dialog" id="modal-actions">
        <button>Close</button>
        <button onClick={() => onSave(product.id)}>Save</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ProductModal;
