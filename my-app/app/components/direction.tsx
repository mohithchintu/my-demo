"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";
import { DirectionAwareHover } from "./UI/direction-hover";

export function DirectionHover() {
    const imageUrl =
        "/picmain.jpg";
    return (
        <div className="h-[40rem] relative  flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl}>
                <p className="font-bold text-xl">In the memories</p>
                <p className="font-normal text-sm">The pic is apic</p>
            </DirectionAwareHover>
        </div>
    );
}
