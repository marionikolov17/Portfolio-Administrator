import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import InboxHeader from "../../features/inbox/components/InboxHeader/InboxHeader";
import MessagesContainer from "../../features/inbox/components/MessagesContainer/MessagesContainer";
import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../../entities/messages/services/message.service";

export default function Inbox() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['inbox'],
    queryFn: getMessages
  });

  const messages = data?.documents;
  console.log(messages)

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
            <MessagesContainer messages={messages}/>
            {/* Messages pagination */}
            <div className="mt-2 flex justify-end items-center">
                <p className="text-white text-sm me-2">1-20 from 350</p>
                <button className="text-white text-lg p-1 rounded-full hover:bg-primary-900 transition duration-300">
                    <IoChevronBackOutline />
                </button>
                <button className="text-white text-lg p-1 rounded-full hover:bg-primary-900 transition duration-300">
                    <IoChevronForwardOutline />
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
