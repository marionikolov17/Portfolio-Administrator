import NotificationsActionForm from "../../features/notifications/components/NotificationsActionForm/NotificationsActionForm";

export default function Notifications() {
    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] h-max bg-primary-900 rounded-lg shadow overflow-hidden">
                    <div className="flex px-6 py-3 bg-primary-800">
                        <h1 className="text-white text-2xl">Notifications</h1>
                    </div>
                    {/* Searching, filtering and sorting */}
                    <NotificationsActionForm />
                </div>
            </section>
        </>
    )
}