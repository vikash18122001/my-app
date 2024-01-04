import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './Redux/actions';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
    console.log(product)
  };

  return (
    <div>
      
      <img src={product.thumbnail} alt="Product" />
      <h3>{product.title}</h3>
      <p>$ {product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductCard);
