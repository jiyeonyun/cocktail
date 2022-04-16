import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import Cocktail from './service/cocktail';
const cocktail = new Cocktail();
ReactDOM.render(
  <React.StrictMode>
    <App cocktail={cocktail} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
