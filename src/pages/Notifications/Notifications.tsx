import { useQuery } from "@tanstack/react-query";
import NotificationContainer from "../../features/notifications/components/NotificationContainer/NotificationContainer";
import NotificationsActionForm from "../../features/notifications/components/NotificationsActionForm/NotificationsActionForm";
import { getNotifications } from "../../entities/notifications/services/notification.service";

export default function Notifications() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["notifications"],
        queryFn: getNotifications
    });

    const notifications = data?.documents;

    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] h-max bg-primary-900 rounded-lg shadow overflow-hidden">
                    <div className="flex px-6 py-3 bg-primary-800">
                        <h1 className="text-white text-lg font-bold sm:text-2xl">Notifications</h1>
                    </div>
                    {/* Searching, filtering and sorting */}
                    <NotificationsActionForm />
                    {/* Fetched notifications */}
                    <div className="">
                        {notifications?.map(notification => (
                            <NotificationContainer key={notification.$id} notification={notification}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}