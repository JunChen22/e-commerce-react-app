import { CartItemDTO } from '@/interfaces/cart/CartItemDTO'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const cartService = {

    // Fetch all brand
    async getCartItems(): Promise<CartItemDTO[]> {
        const response = await fetch(`${API_URL}/cart/list`);
        if (!response.ok) {
            throw new Error('Failed to fetch brands');
        }
        return response.json();
    }
}