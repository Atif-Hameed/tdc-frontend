import React from 'react'
import Container from '@/components/shared/container'
import Image from 'next/image'
import founder from '/public/assets/website/founder.png'
import Heading from '@/components/shared/heading'

const FounderSection = () => {
    return (
        <div className='py-7'>
            <Container>
                <div className="grid max-w-7xl mx-auto md:px-8 gap-4 lg:grid-cols-2 grid-cols-1">
                    <div className="md:order-1 order-2">
                        <div className="">
                            <Heading className='!text-black md:max-w-4xl !text-left md:!leading-12 !font-barlow !font-bold md:!text-[40px]'>
                                A Message from Our Founder: Why Now?
                            </Heading>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
                                <p className='font-inter text-base text-semiBlack'>My name is Pietro van Heerden, the founder of The Trillion Dollar Challenge. I'm from Johannesburg, South Africa. I studied Accounting & Financial Management at the University of Johannesburg. I've been involved in the educational industry for the last 12 years, specifically teaching and facilitating skills transfer in the areas of Fintech and Digital Disruption in Financial Services.</p>
                                <p className='font-inter text-base text-semiBlack'>The planet is dying, and we are the generation that will go down in history as either the one who turned the decline around, or the one who did nothing. We have a once in a lifetime opportunity to actually make the world a better place and not just talk about it. This crowdfunding challenge aims to raise a Trillion dollars to go to organisations who can actually make a positive difference in saving the planet.</p>
                            </div>
                        </div>

                        <div className="">
                            <h1 className='font-barlow font-semibold text-xl'>Pietro van Heerden</h1>
                            <p className='text-base font-teacher'>Founder</p>
                        </div>
                    </div>
                    <div className="bg-white order-1 md:order-2  p-2  mx-auto rounded-2xl shadow-[#12693F14] shadow-2xl ">
                        <Image src={founder} alt='founder' className='w-full rounded-2xl h-full object-contain' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FounderSection