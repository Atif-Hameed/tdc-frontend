'use client'
import React from 'react'
import Container from '@/components/shared/container'
import Button from '@/components/shared/custom-btn'
import Heading from '@/components/shared/heading'
import { NextArrow, PreviousArrow } from '@/svgs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import { lastTribeData } from '@/data';
import Image from 'next/image'

function SampleNextArrow(props: any) {
    const { onClick, currentSlide, slideCount } = props;
    const isLastSlide = currentSlide >= slideCount - 3;

    return (
        <div
            onClick={!isLastSlide ? onClick : undefined}
            className={`absolute top-[18rem] -translate-y-1/2 left-24 z-50 ${isLastSlide ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
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
            className={`absolute top-[18rem] -translate-y-1/2 left-4 z-50 ${isFirstSlide ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
        >
            <NextArrow />
        </div>
    );
}

const LastTribe = () => {

    const settings = {
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
        <div className="-z-30">
            <Container className=''>
                <div className="grid md:py-16 md:px-8 lg:grid-cols-12 gap-10 grid-cols-1">
                    <div className="lg:col-span-4">
                        <div className="space-y-5">
                            <Heading className='!text-black md:!text-[40px] !font-barlow !font-bold !text-left'>
                                Latest Tribe
                            </Heading>
                            <p className='font-barlow text-xl text-left'>Discover our active community of impact tribes. Join a group that shares your passion, or create your own, to amplify your collective donations and make a monumental difference together towards The Trillion Dollar Challenge.</p>
                            <Button label='Create a tribe' style='border rounded-lg !text-base uppercase !font-bold !font-barlow !text-primary !border-primary' />
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="relative py-4">
                            <Slider {...settings}>
                                {lastTribeData.map((item, index) => (
                                    <div key={index} className="px-2">
                                        <div className="bg-white rounded-xl border border-border shadow overflow-hidden h-full">
                                            <div className="py-4 flex flex-col gap-4 items-center text-center justify-center">
                                                <Image src={item.icon} alt={item.icon} className='rounded-2xl h-16 w-16'/>
                                                <div className="py-2 gap-2 text-center flex items-center flex-col">
                                                    <p className="text-start text-dark text-base font-barlow font-semibold">{item.title}</p>
                                                    <p className="text-start text-base font-barlow text-lightgray">{item.content}</p>
                                                    <Button
                                                        label={item.buttonTitle}
                                                        style="border rounded-lg !px-10 !py-2 !text-base uppercase !font-bold !font-barlow !text-greenborder !border-greenborder"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LastTribe