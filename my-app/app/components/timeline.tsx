"use client";
import React from "react";
import { AnimatedTooltip } from "./UI/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Chintu",
        designation: "He",
        image:
            "/chintu.jpg"
    },
    {
        id: 2,
        name: "Kou",
        designation: "He",
        image:
            "/chintu.jpg"
    },
    {
        id: 3,
        name: "Kavya",
        designation: "She",
        image:
            "/chintu.jpg"
    },
    {
        id: 4,
        name: "Owais",
        designation: "He",
        image:
            "/chintu.jpg"
    },
    {
        id: 5,
        name: "Karen",
        designation: "She",
        image:
            "/chintu.jpg"
    },
    {
        id: 6,
        name: "Hema",
        designation: "She",
        image:
            "/chintu.jpg"
    },
    {
        id: 7,
        name: "Vineetha",
        designation: "She",
        image:
            "/chintu.jpg"
    },
    {
        id: 8,
        name: "Shrina",
        designation: "She",
        image:
            "/chintu.jpg"
    },
    {
        id: 9,
        name: "Adhit",
        designation: "He",
        image:
            "/chintu.jpg"
    },
];

export function TimeLine() {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}
