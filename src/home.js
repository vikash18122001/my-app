import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import PriceFilter from './PriceFliter';
import {useNavigate } from 'react-router-dom';

const Home = ({ token, isLoggedIn }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Invalid data format:', data);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token, isLoggedIn]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handlePriceFilter = (value) => {
    setPriceFilter(value);
  };
  
    
  
    const handleButtonClick = () => {
     
      navigate('/cart');
    };
  

  const applyPriceFilter = (filteredProducts) => {
    if (priceFilter === 'lowToHigh') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceFilter === 'highToLow') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      return filteredProducts;
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredAndSortedProducts = applyPriceFilter(filteredProducts);

  return (
    <div>
      <button onClick={handleButtonClick}>Cart</button>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
      <PriceFilter onPriceChange={handlePriceFilter} />

      {filteredAndSortedProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Home;