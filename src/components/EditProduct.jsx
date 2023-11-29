export default function EditProduct({ product, onChange }) {

    function onChangeHandler(event, inputIdentifier) {
        onChange(inputIdentifier, event.target.value);
    }

    return (
        <section>
            <label htmlFor={"name" + product.id}>Name</label>
            <input id={"name" + product.id} type="text" value={product.name} onChange={(event) => { onChangeHandler(event, 'name') }} />
            
            <label htmlFor={"price" + product.id}>Price</label>
            <input id={"price" + product.id} type="text" value={product.price} onChange={(event) => { onChangeHandler(event, 'price') }} />

            <label htmlFor={"category" + product.id}>Category</label>
            <input id={"category" + product.id} type="text" value={product.type} onChange={(event) => { onChangeHandler(event, 'type') }} />

            <label htmlFor={"description" + product.id}>Description</label>
            <textarea id={"description" + product.id} type="text" value={product.description} onChange={(event) => { onChangeHandler(event, 'description') }} />
            
            <label htmlFor={"expiry" + product.id}>Expiry date</label>
            <input id={"expiry" + product.id} type="date" value={product.date ? product.date : ''} onChange={(event) => onChangeHandler(event, 'date')} />

            <label htmlFor={"special" + product.id}>Special</label>
            <input id={"special" + product.id} type='checkbox' value={product.special} onChange={(event) => { onChangeHandler(event, 'special') }} />
        </section>
    );
}