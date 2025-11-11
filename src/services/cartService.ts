import { CartItem } from '@/interfaces/cart/CartItem'

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/cart";

export const cartService = {

    // Fetch all brand
    async getCartItems(): Promise<CartItem[]> {
        const response = await fetch(`${API_URL}/list`);
        if (!response.ok) {
            throw new Error('Failed to fetch brands');
        }
        return response.json();
    }
}