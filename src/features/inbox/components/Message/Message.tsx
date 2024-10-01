import { IoStarOutline } from "react-icons/io5";

export default function Message({ isRead, isFavourite }: { isRead: boolean, isFavourite: boolean }) {
    return (
        <>
            <div className={`w-full flex items-center py-3 px-4 overflow-hidden ${!isRead && "bg-primary-900"}`}>
                <IoStarOutline className={`${isFavourite ? "text-brand-600" : "text-white"} text-xl`}/>
                <h3 className={`text-white ${!isRead && "font-bold"} my-auto ms-4 text-sm hidden sm:inline-block`}>Mario Nikolov</h3>
                <div className="ms-4 sm:ms-12 grow block">
                    <h3 className={`text-white ${!isRead && "font-bold"} my-auto mb-1 text-sm block sm:hidden`}>Mario Nikolov</h3>
                    <h4 className={`text-white ${!isRead && "font-bold"} text-sm`}>An exciting job opportunity...</h4>
                </div>
                <p className="text-primary-700 text-sm">20:43</p>
            </div>
        </>
    )
}