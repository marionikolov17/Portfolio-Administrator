import { useQuery } from "@tanstack/react-query";
import ActivityContainer from "../ActivityContainer/ActivityContainer";
import { getNotifications } from "../../../../entities/notifications/services/notification.service";
import Loader from "../../../../shared/components/Loader/Loader";

export default function RecentNotificationsBox({ limit }: { limit: number }) {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["notifications", "home", limit],
        queryFn: () => getNotifications("all", "all", limit)
    });

    const notifications = data?.documents;

    return (
        <>
            <div className="grow max-w-full shrink-0 min-h-80 h-max sm:h-80 bg-primary-900 rounded-lg shadow px-3 sm:px-10 py-6">
                <h3 className="text-lg text-white font-bold">Recent Activity</h3>

                {isPending &&
                    <div className="w-full flex justify-center">
                        <Loader />
                    </div>
                }
                {isError && <p className="mt-4 text-red-600">{error.message}</p>}
                {data && data.total > 0 &&
                <div className="mt-4 border-b border-b-primary-800">
                    {
                        notifications?.map((notification) => (
                            <ActivityContainer key={notification.$id} notification={notification}/>
                        ))
                    }
                </div>}
                {data?.total === 0 && <p className="mt-4 text-white">There are no notifications</p>}
            </div>
        </>
    )
}