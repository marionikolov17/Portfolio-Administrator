import { Outlet } from "react-router-dom";
import DesktopNavigation from "../../features/layout/components/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "../../features/layout/components/MobileNavigation/MobileNavigation";
import TopBar from "../../features/layout/components/TopBar/TopBar";
import ErrorAlert from "../../shared/components/ErrorAlert/ErrorAlert";
import { useError } from "../../shared/context/error.context";
import { useUser } from "../../lib/context/user.context";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";

export default function MainLayout() {
    const { isOpened } = useError();

    const user = useUser();

    if (user.isInitLoading && user.isFirstLoad) {
        return <LoadingPage />
    }

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