import { BrandDTO } from '@/interfaces/brand/BrandDTO';
import { BrandProduct } from '@/interfaces/brand/BrandProduct';

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/brand";

export const brandService = {

    // Fetch all brand
    async getAllBrand(): Promise<BrandDTO[]> {
        const response = await fetch(`${API_URL}/listAll`);
        if (!response.ok) {
            throw new Error('Failed to fetch brands');
        }
        return response.json();
    },

    // Fetch all brand with pagination
    async getAllBrandWithPagination(page: number, size: number): Promise<BrandDTO[]> {
        const response = await fetch(`${API_URL}/list?page=${page}&size=${size}`);
        if (!response.ok) {
            throw new Error('Failed to fetch brands');
        }
        return response.json();
    }, 

    // Fetch brand product
    async getBrandProduct(brandSlug: string): Promise<BrandProduct> {
        const response = await fetch(`${API_URL}/${brandSlug}`);
        if (!response.ok) {
            throw new Error('Failed to fetch brand product');
        }
        return response.json();
    }
}