'use client';

import React from 'react';
import Container from '@/components/shared/container';
import Link from 'next/link';
import { ArrowSign } from '@/svgs';

type Breadcrumb = {
    label: string;
    href: string;
};

interface HeroSectionProps {
    title: string;
    description: string;
    breadcrumbs: Breadcrumb[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    breadcrumbs,
}) => {
    return (
        <div className="">
            <Container className="!px-0  relative">
                <div
                    style={{ backgroundImage: "url('/assets/website/customherobg.jpg')" }}
                    className="h-full w-full text-white bg-cover bg-center bg-no-repeat"
                >

                    <div className="z-30 relative max-w-7xl mx-auto px-7 md:px-10 lg:px-14 py-20 md:py-24">


                        <div className="relative z-30 py-3 flex items-center gap-2  text-sm text-gray-200">
                            {breadcrumbs.map((crumb, index) => (
                                <span key={index} className='flex items-center gap-2 cursor-pointer'>
                                    <Link href={crumb.href} className="hover:underline text-white cursor-pointer">
                                        {crumb.label}
                                    </Link>
                                    {index < breadcrumbs.length - 1 && <span className="mx-1"><ArrowSign /></span>}
                                </span>
                            ))}
                        </div>
                        <div className="text-white  md:items-center grid grid-cols-1 md:grid-cols-2">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-barlow leading-tight">
                                {title}
                            </h1>
                            <p className="text-base lg:text-lg  leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-[#000000] opacity-55  pointer-events-none" />
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
