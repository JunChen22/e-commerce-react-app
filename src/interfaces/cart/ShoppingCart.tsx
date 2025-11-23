import { CartItem } from "@/interfaces/cart/CartItem";

export interface ShoppingCart {
    cartId: string;
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
}
