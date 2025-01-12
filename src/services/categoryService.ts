import { CategoryDetail } from '@/interfaces/category/CategoryDetail';
import { CategoryProduct } from '@/interfaces/category/CategoryProduct';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const categoryService = {

  async getCategoryDetail(categorySlug: string): Promise<CategoryDetail> {
    const response = await fetch(`${API_URL}/category/${categorySlug}/subcategory`);
    if (!response.ok) {
      throw new Error('Failed to fetch category detail');
    }
    return response.json();
  },

  async getCategoryProducts(categorySlug: string): Promise<CategoryProduct> {
    const response = await fetch(`${API_URL}/category/product/${categorySlug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch category products');
    }
    return response.json();
  }
};
