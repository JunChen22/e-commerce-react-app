'use client';
import React from "react";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";
import SellerOptions from "@/components/product/BuyBox/SellerOptions";

interface BuyBoxProps {
    productName?: string;
    price?: number;
    sellers?: { id: string; name: string; price: number }[];
}

const BuyBox: React.FC<BuyBoxProps> = ({
                                           productName = "Sample Product",
                                           price = 49.99,
                                           sellers = [
                                               { id: "1", name: "Seller One", price: 49.99 },
                                               { id: "2", name: "Seller Two", price: 51.99 },
                                           ],
                                       }) => {
    return (
        <div className="border rounded p-6 w-80 shadow-md bg-white">
            <h2 className="text-xl font-bold mb-2">{productName}</h2>
            <p className="text-2xl text-green-600 font-semibold mb-4">${price.toFixed(2)}</p>

            <AddToCartButton />
            <BuyNowButton />

            <div className="mt-6">
                <SellerOptions sellers={sellers} />
            </div>
        </div>
    );
};

export default BuyBox;
