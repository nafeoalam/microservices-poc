import React from 'react';
import './App.css';
import ProductList from './components/product/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList />
      </header>
    </div>
  );
}

export default App;
