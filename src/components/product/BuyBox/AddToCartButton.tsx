import React from "react";

const AddToCartButton: React.FC = () => {
    // const handleClick = () => {
    //     alert("Added to cart (placeholder)!");
    // };

    return (
        <button
            // onClick={handleClick}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mb-2"
        >
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
