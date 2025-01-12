import React from 'react';
import Link from 'next/link';

const ProductSection = () => {
    const trendingLinks = [
        { name: 'All Products', href: '/product' },
        { name: 'All Brands', href: '/brand' }
    ];
        
    return (
        <div className="border-b">
            <div className="bg-gray-100 p-4 font-semibold">Browsing</div>
            <ul className="bg-white">
            {trendingLinks.map((link) => (
                <li key={link.name} className="border-t">
                <Link href={link.href} className="block p-4 hover:bg-gray-100">
                    {link.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ProductSection;