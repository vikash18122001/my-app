import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.length;
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  // Create an object to group items by their id
  const groupedItems = cartItems.reduce((grouped, item) => {
    if (!grouped[item.id]) {
      grouped[item.id] = { ...item, quantity: 1 };
    } else {
      grouped[item.id].quantity += 1;
    }
    return grouped;
  }, {});

  return (
    <div>
      <p>Cart Count: {cartCount}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <ul>
        {Object.values(groupedItems).map(item => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
            {item.quantity > 1 && <p>Quantity: {item.quantity}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
