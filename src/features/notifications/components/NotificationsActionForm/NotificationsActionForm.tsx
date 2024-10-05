import { IoCalendarClearOutline } from "react-icons/io5";

interface CurrentProps {
    totalNotifications: number
}

export default function NotificationsActionForm({ totalNotifications }: CurrentProps) {
    return (
        <>
            <div className="w-full px-4 py-3 flex flex-wrap justify-center gap-x-4">
                <p className="text-white my-auto hidden sm:inline-block">{totalNotifications} Notifications</p>
                <div className="flex items-center bg-transparent py-2 px-4 border border-primary-800 rounded-lg">
                    <IoCalendarClearOutline className="me-2 text-brand-600 text-lg"/>
                    <select name="" id="" className="outline-none bg-transparent text-sm text-white">
                        <option value="" className="text-black">Last 7 days</option>
                        <option value="" className="text-black">Last 30 days</option>
                        <option value="" className="text-black">All time</option>
                    </select>
                </div>
                <div className="flex items-center bg-transparent py-2 px-4 border border-primary-800 rounded-lg">
                    <select name="" id="" className="outline-none bg-transparent text-sm text-white">
                        <option value="" className="text-black">All</option>
                        <option value="" className="text-black">Visits</option>
                        <option value="" className="text-black">Clicks</option>
                    </select>
                </div>
            </div>
        </>
    )
}