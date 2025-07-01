import Container from '@/components/shared/container'
import Heading from '@/components/shared/heading'
import { investmentSections, roiMilestones } from '@/data'
import React from 'react'

const InvestorSection = () => {
    return (
        <div className='py-7'>
            <Container>
                <div className="grid lg:grid-cols-2 md:px-8 grid-cols-1 gap-6 md:gap-10">
                    <div className="">
                        <div className="md:py-0 px-2 py-4">
                            <Heading className='!text-black !text-2xl capitalize md:!text-[40px] !font-barlow md:!leading-12 !text-left !font-bold'>
                                Join The Trillion Dollar Challenge as an early equity investor and share in our unparalleled growth
                            </Heading>
                        </div>

                        <div className="space-y-8 md:py-10">
                            {investmentSections.map((section, index) => (
                                <div
                                    key={index}
                                    className={`bg-lightyellow p-6 rounded-md shadow-md`}
                                >
                                    <h2 className={`text-3xl font-barlow mb-4 font-medium text-semiBlack`}>
                                        {section.title}
                                    </h2>
                                    <ul className="text-gray text-lg space-y-2 list-disc pl-5">
                                        {section.items.map((item, i) => (
                                            <li key={i}>
                                                {item.prefix && <>{item.prefix}: </>}
                                                <strong>{item.bold}</strong>
                                                {item.suffix && <>{item.suffix}</>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="">
                            <p className='text-xl px-2 font-barlow font-normal leading-8'>
                                We are <strong>CALLING ON EARLY INVESTORS</strong> to become foundational partners in a venture designed for monumental impact and significant financial returns. This is a unique opportunity to acquire equity in a platform poised to redefine global crowdfunding and environmental funding.
                            </p>
                        </div>

                        <div className="md:py-7">
                            <div className={`md:p-12 p-5 rounded-md shadow-md bg-lightyellow`}>
                                <h2 className={`md:text-3xl text-2xl max-w-xl md:leading-10 font-medium font-barlow mb-4 text-semiBlack`}>
                                    {roiMilestones.title}
                                </h2>
                                <ul className="list-disc pt-2 text-lg pl-5 text-gray space-y-2">
                                    {roiMilestones.levels.map((item, i) => (
                                        <li key={i}>
                                            <span className="font-semibold ">
                                                {item.level} <span className='font-normal'>({item.raised} raised)</span>
                                            </span>
                                            : <strong>{item.boldReturn}</strong>{' '}
                                            <span className="block text-sm text-gray">
                                                (each share receives <strong>{item.dividend}</strong> dividend)
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default InvestorSection