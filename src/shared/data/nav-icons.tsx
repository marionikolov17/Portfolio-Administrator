import React from "react";
import { IoClipboardOutline, IoHomeOutline, IoNotificationsOutline, IoTrophyOutline  } from "react-icons/io5";

const className = "text-lg me-4 text-white";

export const navIcons: Record<string, React.ReactElement> = {
    'home': <IoHomeOutline className={className}/>,
    'notifications': <IoNotificationsOutline className={className}/>,
    'projects': <IoClipboardOutline className={className}/>,
    'certificates': <IoTrophyOutline className={className}/>,
}