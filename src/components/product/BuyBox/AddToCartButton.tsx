"use client";

import React, { useState } from "react";
import { cartService } from "@/services/cartService";

interface AddToCartButtonProps {
    productSku: string;
    quantity?: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({productSku, quantity = 1}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleAddToCart = async () => {
        setIsLoading(true);
        setShowError(false);

        try {
            await cartService.addItem(productSku, quantity);

            // Show success message
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);

        } catch (error) {
            console.error("Failed to add item to cart:", error);
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className={`add-to-cart-btn ${showSuccess ? 'success' : ''} ${showError ? 'error' : ''} ${isLoading ? 'loading' : ''}`}
            >
                {showSuccess ? "✓ Added to Cart!" : showError ? "Failed to add" : isLoading ? "Adding..." : "Add to Cart"}
            </button>

            <style jsx>{`
                .add-to-cart-btn {
                    width: 100%;
                    font-weight: bold;
                    padding: 8px 16px;
                    border-radius: 4px;
                    margin-bottom: 8px;
                    border: none;
                    cursor: pointer;
                    background-color: #eab308;
                    color: black;
                    transition: all 0.3s ease;
                }

                .add-to-cart-btn:hover:not(.loading):not(.success):not(.error) {
                    background-color: #ca8a04;
                }

                .add-to-cart-btn.success {
                    background-color: #10b981;
                    color: white;
                }

                .add-to-cart-btn.error {
                    background-color: #ef4444;
                    color: white;
                }

                .add-to-cart-btn.loading {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .add-to-cart-btn:disabled {
                    cursor: not-allowed;
                }
            `}</style>
        </>
    );
};

export default AddToCartButton;