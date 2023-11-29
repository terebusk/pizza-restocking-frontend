import { currencyFormatter, formatDate } from "../util";


export default function Product({
  id,
  image,
  name,
  price,
  date,
  description,
  special,
  onEdit,
  onDelete
}) {

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
            <button onClick={() => onEdit(id)}>Edit</button>
            <button onClick={() => onDelete(id)}>Delete</button>
          </p>
        </div>
      </article>
    </>

  );
}
