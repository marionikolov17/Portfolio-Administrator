import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FilterButtons from "../../features/home/components/FilterButtons/FilterButtons";
import StatisticsBox from "../../features/home/components/StatisticsBox/StatisticsBox";
import RecentNotificationsBox from "../../features/home/components/RecentNotificationsBox/RecentNotificationsBox";
import NewMessagesBox from "../../features/home/components/NewMessagesBox/NewMessagesBox";
import { fetchViewsStatistics } from "../../entities/views/services/view.service";
import { getAverageTime, getTotalTime, getUniqueViews } from "../../entities/views/helpers/statistic.helper";
import { IView } from "../../entities/views/interfaces/view.interface";
import { timeConverter } from "../../shared/utils/timeConverter";

export default function Home() {
    const [period, setPeriod] = useState("last-7");

    const limit = 4;

    const { isPending, isError, data, error } = useQuery({
        queryKey: ["views", period],
        queryFn: () => fetchViewsStatistics(period)
    });

    let totalViews;
    let uniqueViews;
    let averageTime;
    let totalTime;

    if (!isPending) {
        totalViews = data?.total;
        uniqueViews = getUniqueViews(data?.documents as IView[]);
        averageTime = getAverageTime(data?.documents as IView[]);
        totalTime = getTotalTime(data?.documents as IView[]);
    }

    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] h-max">
                    {/* Time period choosing */}
                    <FilterButtons setPeriod={setPeriod} period={period}/>
                    {/* Visits statistics */}
                    <div className="w-full flex flex-wrap gap-x-3 gap-y-3">
                        <StatisticsBox icon="visits" title="Visits" result={isPending ? "000" : `${totalViews}`}/>
                        <StatisticsBox icon="uniqueVisits" title="Unique Visits" result={isPending ? "000" : `${uniqueViews}`}/>
                        <StatisticsBox icon="avgTime" title="Avg Time" result={isPending ? "0m 00s" : timeConverter(averageTime as number)}/>
                        <StatisticsBox icon="totalTime" title="Total Time" result={isPending ? "0m 00s" : timeConverter(totalTime as number)}/>
                    </div>
                    {/* Recent notifications and pages */}
                    <div className="w-full flex flex-wrap gap-x-3 gap-y-3 mt-8 justify-center">
                        <RecentNotificationsBox limit={limit}/>
                        <NewMessagesBox limit={limit}/>
                    </div>
                </div>
            </section>
        </>
    )
}