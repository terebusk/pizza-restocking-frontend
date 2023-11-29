import { useContext } from "react";
import { currencyFormatter, formatDate } from "../util";
import { ProductsContext } from "../store/stored_products_context";

export default function Product({ id, image, name, price, date, description, special, openModal }) {
  const { deleteProduct } = useContext(ProductsContext);
  return (
    <>
      <article className={"product " + (special ? "special" : "")}>
        <img src={image} alt={name} />
        <div className="product-content">
          <div>
            <h3>{name}</h3>
            <p className='product-price'>{currencyFormatter.format(price)}</p>
            <p>{description}</p>

            {date &&
              <>
                <h4>Product Information</h4>
                <p>Expiration date: {formatDate(date)}</p>
              </>
            }
          </div>
          <p className='product-actions'>
            <button onClick={() => openModal(id)}>Edit</button>
            <button onClick={() => deleteProduct(id)}>Delete</button>
          </p>
        </div>
      </article>
    </>

  );
}
