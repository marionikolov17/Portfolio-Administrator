import { IoPersonCircleOutline } from "react-icons/io5";
import { INotification } from "../../../../entities/notifications/interfaces/notification.interface";
import { Models } from "appwrite";
import { FLAG_ICONS } from "../../../../shared/data/flag-icons";
import moment from "moment";

export default function ActivityContainer({ notification }: { notification: INotification | Models.Document }) {
    return (
        <>
            <div className="w-full flex items-center shrink-0 border-t border-t-primary-800 py-2">
                <IoPersonCircleOutline className="text-4xl text-brand-600 me-2 sm:me-4"/>
                {notification?.actorCountry !== null && <img 
                    src={FLAG_ICONS[notification?.actorCountry]} 
                    alt="flag" 
                    className="me-1 w-6 h-6 sm:w-8 sm:h-8"
                />}
                <p className="text-white font-medium text-sm sm:text-base">
                    {notification?.actorIP !== null ? notification?.actorIP : "Unknown"}
                </p>
                <p className="text-white ms-2 text-sm sm:text-base">
                    {notification?.type === "visit" ? "Visited portfolio" : notification?.message}
                </p>
                <p className="ms-2 text-xs sm:text-sm text-primary-700">
                    {moment(notification?.$createdAt).fromNow()}
                </p>
            </div>
        </>
    )
}