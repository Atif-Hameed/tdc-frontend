import Container from '@/components/shared/container'
import Heading from '@/components/shared/heading'
import Image from 'next/image'
import React from 'react'
import cofounder from '/public/assets/website/cofounder.png'

const CofounderSection = () => {
    return (
        <div className='py-7'>
            <Container>
                <div className="grid max-w-7xl mx-auto md:px-8 gap-4 lg:grid-cols-2 grid-cols-1">
                    <div className="bg-white p-2  mx-auto rounded-2xl shadow-[#12693F14] shadow-2xl ">
                        <Image src={cofounder} alt='cofounder' className='w-full rounded-2xl h-full object-contain' />
                    </div>

                    <div className="">
                        <div className="">
                            <Heading className='!text-black md:max-w-4xl !text-left md:!leading-12 !font-barlow !font-bold md:!text-[40px]'>
                                Our Co-Founder and CTO: Driving transparent, scalable impact
                            </Heading>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
                                <p className='font-inter text-base text-semiBlack'>As Co-Founder and Chief Technology Officer, Laurent Poyet brings to The Trillion Dollar Challenge the innovative vision and technical expertise crucial for our monumental mission. He is the architect behind the robust blockchain infrastructure that ensures every donation is secure, traceable, and transparent, from your wallet to the green organizations actively saving our planet.</p>
                                <p className='font-inter text-base text-semiBlack'>Laurent's commitment to cutting-edge technology not only builds trust but also scales our platform to mobilize the global collective effort needed to achieve our Trillion Dollar vision, empowering unprecedented environmental impact through digital innovation.</p>
                            </div>
                        </div>

                        <div className="">
                            <h1 className='font-barlow font-semibold text-xl'>Laurent Poyet</h1>
                            <p className='text-base font-teacher'>Co-Founder</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default CofounderSection