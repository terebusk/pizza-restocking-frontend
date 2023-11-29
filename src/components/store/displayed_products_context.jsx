import { createContext, useReducer } from 'react';

export const ProductListContext = createContext({
    products: [],
    filter: (category) => { }
});

export default function ProductListProvider({ children, products }) {
    const [productListState, productListDispatch] = useReducer(productListReducer, {
        products: [...products],
    });
    const [displayedProducts, setDisplayedProducts] = useState([...products]);

    function filterByCategory(category) {
        setDisplayedProducts((prev) => {
            if (!selectedCategory) {
                return [...products];
            }
            return [...products.filter((product) => product.type === selectedCategory)];
        })
    }

    const ctxValue = {
        products: productListState.products,
        filter: () => { },
    }

    return <ProductListContext.Provider value={ctxValue}>
        {children}
    </ProductListContext.Provider>
}