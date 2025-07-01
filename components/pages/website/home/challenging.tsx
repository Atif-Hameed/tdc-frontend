import Container from '@/components/shared/container'
import Heading from '@/components/shared/heading'
import { challengeData } from '@/data'
import Image from 'next/image'
import React from 'react'

const Challenging = () => {
    return (
        <div>
            <Container>
                <div className="grid md:px-8 py-5 gap-4 md:py-12 lg:grid-cols-2 grid-cols-1">
                    <div className="max-w-lg flex flex-col justify-between gap-3 md:gap-10">
                        <Heading className='!text-black !font-barlow md:!text-[40px] md:!leading-10 !font-bold !text-left'>
                            How It works fueling The Trillion Dollar Challenge
                        </Heading>

                        <p>
                            Learn how simple it is to support projects you care about. Your contribution directly fuels their success, making a real difference and helping us reach The Trillion Dollar Challenge.
                        </p>
                    </div>
                    <div className="">
                        <div className="max-w-4xl mx-auto space-y-6">
                            {challengeData.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-border space-y-3 rounded-xl shadow-md p-6  items-start space-x-4 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <Image src={item.icon} alt='' className='' />
                                    <div>
                                        <h2 className="text-2xl font-semibold font-barlow text-semiBlack mb-2">{item.title}</h2>
                                        <p className="text-gray text-base">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Challenging