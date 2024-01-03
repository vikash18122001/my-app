// Cart.js
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart function
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default Cart;
