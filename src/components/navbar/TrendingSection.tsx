import React, { useState } from 'react';
import Link from 'next/link';

const TrendingSection = () => {
    const trendingLinks = [
        { name: 'Best Sellers', href: '/best-sellers' },
        { name: 'New Releases', href: '/new-releases' },
        { name: 'Recommendations', href: '/recommendations' }
    ];

    return (
        <div className="border-b">
          <div className="bg-gray-100 p-4 font-semibold">Trending</div>
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

export default TrendingSection;