import { Link, useParams } from "react-router-dom";
import {
  IoArrowBackOutline,
  IoPersonCircleOutline,
  IoStarOutline,
} from "react-icons/io5";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    changeMessageStatus,
  getMessage,
  readMessage,
} from "../../entities/messages/services/message.service";
import { dateConverter } from "../../shared/utils/dateConverter";
import Loader from "../../shared/components/Loader/Loader";
import { useEffect } from "react";

export default function InboxMessage() {
  const { messageId } = useParams();
  const queryClient = useQueryClient();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["inbox", messageId],
    queryFn: () => getMessage(messageId as string),
  });

  const statusMutation = useMutation({
    mutationFn: ({id, isFavourite}: { id: string, isFavourite: boolean }) => changeMessageStatus({id, isFavourite}),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["inbox", messageId] })
    }
  })

  const { mutate } = useMutation({
    mutationFn: (id: string) => readMessage(id)
  })

  useEffect(() => {
    mutate(messageId as string)
  }, [mutate, messageId])

  if (isPending) {
    return (
      <>
        <section className="w-full flex justify-center items-center my-10">
          <Loader />
        </section>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <section className="w-full flex justify-center items-center my-10">
          <p className="text-red-600">{error.message}</p>
        </section>
      </>
    );
  }

  const handleFavouriteClick = () => {
    statusMutation.mutate({ id: messageId as string, isFavourite: !data?.isFavourite })
  }

  return (
    <>
      <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
        <div className="w-full 2xl:w-[70%] min-h-80 h-max overflow-x-hidden">
          <Link to="/inbox" className="text-white text-2xl">
            <IoArrowBackOutline />
          </Link>
          {/* Title */}
          <h1 className="mt-8 text-white font-bold text-2xl sm:text-3xl">
            {data?.title}
          </h1>
          {/* Sender */}
          <div className="mt-4 flex">
            <div className="flex grow justify-start items-center">
              <IoPersonCircleOutline className="text-brand-600 text-4xl" />
              <h3 className="ms-2 text-white font-bold text-lg">
                {data?.name}
              </h3>
            </div>
            <div className="grow flex items-center justify-end">
              <p className="text-primary-700 text-sm me-3">
                {dateConverter(data?.$createdAt as string)}
              </p>
              <IoStarOutline
               onClick={handleFavouriteClick}
               className={`${data?.isFavourite ? "text-brand-600" : "text-white"} text-xl cursor-pointer`} 
               />
            </div>
          </div>
          {/* Message */}
          <div className="mt-4 overflow-x-hidden w-full min-h-80">
            <p className="text-white">{data?.message}</p>
          </div>
        </div>
      </section>
    </>
  );
}
