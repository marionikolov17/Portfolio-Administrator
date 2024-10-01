import InboxHeader from "../../features/inbox/components/InboxHeader/InboxHeader";
import MessagesContainer from "../../features/inbox/components/MessagesContainer/MessagesContainer";

export default function Inbox() {
  return (
    <>
      <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
        <div className="w-full 2xl:w-[70%] h-max overflow-x-hidden">
          <InboxHeader />
          {/* Messages container */}
          <div className="w-full mt-8 rounded-lg shadow overflow-hidden h-max">
            {/* Buttons */}
            <div className="flex w-full mb-4">
                <button className="grow text-white py-2 border-b-2 border-b-brand-600 font-medium">All</button>
                <button className="grow text-white py-2 hover:border-b-2 border-b-brand-600 font-medium transition duration-300">Favourite</button>
            </div>
            {/* All messages */}
            <MessagesContainer />
          </div>
        </div>
      </section>
    </>
  );
}
