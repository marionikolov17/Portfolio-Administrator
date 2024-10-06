import { useQuery } from "@tanstack/react-query";
import NewMessageContainer from "../NewMessageContainer/NewMessageContainer";
import { getMessages } from "../../../../entities/messages/services/message.service";

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

        <div className="mt-4 w-full">
            {
              messages?.map(message => (
                <NewMessageContainer key={message?.$id} message={message}/>
              ))
            }
        </div>
      </div>
    </>
  );
}
