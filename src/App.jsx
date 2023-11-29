import ProductsContextProvider from './store/stored_products_context';
import Header from './components/Header.jsx';
import Catalogue from './components/Catalogue.jsx';


function App() {
  return (
    <ProductsContextProvider>
      <Header/>
      <Catalogue/>
    </ProductsContextProvider>
  );
}

export default App;
