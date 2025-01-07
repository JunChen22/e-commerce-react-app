import { useState, useEffect } from 'react';
import { ProductListingDTO } from '@/interfaces/ProductListing';
import { productApi } from '@/services/api';

export function useProducts() {
  const [products, setProducts] = useState<ProductListingDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      setError(null);
      const data = await productApi.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    isLoading,
    error,
    refetch: fetchProducts
  };
}