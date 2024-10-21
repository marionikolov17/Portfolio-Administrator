import { useLocation } from "react-router-dom";
import NavigationButton from "../NavigationButton/NavigationButton";

export default function DesktopNavigation() {
    const location = useLocation();

    return (
        <>
            <nav className="hidden sm:block w-20 lg:w-[280px] shrink-0 sticky h-screen top-0 z-40 bg-primary-900">
                <div className="hidden lg:flex justify-center items-center my-4">
                    <h2 className="text-white text-xl font-bold">Dashboard</h2>
                </div>
                {/* Navigation Buttons */}
                <div className="w-full flex flex-col items-center px-2 lg:px-6">
                    <NavigationButton to="/" isActive={location.pathname === "/"} title="Home" icon="home" />
                    <NavigationButton to="/notifications" isActive={location.pathname === "/notifications"} title="Notifications" icon="notifications" />
                    <NavigationButton to="/inbox" isActive={location.pathname.startsWith("/inbox")} title="Inbox" icon="inbox" />
                    <NavigationButton to="/projects" isActive={location.pathname.startsWith("/projects")} title="Projects" icon="projects" />
                    <NavigationButton to="/certificates" isActive={location.pathname.startsWith("/certificates")} title="Certificates" icon="certificates" />
                </div>
            </nav>
        </>
    )
}