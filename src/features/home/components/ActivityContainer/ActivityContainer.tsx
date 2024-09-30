import { IoPersonCircleOutline } from "react-icons/io5";

export default function ActivityContainer() {
    return (
        <>
            <div className="w-full flex items-center shrink-0 border-t border-t-primary-800 py-2">
                <IoPersonCircleOutline className="text-4xl text-brand-600"/>
                <img 
                    src="https://flagcdn.com/bg.svg" 
                    alt="flag" 
                    className="ms-2 sm:ms-4 me-1 w-6 h-6 sm:w-8 sm:h-8"
                />
                <p className="text-white font-medium text-sm sm:text-base">
                    212.22.22.22
                </p>
                <p className="text-white ms-2">
                    Visited Portfolio
                </p>
                <p className="ms-2 text-sm text-primary-700">
                    2h
                </p>
            </div>
        </>
    )
}