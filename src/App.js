import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './home';
import Cart from './Cart';

const App = () => {
  const [token, setToken] = useState('');

  const handleLoginSuccess = (userToken) => {
    // Set the token in the state
    setToken(userToken);
  };

  const ProtectedRoute = ({ element }) => {
    // Check if the user is logged in, if not, redirect to the login page
    return token ? element : <Navigate to="/" />;
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
             path="/"
             element={
               !token ? (
                 <Login setToken={handleLoginSuccess} />
               ) : (
                 <Navigate to="/home" />
               )
             }
          />
          <Route
            path="/home"
            element={<ProtectedRoute element={<Home />} />}
          />
          <Route
            path="/cart"
            element={<ProtectedRoute element={<Cart />} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
