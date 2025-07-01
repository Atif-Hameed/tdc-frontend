'use client';

import Container from '@/components/shared/container';
import CustomImage from '@/components/shared/custom-image';
import { footerSections } from '@/data';
import {
    FaYoutube,
    FaXTwitter,
    FaInstagram,
    FaFacebookF,
} from 'react-icons/fa6';

const socialIcons = [
    { icon: <FaYoutube />, label: 'YouTube', src: '#' },
    { icon: <FaXTwitter />, label: 'X', src: '#' },
    { icon: <FaInstagram />, label: 'Instagram', src: '#' },
    { icon: <FaFacebookF />, label: 'Facebook', src: '#' },
];



const Footer = () => {
    return (
        <Container parentStyle='bg-lightGreen' className=" text-black py-10 px-4 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                {/* Logo and Socials */}
                <div className="flex flex-col gap-4">
                    <CustomImage
                        alt=''
                        src='/assets/images/webLogo.svg'
                        className='h-24 w-auto  -ml-3'
                    />
                    <div className="flex gap-4 text-primary text-lg">
                        {socialIcons.map((item, i) => (
                            <span key={i} aria-label={item.label}>
                                {item.icon}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs mt-4 text-darkGray">
                        © 2025 The Trillion Dollar Challenge. All rights reserved.
                    </p>
                </div>

                {/* Info Sections */}
                {footerSections.map((section, i) => (
                    <div key={i}>
                        <h4 className="font-semibold uppercase text-sm mb-3">
                            {section.title}
                        </h4>
                        {section.content.map((line, j) => (
                            <p key={j} className="font-bold">
                                {line}
                            </p>
                        ))}
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <div className="mt-10 text-center text-xs text-gray-600">
                Developed by Autonomous Intelligence
            </div>
        </Container>
    );
}


export default Footer;