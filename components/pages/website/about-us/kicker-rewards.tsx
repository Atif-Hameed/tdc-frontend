/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Container from '@/components/shared/container'
import Image from 'next/image'
import rewards from '/public/assets/website/rewards.png'
import Heading from '@/components/shared/heading'

const KickerRewardSection = () => {
    return (
        <div className='py-7'>
            <Container>
                <div className="grid md:px-8 max-w-7xl mx-auto lg:gap-10 md:items-center gap-4 lg:grid-cols-2 grid-cols-1">
                    <div className="md:order-1 order-2">
                        <div className="">
                            <Heading className='!text-black md:!leading-12 !text-left !font-barlow !font-bold md:!text-[40px]'>
                                The Kicker: Rewards for Impact & Our Mobilization Call
                            </Heading>
                            <div className="space-y-3 py-4 ">
                                <p className='font-inter font-normal text-base text-semiBlack'>But here's the kicker: you actually have a chance to get something in return for your fundraising efforts. Not just a badge or bragging rights, but actual money as a reward for the top performing tribes.</p>
                                <p className='font-inter font-normal text-base text-semiBlack'>So let's put our money where mouths are and mobilise a billion people to raise a trillion dollars and help save the only planet we have!</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-5/6 mx-auto md:order-2 order-1">
                        <div
                            className="bg-white  p-2  mx-auto rounded-2xl shadow-[#12693F14] shadow-2xl ">
                            <Image src={rewards} alt='' className='rounded-2xl' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default KickerRewardSection