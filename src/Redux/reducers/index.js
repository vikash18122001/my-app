// reducers.js
import { combineReducers } from 'redux';

const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    // Add more cases for other actions like removing from cart, updating quantity, etc.
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add more reducers if needed
});

export default rootReducer;
