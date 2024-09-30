import ActivityContainer from "../ActivityContainer/ActivityContainer";

export default function RecentNotificationsBox() {
    return (
        <>
            <div className="grow shrink-0 h-80 bg-primary-900 rounded-lg shadow px-3 sm:px-10 py-6">
                <h3 className="text-lg text-white font-bold">Recent Activity</h3>

                <div className="mt-4 border-b border-b-primary-800">
                    <ActivityContainer />
                    <ActivityContainer />
                    <ActivityContainer />
                    <ActivityContainer />
                </div>
            </div>
        </>
    )
}