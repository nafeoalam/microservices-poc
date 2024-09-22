import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:3001/products'); // Adjust the URL as needed
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCancelOrder = () => {
    setSelectedProduct(null);
  };
  const handleMakePayment = async () => {
    if (selectedProduct) {
      await axios.post('http://localhost:3002/payment', { productId: selectedProduct.id }); // Adjust the URL as needed
      // Optionally, update inventory here
      await axios.post('http://localhost:3003/inventory/update', { productId: selectedProduct.id }); // Adjust the URL as needed
      setSelectedProduct(null);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleOrder(product)}>Order</button>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <div>
          <h2>Order: {selectedProduct.name}</h2>
          <button onClick={handleMakePayment}>Make Payment</button>
          <button onClick={handleCancelOrder}>Cancel Order</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
