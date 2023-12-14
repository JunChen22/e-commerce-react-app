import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductDetail } from '../interfaces/product/ProductDetail';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch product data from your Java Spring backend API
    axios.get('http://localhost:8080/product/1')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Product detail</h1>
    </div>
  );
};

export default ProductList;