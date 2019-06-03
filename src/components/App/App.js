import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Checkout from '../Checkout';
import Products from '../Products';
// import Login from '../Login';
import Cart from '../Cart'
import Header from '../Home/Header'
import Footer from '../Home/Footer';
import {UserContext} from '../../context/userContext';
import products from '../../services/mocks/products.json';
import categories from '../../services/mocks/categories.json';

function App() {
  const [cart, addToCart] = useState([]);
  const [page, setPage] = useState('Products');
  const [productItems, setProductItems] = useState(products)

  // useEffect(() => {
  //   let modifiedCart = cart.reduce((all, item) => {
  //     if (item.units > 0) {
  //       all.push(item)
  //     }
  //     return all;
  //   }, []);
  //   addToCart(modifiedCart)
  // }, [cart]);
  
  return (
    <>
      <CssBaseline />
      <UserContext.Provider value={{
        cart,
        addToCart,
        setPage,
        productItems,
        setProductItems
      }}>
        <div className="App">
            
            <Header />
            {page === 'Products' && <Products products={productItems} categories={categories}/>}
            {page === 'Cart' && <Cart />}
            {page === 'Checkout' && <Checkout />}
            <Footer />
            {/* <Login /> */}  
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
