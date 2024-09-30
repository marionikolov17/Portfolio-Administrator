import FilterButtons from "../../features/home/components/FilterButtons/FilterButtons";
import StatisticsBox from "../../features/home/components/StatisticsBox/StatisticsBox";
import RecentNotificationsBox from "../../features/home/components/RecentNotificationsBox/RecentNotificationsBox";
import NewMessagesBox from "../../features/home/components/NewMessagesBox/NewMessagesBox";

export default function Home() {
    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] h-max">
                    {/* Time period choosing */}
                    <FilterButtons />
                    {/* Visits statistics */}
                    <div className="w-full flex flex-wrap gap-x-3 gap-y-3">
                        <StatisticsBox icon="visits" title="Visits" result={"1,443"}/>
                        <StatisticsBox icon="uniqueVisits" title="Unique Visits" result={"253"}/>
                        <StatisticsBox icon="avgTime" title="Avg Time" result={"1m 02s"}/>
                        <StatisticsBox icon="totalTime" title="Total Time" result={"25m 33s"}/>
                    </div>
                    {/* Recent notifications and pages */}
                    <div className="w-full flex flex-wrap gap-x-3 gap-y-3 mt-8 justify-center">
                        <RecentNotificationsBox />
                        <NewMessagesBox />
                    </div>
                </div>
            </section>
        </>
    )
}