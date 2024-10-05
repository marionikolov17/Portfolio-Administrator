import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { getMessages } from "../../entities/messages/services/message.service";
import InboxHeader from "../../features/inbox/components/InboxHeader/InboxHeader";
import MessagesContainer from "../../features/inbox/components/MessagesContainer/MessagesContainer";
import Loader from "../../shared/components/Loader/Loader";

export default function Inbox() {
  const [isFavoriteSelected, setIsFavoriteSelected] = useState(false);
  const queryClient = useQueryClient();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['inbox', isFavoriteSelected],
    queryFn: () => getMessages(isFavoriteSelected)
  });

  const messages = data?.documents;

  const handleAllMessagesButton = () => {
    queryClient.invalidateQueries({ queryKey: ['inbox', isFavoriteSelected] });
    setIsFavoriteSelected(false);
  }

  const handleFavouriteMessagesButton = () => {
    queryClient.invalidateQueries({ queryKey: ['inbox', isFavoriteSelected] })
    setIsFavoriteSelected(true);
  }

  return (
    <>
      <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
        <div className="w-full 2xl:w-[70%] h-max overflow-x-hidden">
          <InboxHeader />
          {/* Messages container */}
          <div className="w-full mt-8 rounded-lg shadow overflow-hidden h-max">
            {/* Buttons */}
            <div className="flex w-full mb-4">
                <button 
                  onClick={handleAllMessagesButton}
                  className={`grow text-white py-2 hover:border-b-2 ${!isFavoriteSelected && "border-b-2"} border-b-brand-600 font-medium transition duration-300`}
                >All</button>
                <button 
                  onClick={handleFavouriteMessagesButton}
                  className={`grow text-white py-2 hover:border-b-2 ${isFavoriteSelected && "border-b-2"} border-b-brand-600 font-medium transition duration-300`}
                >Favourite</button>
            </div>
            {isPending && 
              <div className="w-full flex justify-center items-center my-4">
                <Loader />
              </div>
            }
            {isError && 
              <div className="w-full flex justify-center items-center my-4">
                <p className="text-red-600 text-base">{error.message}</p>
              </div>
            }
            {data && data.total > 0 && 
            <>
              {/* All messages */}
              <MessagesContainer messages={messages}/>
              {/* Messages pagination */}
              <div className="mt-2 flex justify-end items-center">
                  <p className="text-white text-sm me-2">1-{data.total <= 20 ? data.total : 20} from {data.total}</p>
                  <button className="text-white text-lg p-1 rounded-full hover:bg-primary-900 transition duration-300">
                      <IoChevronBackOutline />
                  </button>
                  <button className="text-white text-lg p-1 rounded-full hover:bg-primary-900 transition duration-300">
                      <IoChevronForwardOutline />
                  </button>
              </div>
            </>}
            {data?.total === 0 && <p className="text-white">There are no messages yet.</p>}
          </div>
        </div>
      </section>
    </>
  );
}
