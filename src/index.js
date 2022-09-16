// react
import React from 'react';
// react-dom
import ReactDOM from 'react-dom/client';
// react-router-dom
import { BrowserRouter } from 'react-router-dom';
// app
import App from './App';
// css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
