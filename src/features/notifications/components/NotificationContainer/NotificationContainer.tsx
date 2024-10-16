import { IoPersonCircleOutline } from "react-icons/io5";
import { INotification } from "../../../../entities/notifications/interfaces/notification.interface";
import { Models } from "appwrite";
import { FLAG_ICONS } from "../../../../shared/data/flag-icons";
import moment from "moment";
import { timeConverter } from "../../../../shared/utils/timeConverter";
import displayIP from "../../../../shared/utils/displayIP";

export default function NotificationContainer({ notification }: { notification: INotification | Models.Document }) {
    return (
        <>
            <div className="flex items-center px-2 sm:px-4 py-2 mb-4 max-h-max">
                <div className={`hidden sm:inline-block w-2 h-2 rounded-full ${notification?.isRead ? "bg-primary-800" : "bg-brand-600"}`}></div>
                <IoPersonCircleOutline className="sm:ms-4 text-4xl text-white"/>
                {notification?.actorCountry !== null && <img 
                    src={FLAG_ICONS[notification?.actorCountry]} 
                    alt="flag" 
                    className="ms-2 sm:ms-4 me-1 w-6 h-6 sm:w-8 sm:h-8"
                />}
                <div className="grow flex items-center">
                    <p className={`ms-2 text-white ${notification?.isRead ? "font-normal" : "font-bold"} text-sm sm:text-base`}>
                        {notification?.actorIP !== null ? displayIP(notification?.actorIP as string) : "Unknown"}
                    </p>
                    <p className={`ms-2 text-white text-sm sm:text-base gap-x-2 ${notification?.isRead ? "font-normal" : "font-bold"}`}>
                        {notification?.type === "visit" ? `${notification?.message} ${timeConverter(notification?.totalTime)}` : notification?.message}
                         <span className="text-primary-600 ms-1 text-xs sm:hidden my-auto">{moment(notification?.$createdAt).fromNow()}</span>
                    </p>
                </div>
                <p className="text-primary-600 text-xs sm:text-sm hidden sm:inline-block">
                    {moment(notification?.$createdAt).fromNow()}
                </p>
            </div>
        </>
    )
}