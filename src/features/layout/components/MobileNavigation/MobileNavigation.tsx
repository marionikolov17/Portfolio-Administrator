import {
  IoChatboxOutline,
  IoClipboardOutline,
  IoHomeOutline,
  IoNotificationsOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function MobileNavigation() {
  const location = useLocation();

  return (
    <>
      <div className="z-40 fixed bottom-0 w-full h-12 bg-primary-900 flex sm:hidden items-center justify-around">
        <Link to="/" className="mx-2">
          <IoHomeOutline className={`${location.pathname === "/" ? "text-brand-600" : "text-white"} text-lg`} />
        </Link>
        <Link to="/projects" className="mx-2">
          <IoClipboardOutline className={`${location.pathname.startsWith("/projects") ? "text-brand-600" : "text-white"} text-lg`} />
        </Link>
        <Link to="/certificates" className="mx-2">
          <IoTrophyOutline className={`${location.pathname.startsWith("/certificates") ? "text-brand-600" : "text-white"} text-lg`} />
        </Link>
        <Link to="/notifications" className="mx-2">
          <IoNotificationsOutline className={`${location.pathname === "/notifications" ? "text-brand-600" : "text-white"} text-lg`} />
        </Link>
        <Link to="/inbox" className="mx-2">
          <IoChatboxOutline className={`${location.pathname.startsWith("/inbox") ? "text-brand-600" : "text-white"} text-lg`} />
        </Link>
      </div>
    </>
  );
}
