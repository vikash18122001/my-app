import React from 'react';

const PriceFilter = ({ onPriceChange }) => {
  return (
    <div>
      <label>Filter by Price:</label>
      <select onChange={(e) => onPriceChange(e.target.value)}>
        <option value="">All</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
};

export default PriceFilter;