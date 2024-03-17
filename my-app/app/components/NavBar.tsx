"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { SearchIcon } from "./UI/SearchIcon";
import { usePathname } from "next/navigation";
import { FaUserFriends } from "react-icons/fa";

const NavBar = () => {
    const currentpath = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Navbar isBordered>
            <FaUserFriends size={45} />
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4">
                    <Link href="/">
                        <p className="hidden sm:block font-bold text-gray-500">Main Group</p>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-5">
                    <NavbarItem isActive={currentpath === "/people"}>
                        <Link color="foreground" href="/people">
                            People
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={currentpath === "/timeline"}>
                        <Link href="/timeline" color="foreground">
                            TimeLine
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={currentpath === "/contactus"}>
                        <Link color="foreground" href="/contactus">
                            Contact Us
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={currentpath === "/signup"}>
                        <Link color="foreground" href="/signup">
                            Sign Up
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                />
                <Dropdown placement="bottom-end" isOpen={isOpen}>
                    <DropdownTrigger>
                        <Avatar
                            onClick={() => setIsOpen(!isOpen)}
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="/chintu.jpg"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        {/* <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem> */}
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}

export default NavBar;