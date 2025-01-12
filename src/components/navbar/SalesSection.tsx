import React from 'react';
import Link from 'next/link';

const SalesSection = () => {
    const trendingLinks = [
        { name: 'Promotion sales', href: '/promotion-sales' },
        { name: 'Flash sales', href: '/flash-sales' }
    ];
        
    return (
        <div className="border-b">
            <div className="bg-gray-100 p-4 font-semibold">Ongoing Sales</div>
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

export default SalesSection;