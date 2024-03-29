import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';
import {createRoot} from "react-dom/client"
import "./index.css"

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);