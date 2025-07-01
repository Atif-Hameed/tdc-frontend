'use client'
import Button from "@/components/shared/custom-btn";
import { HandIcon } from "@/svgs";
import Image from "next/image";
import { FC } from "react";

interface TribeCardProps {
    badge: number;
    badgeColor: string;
    iconSrc: string;
    title: string;
    description: string;
    donation: string;
    numColor: string;
}

export const FeatureTribeCard: FC<TribeCardProps> = ({
    badge,
    badgeColor,
    iconSrc,
    title,
    description,
    donation,
    numColor
}) => {
    return (
        <div className="sm:mt-20 mt-12" >
            <div className="relative sm:min-w-72 min-w-56  max-w-xs h-full bg-white rounded-xl shadow-sm p-4  border border-gray-200 flex-shrink-0">
                {/* Badge Icon with Number */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="relative flex justify-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center p-2" style={{ backgroundColor: badgeColor }}>
                            <Image src={iconSrc} alt={title} width={32} height={32} className="h-full w-full" />
                        </div>
                        <div
                            className={`absolute -top-1 -right-1 w-6 h-6 text-sm font-semibold text-white rounded-full flex items-center justify-center border-2 border-white`}
                            style={{ backgroundColor: numColor }}
                        >
                            {badge}
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h3 className="mt-10 lg:text-xl text-kg font-semibold text-center text-dark">{title}</h3>

                {/* Description */}
                <p className="mt-2 text-xs line-clamp-2 text-lightDark text-center">
                    {description}
                </p>

                {/* Donation */}
                <div className="mt-4 text-center text-sm text-lightDark">
                    <span className="inline-flex text-dark items-center text-base gap-1 font-semibold">
                        <HandIcon /> ${donation}
                    </span>{" "}
                    total donation
                </div>

                {/* Join Button */}
                <Button
                    style="!bg-green text-white font-light py-2 my-3 rounded-lg w-full px-4"
                    label="Join Tribe"
                />


                {/* Avatars & Member Count */}
                <div className="mt-4 flex items-center gap-2 justify-center">
                    <div className="flex -space-x-2">
                        {
                            [1, 2, 3].map((e, i) => (
                                <Image
                                    key={i}
                                    src="/assets/images/profile.png"
                                    alt="user"
                                    width={24}
                                    height={24}
                                    className="rounded-full border-2 border-white"
                                />
                            ))
                        }
                    </div>
                    <span className="text-sm text-gray-500">342 Members joined</span>
                </div>
            </div>
        </div>
    );
};
