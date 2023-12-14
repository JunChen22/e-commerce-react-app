import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../interfaces/product/Product';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch product data from your Java Spring backend API
    axios.get('http://localhost:8080/product/listAll')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.salePrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;