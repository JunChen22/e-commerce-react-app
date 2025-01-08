'use client';

import { useProducts } from '@/hooks/useProducts';
import ProductList from '@/components/product/ProductList';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';

export default function ProductsPage() {
  const { products, isLoading, error, refetch } = useProducts();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <ProductList products={products} />
      </div>
    </div>
  );
}