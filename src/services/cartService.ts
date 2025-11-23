import { CartItem } from '@/interfaces/cart/CartItem'
import { ShoppingCart } from "@/interfaces/cart/ShoppingCart";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/cart";

export const cartService = {

    // Get cart
    async getCart(): Promise<ShoppingCart> {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(`${API_URL}`, {
            method: "GET",
            credentials: "include",  // Sends cartId cookie
            headers: {
                ...(token && { "Authorization": `Bearer ${token}` })
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch cart');
        }
        return response.json();
    },

    // Add item to cart
    async addItem(productSku: string, quantity: number): Promise<void> {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(`${API_URL}/items/${productSku}?quantity=${quantity}`, {
            method: "POST",
            credentials: "include",  // Sends cartId cookie
            headers: {
                "Content-Type": "application/json",
                ...(token && { "Authorization": `Bearer ${token}` })
            }
        });

        if (!response.ok) {
            throw new Error('Failed to add item to cart');
        }
    },

    // Update item quantity
    async updateQuantity(productSku: string, quantity: number): Promise<void> {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(`${API_URL}/items/${productSku}?quantity=${quantity}`, {
            method: "PATCH",  // or "PUT" if you keep PUT
            credentials: "include",  // Sends cartId cookie
            headers: {
                ...(token && { "Authorization": `Bearer ${token}` })
            }
        });

        if (!response.ok) {
            throw new Error('Failed to update item quantity');
        }
    },

    // Remove item from cart
    async removeItem(productSku: string): Promise<void> {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(`${API_URL}/items/${productSku}`, {
            method: "DELETE",
            credentials: "include",  // Sends cartId cookie
            headers: {
                ...(token && { "Authorization": `Bearer ${token}` })
            }
        });

        if (!response.ok) {
            throw new Error('Failed to remove item from cart');
        }
    }
}