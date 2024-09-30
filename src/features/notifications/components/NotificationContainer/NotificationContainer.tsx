import { IoPersonCircleOutline } from "react-icons/io5";

export default function NotificationContainer() {
    return (
        <>
            <div className="flex items-center px-2 sm:px-4 py-2 mb-4 max-h-max">
                <div className="hidden sm:inline-block w-2 h-2 rounded-full bg-primary-800"></div>
                <IoPersonCircleOutline className="sm:ms-4 text-4xl text-white"/>
                <img 
                    src="https://flagcdn.com/bg.svg" 
                    alt="flag" 
                    className="ms-2 sm:ms-4 me-1 w-6 h-6 sm:w-8 sm:h-8"
                />
                <div className="grow flex items-center">
                    <p className="ms-2 text-white font-bold text-sm sm:text-base">
                        212.22.222.22
                    </p>
                    <p className="ms-2 text-white text-sm sm:text-base gap-x-2">visited your portfolio <span className="text-primary-600 text-xs sm:hidden my-auto">Just now</span></p>
                </div>
                <p className="text-primary-600 text-xs sm:text-sm hidden sm:inline-block">
                    Just now
                </p>
            </div>
        </>
    )
}