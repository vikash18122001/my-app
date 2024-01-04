import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './Redux/actions';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
   
  };

  return (
    <div >
      <div className='flex'>
      <div><img src={product.thumbnail} alt="Product" /></div>
      <div >{product.title}</div>
      <div>$ {product.price}</div>
      <div><button onClick={handleAddToCart}>Add to Cart</button></div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductCard);
