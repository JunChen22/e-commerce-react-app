"use client";

import React, { useEffect, useState } from "react";
import { cartService } from "@/services/cartService";
import { ShoppingCart } from "@/interfaces/cart/ShoppingCart";
import { CartItem } from "@/interfaces/cart/CartItem";

export default function CartPage() {
    const [cart, setCart] = useState<ShoppingCart | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = async () => {
        try {
            const cartData = await cartService.getCart();
            console.log(cartData);
            setCart(cartData);
        } catch (error) {
            console.error("Failed to load cart:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateQuantity = async (sku: string, newQuantity: number) => {
        try {
            await cartService.updateQuantity(sku, newQuantity);
            await loadCart(); // Reload cart
        } catch (error) {
            console.error("Failed to update quantity:", error);
            alert("Failed to update quantity");
        }
    };

    const handleRemoveItem = async (sku: string) => {
        try {
            await cartService.removeItem(sku);
            await loadCart(); // Reload cart
        } catch (error) {
            console.error("Failed to remove item:", error);
            alert("Failed to remove item");
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p>Loading cart...</p>
            </div>
        );
    }

    if (!cart || cart.items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                    <a href="/" className="text-blue-500 hover:underline">
                        Continue Shopping
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

                <div className="bg-white rounded-lg shadow">
                    {cart.items.map((item) => (
                        <div
                            key={item.productSku}
                            className="flex items-center p-4 border-b last:border-b-0"
                        >
                            <img
                                src={item.productPic}
                                alt={item.productName}
                                className="w-20 h-20 object-cover rounded mr-4"
                            />

                            <div className="flex-1">
                                <h3 className="font-semibold">{item.productName}</h3>
                                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleUpdateQuantity(item.productSku, item.quantity - 1)}
                                    className="px-2 py-1 bg-gray-200 rounded"
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>

                                <span className="px-4">{item.quantity}</span>

                                <button
                                    onClick={() => handleUpdateQuantity(item.productSku, item.quantity + 1)}
                                    className="px-2 py-1 bg-gray-200 rounded"
                                >
                                    +
                                </button>
                            </div>

                            <p className="mx-4 font-semibold">
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>

                            <button
                                onClick={() => handleRemoveItem(item.productSku)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-white rounded-lg shadow p-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-lg">Total Items:</span>
                        <span className="text-lg font-semibold">{cart.totalItems}</span>
                    </div>
                    <div className="flex justify-between items-center text-xl font-bold">
                        <span>Total:</span>
                        <span>${cart.totalPrice.toFixed(2)}</span>
                    </div>

                    <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}