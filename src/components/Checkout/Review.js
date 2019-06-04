import React, {useContext, useEffect, useState} from 'react';


import {UserContext} from '../../context/userContext';
import SelectedProducts from '../Cart/SelectedProducts';
import ShippingNpayment from './ShippingNpayment'

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];




export default function Review() {
  const {cart, productItems, page} = useContext(UserContext);
  const [usersCart, setUsersCart] = useState([])
  useEffect(() => {
    const forusersCart = cart.reduce((all, item) => {
      debugger;
      let product = productItems.filter(pitem => pitem.id === item.productid);
  
      if (product.length) {
        product.map(ptitem => {
          all.push({...ptitem, carduid : item.id, units: item.units})
          return;
        })
        
      }
  
      return all;
    }, []);
    setUsersCart(forusersCart);
    console.log('new cart', forusersCart)
  }, [cart])
  

  if (usersCart.length) {
    return (
      <React.Fragment>
        <SelectedProducts usersCart={usersCart} title={page === 'Cart'?`Cart`:null}/>
        {page !== 'Cart' && <ShippingNpayment />}
      </React.Fragment>
    );
  }
  else {
    return (
      <h3>No items in Cart</h3>
    )
  }
}