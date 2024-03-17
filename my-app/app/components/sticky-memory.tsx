"use client";
import React from "react";
import { StickyScroll } from "./UI/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Idoit no 1",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/chintu.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Nothing",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/picmain.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Memories",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/mainpic.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Non drinkers",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/bottels.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];
export function StickyScrollMemory() {
    return (
        <div className="p-2">
            <StickyScroll content={content} />
        </div>
    );
}
