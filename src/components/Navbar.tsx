'use client'
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Menu, X } from 'lucide-react';  // Icons for the hamburger menu and close button
import { Icons } from "./Icon"
import Cart from "./Cart"
import SearchBar from "./SearchBar"
import React, { useState } from 'react';
import MainNavigation from '@/components/navbar/MainNavigation';

const Navbar = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleToggleNav = () => {
      setIsMobileNavOpen(!isMobileNavOpen);
    };
    
    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-white'>
                <MaxWidthWrapper>
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center'>
                            <div className='lg:hidden'>
                                <button onClick={handleToggleNav} className='p-2'>
                                {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>

                            <div className='ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    {/* <Icons.logo className='h-10 w-10' /> */}
                                    <Icons.logo/>
                                </Link>
                            </div>

                            <div className="flex items-center gap-4">
                                <SearchBar />
                                {/* Other header items */}
                            </div>
                            
                            <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                                <MainNavigation />
                            </div>

                            <Cart />    
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>

            {/* Mobile Navigation Sidebar */}
            {isMobileNavOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={handleToggleNav} />
            )}

        </div>
    )
}

export default Navbar