'use client';
import React, {useState} from "react";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";
import SellerOptions from "@/components/product/BuyBox/SellerOptions";

interface BuyBoxProps {
    product: {
        name: string;
        sku: string;
        pic: string;
        price: number;
    };
    sellers?: { id: string; name: string; price: number }[];
}

const BuyBox: React.FC<BuyBoxProps> = ({product, sellers = []}) => {
    const [quantity, setQuantity] = useState(1);
    const maxQuantity = 10;

    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuantity(parseInt(e.target.value));
    };

    return (
        <>
            <div className="buy-box">
                <p className="price">
                    ${product.price.toFixed(2)}
                </p>

                <div className="quantity-selector">
                    <label htmlFor="quantity">Quantity: </label>
                    <select
                        id="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                    >
                        {Array.from({length: maxQuantity}, (_, i) => i + 1).map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>

                <AddToCartButton productSku={product.sku} quantity={quantity} />
                <BuyNowButton />

                {sellers.length > 0 && (
                    <div className="sellers-section">
                        <SellerOptions sellers={sellers} />
                    </div>
                )}
            </div>

            <style jsx>{`
                .buy-box {
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    padding: 24px;
                    width: 320px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    background-color: white;
                    position: sticky;
                    top: 80px;
                }

                .price {
                    font-size: 24px;
                    color: #16a34a;
                    font-weight: 600;
                    margin-bottom: 16px;
                }

                .quantity-selector {
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                }

                .quantity-selector label {
                    margin-right: 8px;
                    font-weight: 500;
                }

                .quantity-selector select {
                    padding: 6px 12px;
                    border: 1px solid #d1d5db;
                    border-radius: 4px;
                    background-color: white;
                    cursor: pointer;
                    font-size: 14px;
                }

                .quantity-selector select:focus {
                    outline: none;
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .sellers-section {
                    margin-top: 24px;
                }
            `}</style>
        </>
    );
};

export default BuyBox;