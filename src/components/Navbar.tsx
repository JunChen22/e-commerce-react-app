import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icon"
import NavItems from "./NavItems"
import Cart from "./Cart"
import SearchBar from "./SearchBar"

const Navbar = () => {
    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-white'>
                <MaxWidthWrapper>
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center'>
                            {/* TODO: mobile nav */}

                            <div className='ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h-10 w-10' />
                                </Link>
                            </div>

                            <div className="flex items-center gap-4">
                                <SearchBar />
                                {/* Other header items */}
                            </div>

                            <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                                <NavItems />
                            </div>
                            
                            <Cart />    
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar