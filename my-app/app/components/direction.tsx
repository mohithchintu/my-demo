"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";
import { DirectionAwareHover } from "./UI/direction-hover";

export function DirectionHover() {
    const imageUrl =
        "/mainpic.jpg";
    return (
        <div className="h-[40rem] relative  flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl}>
                <p className="font-bold text-xl">In the mountains</p>
                <p className="font-normal text-sm">Ideal Trip</p>
            </DirectionAwareHover>
        </div>
    );
}
