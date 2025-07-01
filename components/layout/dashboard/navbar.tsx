'use client'
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import CustomImage from '@/components/shared/custom-image';
import { Bell } from '@/svgs';

interface DashboardNavbarProps {
    toggleSidebar: () => void;
}

const Navbar: React.FC<DashboardNavbarProps> = ({ toggleSidebar }) => {
    return (
        <div className='flex items-center bg-transparent gap-3 justify-between lg:px-12 px-4 w-full py-4'>
            {/* Left Part */}
            <div className='flex items-center gap-4'>
                {/* Hamburger Menu - only show on mobile */}
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden block text-primary text-2xl"
                >
                    <RxHamburgerMenu />
                </button>

                {/* Search Bar */}
                <div className='bg-white rounded-full px-3 flex border border-border items-center gap-2 sm:w-60 w-40 lg:w-96 py-1'>
                    <IoSearchOutline className="text-gray-500 text-lg" />
                    <input
                        type="text"
                        className='bg-transparent outline-none py-1 w-full text-sm text-gray-700'
                        placeholder='Search'
                    />
                </div>
            </div>

            {/* Right Part */}
            <div className='flex items-center w-fit gap-3'>
                <div className='bg-white xs:h-10 xs:w-10 w-9 h-9 flex justify-center items-center rounded-full border border-border'>
                    <Bell />
                </div>
                <CustomImage
                    alt='profile'
                    src={'/assets/images/profile.png'}
                    className='xs:h-10 xs:w-10 w-9 h-9 rounded-full'
                />
            </div>
        </div>
    );
};

export default Navbar;
