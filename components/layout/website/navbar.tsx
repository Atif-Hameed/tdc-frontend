'use client';

import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import CustomImage from '@/components/shared/custom-image';
import CustomLink from '@/components/shared/custom-link';
import Button from '@/components/shared/custom-btn';
import { WebNavbarData } from '@/data';
import Container from '@/components/shared/container';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setMenuOpen(prev => !prev);

    // Auto close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <div className='bg-white'>
            <div className="relative  ">
                {/* Overlay */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                )}

                {/* Top Bar */}
                <Container className="flex items-center justify-between py-4 lg:px-12 px-4 w-full relative z-50">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-4">
                        <CustomLink href="/">
                            <CustomImage
                                alt="Logo"
                                src="/assets/images/webLogo.svg"
                                className="h-[70px] w-auto"
                            />
                        </CustomLink>
                    </div>

                    {/* Nav Links (Desktop only) */}
                    <div className="hidden lg:flex items-center gap-8">
                        {WebNavbarData.map((e, i) => {
                            const isActive = pathname === e.src;

                            return (
                                <CustomLink
                                    key={i}
                                    href={e.src}
                                    className={`text-darkGray transition-all hover:text-primary hover:font-bold ${isActive ? 'text-primary font-bold' : ''
                                        }`}
                                >
                                    {e.name}
                                </CustomLink>
                            );
                        })}
                    </div>
                    {/* Hamburger  */}
                    <div className="flex items-center gap-3">
                        <div className="lg:hidden block  text-2xl">
                            <button onClick={toggleMenu} aria-label="Toggle Menu">
                                {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
                            </button>
                        </div>

                        {/* Buttons (Desktop) */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button
                                label="REGISTER"
                                style="bg-transparent text-primary font-bold !px-6"
                            />
                            <Button
                                label="LOGIN"
                                style="bg-primary text-white font-bold rounded-xl !px-6"
                                onClick={() => alert('hi')}
                            />
                        </div>
                    </div>
                </Container>

                {/* Mobile Menu Drawer */}
                <div
                    className={`lg:hidden fixed top-0 left-0 h-full w-3/4 max-w-[300px] bg-white !z-50 shadow-xl transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >

                    <div className="flex flex-col gap-4 h-full justify-between p-6">


                        <div className='flex flex-col gap-6 w-full'>
                            <CustomLink href="/">
                                <CustomImage
                                    alt="Logo"
                                    src="/assets/images/webLogo.svg"
                                    className="h-[70px] w-auto -ml-3"
                                />
                            </CustomLink>
                            {WebNavbarData.map((e, i) => (
                                <CustomLink
                                    key={i}
                                    href={e.src}
                                    className="text-darkGray hover:text-primary font-medium"
                                >
                                    {e.name}
                                </CustomLink>
                            ))}
                        </div>

                        <div className='flex flex-col gap-4 w-full'>
                            <Button
                                label="REGISTER"
                                style="bg-transparent  text-primary font-bold w-full"
                            />
                            <Button
                                label="LOGIN"
                                style="bg-primary  text-white font-bold rounded-xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
