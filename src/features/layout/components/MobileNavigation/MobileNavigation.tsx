import { IoClipboardOutline, IoHomeOutline, IoNotificationsOutline, IoTrophyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function MobileNavigation() {
    return (
        <>
            <div className="z-50 fixed bottom-0 w-full h-12 bg-primary-900 flex sm:hidden items-center justify-around">
                <Link to="/" className="mx-2">
                    <IoHomeOutline className="text-brand-600 text-lg"/>
                </Link>
                <Link to="/" className="mx-2">
                    <IoClipboardOutline className="text-white text-lg"/>
                </Link>
                <Link to="/" className="mx-2">
                    <IoNotificationsOutline className="text-white text-lg"/>
                </Link>
                <Link to="/" className="mx-2">
                    <IoTrophyOutline className="text-white text-lg"/>
                </Link>
            </div>
        </>
    )
}