import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { useUser } from "../../../../lib/context/user.context";

export default function TopBar() {
    const user = useUser();

    return (
        <>
            <header className="w-full bg-primary-900 min-h-9 z-40 sticky top-0 flex items-center justify-center sm:justify-end py-2 px-12 overflow-hidden">
                {/* Profile Link */}
                <Link to="/" className="flex items-center justify-center transition duration-300 hover:bg-primary-950 py-1.5 px-4 rounded-lg">
                    <div className="rounded-full flex overflow-hidden w-9 h-9 shadow">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="" className="object-cover" />
                    </div>
                    <p className="text-white ms-4 text-sm">Mario</p>
                </Link>
                <button 
                    onClick={() => user.logout()}
                    className="flex items-center justify-center h-full text-brand-600 text-xl ms-4 hover:bg-primary-950 p-2 rounded-lg transition duration-300"
                >
                    <IoLogOutOutline />
                </button>
            </header>
        </>
    )
}