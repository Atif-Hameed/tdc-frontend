import React from 'react'
import Container from '@/components/shared/container'
import Heading from '@/components/shared/heading'
import Image from 'next/image'
import transparent from '/public/assets/website/transparent.png'
import heart from '/public/assets/website/hearthand.svg'


const TransparentSection = () => {
    return (
        <div className='py-6'>
            <Container>
                <div className="space-y-4 max-w-7xl mx-auto md:px-8">
                    <div className=" space-y-4">
                        <Heading className='!text-black md:max-w-4xl !text-left md:!leading-12 !font-barlow !font-bold md:!text-[50px]'>
                            Every contribution creates transparent impact
                        </Heading>

                        <div className="flex justify-center">
                            <Image src={transparent} alt='transparent'/>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 py-4 items-start gap-8 md:grid-cols-2 grid-cols-1">
                        <div className="max-w-md">
                            <Image src={heart} alt='heart'  className=''/>
                        </div>
                        <div className="">
                            <p className='font-inter text-base text-semiBlack'>Contributions from tribes lead to significant funding, helping implement crucial environmental initiatives and ensuring a sustainable future. Up to 55% of funds raised will be allocated to pre-vetted green focused organizations. By making use of stablecoins on the Blockchain, your donation can be traced until it reaches your intended recipient. </p>
                        </div>
                        <div className="">
                            <p className='font-inter text-base text-semiBlack'>The Blockchain will ensure trust, transparency and integrity of the Trillion Dollar Challenge.Every dollar donated will be accounted for from leaving your wallet until it reaches the wallet of the organisation actively saving the planet.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TransparentSection