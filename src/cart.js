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
    <div className=" p-4 rounded-md shadow-md">
      <p className="text-lg font-semibold mb-4">Shopping Cart</p>
      <p className="text-gray-700 font-semibold">Cart Count: {cartCount}</p>
      <p className="text-gray-700 font-semibold">Total Amount: ${totalAmount.toFixed(2)}</p>
      <ul className="mt-4">
        {Object.values(groupedItems).map(item => (
          <li key={item.id} className="flex items-center mb-4">
            <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-cover rounded-md mr-4" />
            <div>
              <p className="text-gray-800">{item.title}</p>
              {item.quantity > 1 && <p className="text-gray-600">Quantity: {item.quantity}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
