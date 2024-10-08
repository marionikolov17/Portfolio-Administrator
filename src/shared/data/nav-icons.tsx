import React from "react";
import { IoChatboxOutline, IoClipboardOutline, IoHomeOutline, IoNotificationsOutline, IoTrophyOutline  } from "react-icons/io5";

const className = "text-lg lg:me-4 text-white";

export const navIcons: Record<string, React.ReactElement> = {
    'home': <IoHomeOutline className={className}/>,
    'notifications': <IoNotificationsOutline className={className}/>,
    'projects': <IoClipboardOutline className={className}/>,
    'certificates': <IoTrophyOutline className={className}/>,
    'inbox': <IoChatboxOutline className={className}/>,
}