import { ProductListingDTO } from '@/interfaces/ProductListing';

// localhost:8080/product/listAll
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const productApi = {
    async getAllProducts(): Promise<ProductListingDTO[]> {
        const response = await fetch(`${API_URL}/product/listAll`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return response.json();
    }
};