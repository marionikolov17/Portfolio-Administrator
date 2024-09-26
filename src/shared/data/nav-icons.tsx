import React from "react";
import { IoHomeOutline  } from "react-icons/io5";

const className = "text-lg me-4 text-white";

export const navIcons: Record<string, React.ReactElement> = {
    'home': <IoHomeOutline className={className}/>,
}