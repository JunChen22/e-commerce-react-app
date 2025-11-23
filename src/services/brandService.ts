import { BrandProduct } from '@/interfaces/brand/BrandProduct';

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/brand";

export const brandService = {

    // Fetch brand product
    async getBrandProduct(brandSlug: string): Promise<BrandProduct> {
        const response = await fetch(`${API_URL}/${brandSlug}`);
        if (!response.ok) {
            throw new Error('Failed to fetch brand product');
        }
        return response.json();
    }
}