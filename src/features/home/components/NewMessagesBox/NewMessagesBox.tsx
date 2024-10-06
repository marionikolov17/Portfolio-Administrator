import { useQuery } from "@tanstack/react-query";
import NewMessageContainer from "../NewMessageContainer/NewMessageContainer";
import { getMessages } from "../../../../entities/messages/services/message.service";
import Loader from "../../../../shared/components/Loader/Loader";

export default function NewMessagesBox({ limit }: { limit: number }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["inbox", "home", limit],
    queryFn: () => getMessages(false, null, limit)
  });

  const messages = data?.documents;

  return (
    <>
      <div className="grow shirnk-0 h-80 bg-primary-900 rounded-lg shadow px-3 sm:px-10 py-6">
        <h3 className="text-lg text-white font-bold">New Messages</h3>

        {isPending &&
          <div className="w-full mt-4 flex justify-center">
            <Loader />
          </div>
        }
        {isError && <p className="text-red-600 mt-4">{error.message}</p>}
        {data && data.total > 0 && 
        <div className="mt-4 w-full">
            {
              messages?.map(message => (
                <NewMessageContainer key={message?.$id} message={message}/>
              ))
            }
        </div>}
        {data?.total === 0 && <p className="text-white mt-4">There are no messages</p>}
      </div>
    </>
  );
}
