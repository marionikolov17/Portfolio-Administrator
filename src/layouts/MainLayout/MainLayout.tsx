import { Outlet } from "react-router-dom";
import DesktopNavigation from "../../features/layout/components/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "../../features/layout/components/MobileNavigation/MobileNavigation";
import TopBar from "../../features/layout/components/TopBar/TopBar";
import ErrorAlert from "../../shared/components/ErrorAlert/ErrorAlert";
import { useError } from "../../shared/context/error.context";

export default function MainLayout() {
    const { isOpened } = useError();
    return (
        <>
            <main className="w-full bg-primary-950 min-h-full absolute flex font-poppins">
                {isOpened && <ErrorAlert />}
                <DesktopNavigation />
                <MobileNavigation />
                <div className="grow mb-12 sm:mb-0">
                    <TopBar />
                    <Outlet />
                </div>
            </main>
        </>
    )
}