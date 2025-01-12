import { useState, useEffect } from 'react';
import { CategoryProduct } from '@/interfaces/category/CategoryProduct';
import { categoryService } from '@/services/categoryService';

export function useCategoryProducts(categorySlug: string) {
  const [data, setData] = useState<CategoryProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await categoryService.getCategoryProducts(categorySlug);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categorySlug]);

  return { data, isLoading, error };
}