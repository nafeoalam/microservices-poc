import React from 'react';
import './App.css';
import ProductList from './components/product/ProductList';

function App() {
  const logoUrl = 'https://d22a9cef6rzksr.cloudfront.net/ms-logo.png'; // Replace with your CloudFront URL and file path

  return (
    <div className="App">
       <header className="App-header">
        <img src={logoUrl} className="App-logo" alt="Logo" />
      </header>
      <div className="App-content">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
