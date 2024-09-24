import { useEffect, useState } from "react";
import productAxiosInstance from "../../services/productService";
import paymentAxiosInstance from "../../services/paymentService";

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
      const response = await productAxiosInstance.get(`/products`);
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
      await paymentAxiosInstance.post(`/payment`, {
        productId: selectedProduct.id,
      });
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
