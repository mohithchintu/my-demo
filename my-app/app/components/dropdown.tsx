"use client"
import {
    Button,
    Dropdown,
    DropdownSection,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import { clsx } from "@nextui-org/shared-utils";
import {
    AddNoteBulkIcon,
    CopyDocumentBulkIcon,
    EditDocumentBulkIcon,
    DeleteDocumentBulkIcon,
} from "@nextui-org/shared-icons";
import { useState } from "react";

const iconClasses = "text-2xl text-default-500 pointer-events-none flex-shrink-0";

export const Example = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dropdown className="shadow-xl" placement="bottom" isOpen={isOpen}>
            <DropdownTrigger>
                <Button color="success" variant="flat" onClick={() => setIsOpen(!isOpen)}>
                    Actions
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                closeOnSelect
                aria-label="Actions"
                color="default"
                variant="flat"
            >
                <DropdownSection title="Actions">
                    <DropdownItem
                        key="new"
                        description="Create a new file"
                        shortcut="⌘N"
                        startContent={<AddNoteBulkIcon className={iconClasses} />}
                    >
                        New file
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        description="Allows you to edit the file"
                        shortcut="⌘⇧E"
                        startContent={<EditDocumentBulkIcon className={iconClasses} />}
                    >
                        Edit profile
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Danger zone">
                    <DropdownItem
                        key="delete"
                        className="text-danger"
                        color="danger"
                        description="Permanently delete the file"
                        shortcut="⌘⇧D"
                        startContent={
                            <DeleteDocumentBulkIcon
                                className={clsx(iconClasses, "!text-danger")}
                            />
                        }
                    >
                        Delete file
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
};
