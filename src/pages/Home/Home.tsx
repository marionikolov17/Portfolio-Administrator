import DesktopNavigation from "../../features/layout/components/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "../../features/layout/components/MobileNavigation/MobileNavigation";
import TopBar from "../../features/layout/components/TopBar/TopBar";

export default function Home() {
    return (
        <>
            <main className="w-full bg-primary-950 min-h-full absolute flex font-poppins">
                <DesktopNavigation />
                <MobileNavigation />
                <div className="grow overflow-x-hidden">
                    <TopBar />
                    {/* Here goes content */}
                </div>
            </main>
        </>
    )
}