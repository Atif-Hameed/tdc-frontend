import React from 'react'
import Container from '@/components/shared/container'
import Image from 'next/image'
import principle from '/public/assets/website/principle1.png'
import principle2 from '/public/assets/website/principle2.png'
import Heading from '@/components/shared/heading'
import { principleData } from '@/data'

const PrincipleSection = () => {
    return (
        <div className='py-10'>
            <Container>
                <div className="grid max-w-7xl mx-auto md:px-10 gap-10 lg:grid-cols-2 grid-cols-1">
                    <div className="order-2 md:order-1">
                        <div className="">
                            <Heading className='!text-black !text-left !font-barlow !font-bold md:!text-[40px]'>
                                Our principle to the planet
                            </Heading>

                            <div className="">
                                {
                                    principleData.map((item, index) => (
                                        <>
                                            <div className="py-2">
                                                <div className="flex gap-2.5 py-4">
                                                    <Image src={item.icon} alt={item.icon} className='w-10 h-10' />
                                                       <h1 className='text-[28px] font-barlow font-bold'>{item.title}</h1>
                                                </div>
                                                <div className="">
                                                    <p className='text-base font-barlow font-normal text-semiBlack'>{item.description}</p>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 order-1 md:order-2">
                        <Image src={principle} alt='principle' />
                        <Image src={principle2} alt='principle' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PrincipleSection