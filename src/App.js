//app.js
import React, { useState } from 'react';
import Login from './Login';
import ProductCard from './ProductCard';
import Home from './home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        // Render protected components here
        <Home/>
      )}
    </div>
  );
};


export default App;
