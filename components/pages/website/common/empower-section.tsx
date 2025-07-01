import Image from 'next/image'
import React from 'react'
import Container from '@/components/shared/container'
import Button from '@/components/shared/custom-btn'
import Heading from '@/components/shared/heading'
import empower from '/public/assets/website/empower.svg'
import box from '/public/assets/website/box.svg'


const EmpowerSection = () => {
    return (
        <div className='py-7 md:px-8 '>
            <Container>
                <div className="bg-primary max-w-7xl mx-auto  relative p-6 rounded-2xl">
                    <div className="lg:flex justify-between items-center p-2">
                        <div className="max-w-4xl space-y-3  text-left">
                            <Heading className='text-white  md:!text-[40px] !text-left !font-bold !font-barlow'>Your actions <span className='text-orange'>empower</span> those in need</Heading>

                            <div className="md:flex items-center py-4 gap-5 max-w-lg">
                                <Image src={empower} alt='empower' className='object-contain h-auto w-auto'/>
                                <p className='text-white'>More than thousands people from around the world have joined and helped our community.</p>
                            </div>
                        </div>
                        <div className="">
                            <Button label='JOIN A TRIBE' style='!bg-green rounded-lg !py-3 text-white' />
                        </div>
                    </div>

                    <div className="absolute md:block hidden bottom-0 right-[25%]">
                        <Image src={box} alt='box' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default EmpowerSection