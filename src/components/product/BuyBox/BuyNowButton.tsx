import React from "react";

const BuyNowButton: React.FC = () => {
    // const handleClick = () => {
    //     alert("Buy Now clicked (placeholder)!");
    // };

    return (
        <button
            // onClick={handleClick}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
            Buy Now
        </button>
    );
};

export default BuyNowButton;
