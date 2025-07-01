'use client'
import React from 'react'
import Container from '@/components/shared/container'
import Button from '@/components/shared/custom-btn'
import Heading from '@/components/shared/heading'
import { levelData } from '@/data';
import { NextArrow, PreviousArrow } from '@/svgs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props: any) {
    const { onClick, currentSlide, slideCount } = props;
    const isLastSlide = currentSlide >= slideCount - 4;

    return (
        <div
            onClick={!isLastSlide ? onClick : undefined}
            className={`absolute top-[16rem] lg:top-[14rem] -translate-y-1/2 left-24 z-50 ${isLastSlide ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
        >
            <PreviousArrow />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick, currentSlide } = props;
    const isFirstSlide = currentSlide === 0;

    return (
        <div
            onClick={!isFirstSlide ? onClick : undefined}
            className={`absolute top-[16rem] lg:top-[14rem] -translate-y-1/2 left-4 z-50 ${isFirstSlide ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
        >
            <NextArrow />
        </div>
    );
}

const MonetaryCards = () => {
    const settings = {
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: true,
                    speed: 300,
                    autoplaySpeed: 3000,
                },
            },
        ],
    };

    return (
        <div>
            <Container className='md:py-32 py-5 md:!px-8'>
                <div className="md:flex justify-between px-2 py-4 items-center">
                    <Heading className='!text-dark max-w-lg !text-left md:!leading-12 !font-barlow !font-bold md:!text-[40px]'>
                        Monetary rewards at every milestones
                    </Heading>
                    <Button label='download tdc rewards' style='border rounded-lg !text-base uppercase !font-bold !font-barlow !text-primary !border-primary' />
                </div>

                <div className="relative py-4">
                    <Slider {...settings}>
                        {levelData.map((item, index) => (
                            <div key={index} className="px-2">
                                <div className="bg-white rounded-xl border border-border shadow overflow-hidden h-full">
                                    <div className="p-3">
                                        <p className="text-start text-3xl py-2 font-bold font-barlow text-semiBlack">{item.level}</p>
                                        <div className="py-2">
                                            <p className="text-start text-lg font-barlow font-medium">{item.description}</p>
                                            <p className="text-start text-lg font-barlow font-bold text-gray">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default MonetaryCards