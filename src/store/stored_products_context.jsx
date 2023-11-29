import { createContext, useEffect, useState } from "react";
import stock from '../assets/stock.jpg';
import { DUMMY_PRODUCTS } from '../dummy-products.js';

export const defaultProduct = {
    id: '',
    image: '',
    name: '',
    price: 0.00,
    description: '',
    date: '',
    special: false
  };

const context = {
    products: [],
    addProduct: () => { },
    deleteProduct: () => { },
    updateProduct: () => { },
    filterByType: '',
    filteredProducts: []
};

export const ProductsContext = createContext(context);

export default function ProductsContextProvider({ children }) {
    const [products, setProducts] = useState([...DUMMY_PRODUCTS]);
    const [filter, setFilter] = useState('');
    const [displayedProducts, setDisplayedProducts] = useState([...products]);

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
    }, [filter, products]);

    const ctxValue = {
        products: products,
        addProduct: handleAddItem,
        deleteProduct: handleDeleteItem,
        updateProduct: handleEditItemDetails,
        filterByType: filterResults,
        selectedFilter: filter,
        filteredProducts: displayedProducts
    }

    return (
        <ProductsContext.Provider value={ctxValue}>
            {children}
        </ProductsContext.Provider>
    );
}