// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => { // Correct the prop name
  if (!product) {
    return <p>No product available</p>;
  }

  return (
    <div>
      <img src={product.thumbnail} alt="Product" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;