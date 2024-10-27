import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Ensure the file name and path are correct
import './index.css';  // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
