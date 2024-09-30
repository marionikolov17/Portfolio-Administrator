import { IoCalendarClearOutline } from "react-icons/io5";

export default function NotificationsActionForm() {
    return (
        <>
            <div className="w-full px-4 py-3 flex flex-wrap justify-center">
                <p className="text-white my-auto">150 Notifications</p>
                <div className="ms-4 flex items-center bg-transparent py-2 px-4 border border-primary-800 rounded-lg">
                    <IoCalendarClearOutline className="me-2 text-brand-600 text-lg"/>
                    <select name="" id="" className="outline-none bg-transparent text-sm text-white">
                        <option value="" className="text-black">Last 7 days</option>
                        <option value="" className="text-black">Last 30 days</option>
                        <option value="" className="text-black">All time</option>
                    </select>
                </div>
                <div className="ms-4 flex items-center bg-transparent py-2 px-4 border border-primary-800 rounded-lg">
                    <select name="" id="" className="outline-none bg-transparent text-sm text-white">
                        <option value="" className="text-black">Visits</option>
                        <option value="" className="text-black">Clicks</option>
                        <option value="" className="text-black">All</option>
                    </select>
                </div>
            </div>
        </>
    )
}