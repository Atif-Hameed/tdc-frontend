"use client";

import React from "react";
import logo from "@/public/assets/images/mainLogo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SidebarData } from "@/data";
import CustomLink from "@/components/shared/custom-link";

const Sidebar = () => {
    const pathName = usePathname();

    return (
        <div
            className={`flex flex-col w-full justify-between h-screen border-r border-border custom-scrollbar overflow-hidden bg-white py-3 transition-all duration-300 ease-in-out `}
        >
            <div className="flex flex-col gap-4 px-2">
                <CustomLink href="/" className="flex justify-start px-2">
                    <Image alt="logo" src={logo} className="h-20" />
                </CustomLink>

                {/* Menu */}
                <div className="flex flex-col gap-2">
                    {SidebarData.map((item, index) => {
                        const isActive = item.src && pathName === item.src;

                        return (
                            <CustomLink
                                key={index}
                                href={item.src || "#"}
                                className={`flex items-center py-2 px-3 text-dark gap-2 font-bold rounded-lg ${isActive
                                    ? "bg-cgreen "
                                    : "hover:bg-cgreen bg-transparent"
                                    }`}
                            >
                                <item.icon />
                                <span>{item.name}</span>
                            </CustomLink>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
