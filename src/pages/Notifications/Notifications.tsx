import { useQuery, useQueryClient } from "@tanstack/react-query";
import NotificationContainer from "../../features/notifications/components/NotificationContainer/NotificationContainer";
import NotificationsActionForm from "../../features/notifications/components/NotificationsActionForm/NotificationsActionForm";
import { getNotifications } from "../../entities/notifications/services/notification.service";
import Loader from "../../shared/components/Loader/Loader";
import { useState } from "react";

export default function Notifications() {
    const [selectedTime, setSelectedTime] = useState("last-7");
    const [selectedType, setSelectedType] = useState("all");

    const { isPending, isError, data, error } = useQuery({
        queryKey: ["notifications", selectedTime, selectedType],
        queryFn: () => getNotifications(selectedTime, selectedType)
    });

    const queryClient = useQueryClient();

    const notifications = data?.documents;

    const handleSelectTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
        queryClient.invalidateQueries({ queryKey: ['inbox', selectedTime, selectedType] });
        setSelectedTime(e.target.value)
    }

    const handleSelectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        queryClient.invalidateQueries({ queryKey: ['inbox', selectedTime, selectedType] });
        setSelectedType(e.target.value)
    }

    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] h-max bg-primary-900 rounded-lg shadow overflow-hidden">
                    <div className="flex px-6 py-3 bg-primary-800">
                        <h1 className="text-white text-lg font-bold sm:text-2xl">Notifications</h1>
                    </div>
                    {/* Searching, filtering and sorting */}
                    <NotificationsActionForm totalNotifications={data?.total as number} handleSelectTime={handleSelectTime} handleSelectType={handleSelectType}/>
                    {isPending &&
                        <div className="w-full flex items-center justify-center my-10">
                            <Loader />
                        </div>
                    }
                    {isError &&
                        <div className="w-full flex items-center justify-center my-10">
                            <p className="text-red-600">{error.message}</p>
                        </div>
                    }
                    {/* Fetched notifications */}
                    {data && data.total > 0 && <div className="">
                        {notifications?.map(notification => (
                            <NotificationContainer key={notification.$id} notification={notification}/>
                        ))}
                    </div>}
                    {data?.total == 0 && <p className="my-6 text-white text-base">There are no notifications</p>}
                </div>
            </section>
        </>
    )
}