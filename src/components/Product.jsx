import Checkbox from "./Checkbox";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
};

export default function Product({
  id,
  image,
  title,
  price,
  perishable,
  date,
  description,
  special,
  onEdit,
  onDelete
}) {

  return (
    <article className={"product " + (special ? "special" : "")}>
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>£{price}</p>
          <p>{description}</p>
          <h4>Product Information</h4>
          <label>Perishable:</label>
          <Checkbox perishable={perishable} />
          {perishable && <p>Expiration date: {formatDate(date)}</p>}
        </div>
        <p className='product-actions'>
          <button onClick={() => onEdit(id)}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </p>
      </div>
    </article>
  );
}
