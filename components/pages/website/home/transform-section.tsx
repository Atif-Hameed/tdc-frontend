/* eslint-disable react/no-unescaped-entities */
import Heading from '@/components/shared/heading'
import Image from 'next/image'
import transfrom from '/public/assets/website/transform.png'
import React from 'react'
import Container from '@/components/shared/container'
import { transform } from '@/data'


const TransformSection = () => {
    return (
        <div className='py-7'>
            <Container>
                <div className="grid lg:grid-cols-2 md:px-8 grid-cols-1 gap-12">
                    <div className="">
                        <div
                            className="bg-white  p-2  mx-auto rounded-2xl shadow-[#12693F14] shadow-2xl ">
                            <Image src={transfrom} alt='transform' className='w-full rounded-2xl h-auto object-contain' />
                        </div>
                    </div>
                    <div className="md:py-4">
                        <Heading className='!text-black  md:!text-[40px] font-bold md:!leading-12 !font-barlow text-left'>
                            Transforming good intentions into good actions
                        </Heading>
                        <p className='text-xl py-5 md:py-14 leading-8'>
                            At The Trillion Dollar Challenge, our mission is simple to make a positive impact in the lives of those who need it most. Our organization has been dedicated to Briefly describing the main focus, e.g., 'improving education for underprivileged children', 'providing clean water solutions', or 'offering medical aid to crisis-hit regions'.
                        </p>


                        <div className="grid md:grid-cols-2 py-2 gap-4 md:py-6 md:gap-8 grid-cols-1">
                            {transform.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col  gap-3 items-center text-center p-4 bg-white border-l-2 border-borderColor "
                                >
                                    <h2 className="text-3xl font-bold text-neutral" >
                                        {item.number}
                                    </h2>
                                    <p className="mt-2 text-sm text-darkGray">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TransformSection