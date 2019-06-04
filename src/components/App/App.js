import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Checkout from '../Checkout';
import Products from '../Products';
import Login from '../Login';
import Cart from '../Cart'
import Header from '../Home/Header'
import Footer from '../Home/Footer';
import {UserContext} from '../../context/userContext';
import products from '../../services/mocks/products.json';
import categories from '../../services/mocks/categories.json';

function App() {
  const [cart, addToCart] = useState([]);
  const [page, setPage] = useState('Login');
  const [productItems, setProductItems] = useState(products);
  const [total, settotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [footCats, setFootCats] = useState([])
  useEffect(() => {
    if (page === 'Login') {
      setProductItems(products);
      settotal(0);
      setDiscount(0);
      addToCart([])
    }
  }, [page]);

  useEffect(() => {
    let footCats = [];
    categories.map(item => {
      if ((item.name).toLowerCase().search('footwear') !== -1) {
        footCats.push(item.id);
      }
    })
    setFootCats(footCats);
  }, [categories])
  

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
        page,
        setPage,
        productItems,
        setProductItems,
        total,
        settotal,
        discount,
        setDiscount,
        footCats
      }}>
        <div className="App">
            
            <Header />
            {page === "Login" && <Login />}  
            {page === 'Products' && <Products products={productItems} categories={categories}/>}
            {page === 'Cart' && <Cart />}
            {page === 'Checkout' && <Checkout />}
            <Footer />
           
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
