/* eslint-disable react/no-unescaped-entities */
import Container from '@/components/shared/container'
import Button from '@/components/shared/custom-btn'
import Heading from '@/components/shared/heading'
import React from 'react'

const Together = () => {
    return (
        <div>
            <Container className='!px-0'>
                <div
                    style={{ backgroundImage: "url('/assets/website/togetherbg.png')" }}
                    className="bg-cover h-full px-2  w-full bg-center md:min-h-screen bg-no-repeat">
                    <div className="py-10">
                        <Heading className='!text-dark md:!text-5xl  font-barlow  !font-bold'>
                            LET'S WORK TOGETHER TO
                        </Heading>
                        <p className='md:text-center font-barlow font-semibold'>
                            "heal the world, make it a better place, for you and for me and the entire human race..." <br /> ~Michael Jackson~
                        </p>
                        <div className="flex items-center justify-center py-4">
                            <Button label='Contact Us!' style='!bg-primary rounded-md !text-white' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Together