import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store'

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
