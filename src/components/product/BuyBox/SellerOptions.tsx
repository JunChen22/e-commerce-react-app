import React, { useState } from "react";

interface Seller {
    id: string;
    name: string;
    price: number;
}

interface SellerOptionsProps {
    sellers: Seller[];
}

const SellerOptions: React.FC<SellerOptionsProps> = ({ sellers }) => {
    const [selectedSeller, setSelectedSeller] = useState(sellers[0].id);

    return (
        <div>
            <h3 className="font-semibold mb-2">Other Sellers:</h3>
            <ul>
                {sellers.map((seller) => (
                    <li key={seller.id} className="flex justify-between items-center mb-1">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="seller"
                                value={seller.id}
                                checked={selectedSeller === seller.id}
                                onChange={() => setSelectedSeller(seller.id)}
                            />
                            {seller.name}
                        </label>
                        <span className="font-medium">${seller.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SellerOptions;
