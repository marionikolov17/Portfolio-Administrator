import NavigationButton from "../NavigationButton/NavigationButton";

export default function DesktopNavigation() {
    return (
        <>
            <nav className="hidden sm:block w-20 lg:w-[280px] shrink-0 sticky min-h-full top-0 z-50 bg-primary-900">
                <div className="hidden lg:flex justify-center items-center my-4">
                    <h2 className="text-white text-xl font-bold">Dashboard</h2>
                </div>
                {/* Navigation Buttons */}
                <div className="w-full flex flex-col items-center px-2 lg:px-6">
                    <NavigationButton to="/" isActive={true} title="Home" icon="home" />
                    <NavigationButton to="/" isActive={false} title="Notifications" icon="notifications" />
                    <NavigationButton to="/" isActive={false} title="Inbox" icon="inbox" />
                    <NavigationButton to="/" isActive={false} title="Projects" icon="projects" />
                    <NavigationButton to="/" isActive={false} title="Certificates" icon="certificates" />
                </div>
            </nav>
        </>
    )
}