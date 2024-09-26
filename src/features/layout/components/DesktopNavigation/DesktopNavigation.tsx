import NavigationButton from "../NavigationButton/NavigationButton";

export default function DesktopNavigation() {
    return (
        <>
            <nav className="w-[300px] shrink-0 sticky min-h-full top-0 z-50 bg-primary-900">
                <div className="w-full flex flex-col items-center px-6">
                    <NavigationButton to="/" isActive={true} title="Home" icon="home" />
                    <NavigationButton to="/" isActive={false} title="Notifications" icon="notifications" />
                    <NavigationButton to="/" isActive={false} title="Projects" icon="projects" />
                    <NavigationButton to="/" isActive={false} title="Certificates" icon="certificates" />
                </div>
            </nav>
        </>
    )
}