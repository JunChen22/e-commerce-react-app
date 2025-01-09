import { ProductListingDTO } from '@/interfaces/product/ProductListing';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const searchService = {

  // 
  async search(keyword: string): Promise<ProductListingDTO[]> {
    try {
      const response = await fetch(`${API_URL}/search?keyword=${encodeURIComponent(keyword)}`);
      if (!response.ok) {
        throw new Error(`Search failed with status: ${response.status}`);
      }
      const data: ProductListingDTO[] = await response.json();
      return data;
    } catch (error) {
      console.error('Search service error:', error);
      throw error;
    }
  },

  async getSearchSuggestions(keyword: string, limit: number = 5): Promise<ProductListingDTO[]> {
    const results = await this.search(keyword);
    return results.slice(0, limit);
  }
};
