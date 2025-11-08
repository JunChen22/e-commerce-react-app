import { SaleProductListing } from '@/interfaces/sale/SaleProductListing';

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/sale/event";

export const productService = {
    
    async listAllEventSale(): Promise<SaleProductListing[]> {
        const response = await fetch(`${API_URL}/listAllEventSale`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return response.json();
    },

    async getAllEventSaleItem(slug: string): Promise<SaleProductListing[]> {
        const response = await fetch(`${API_URL}/AllEventSaleItem/${slug}`); // Corrected quote here
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return response.json();
    }
}