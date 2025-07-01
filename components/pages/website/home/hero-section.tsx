'use client'
import React from 'react';
import Container from '@/components/shared/container';
import Button from '@/components/shared/custom-btn';



const HeroSection = () => {
    return (
            <Container className='!px-0 relative'>
                <div
                    style={{ backgroundImage: "url('/assets/website/herobg.png')" }}
                    className="md:min-h-[84vh]  h-full w-full  relative text-white bg-cover bg-center bg-no-repeat"
                >

                    <div className="z-30 relative max-w-2xl px-7 md:px-14 py-24">
                        <div className="text-white">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                                JOIN THE GLOBAL <br /> CROWDFUNDING <br /> EFFORT
                            </h1>
                            <p className="text-sm md:text-base mb-6 leading-relaxed">
                                Together we can create a healthier planet, and in the process of donating, you
                                stand a chance to make some serious money along the way!
                            </p>

                            <div className="relative">
                                <Button
                                    label="JOIN A TRIBE"
                                    style="bg-primary text-white  z-40 font-bold rounded-xl !px-6"
                                    onClick={() => alert('hi')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-l from-[#00000000] to-[#000000] " />
                </div>
            </Container >
    );
};

export default HeroSection;