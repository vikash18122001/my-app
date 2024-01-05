import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './Redux/actions';
import toast from 'react-hot-toast';


const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
    toast.success("added to cart");
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex flex-col items-center gap-4">
        <img className="w-48 h-48 object-cover rounded-md" src={product.thumbnail} alt="Product" />
        <div className="text-xl font-bold">{product.title}</div>
        <div className="text-gray-700">${product.price}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductCard);
