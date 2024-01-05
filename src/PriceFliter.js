import React from 'react';

const PriceFilter = ({ onPriceChange }) => {
  return (
    <div>
      <div class=" flex my-4">
  <label class="block text-sm font-semibold mb-2" for="priceFilter">Filter by Price:</label>
  <select id="priceFilter" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" onChange={(e) => onPriceChange(e.target.value)}>
    <option value="">All</option>
    <option value="lowToHigh">Low to High</option>
    <option value="highToLow">High to Low</option>
  </select>
</div>

    </div>
  );
};

export default PriceFilter;