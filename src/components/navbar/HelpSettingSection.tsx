import React from 'react';
import Link from 'next/link';

const HelpSettingSection = () => {
    const trendingLinks = [
        { name: 'Your Account', href: '/account' },
        { name: 'English', href: '/setting/language' },
        { name: 'United States', href: '/setting/location' },
        { name: 'Sign in', href: '/signin' }
    ];
        
    return (
        <div className="border-b">
            <div className="bg-gray-100 p-4 font-semibold">Help & Setting</div>
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

export default HelpSettingSection;