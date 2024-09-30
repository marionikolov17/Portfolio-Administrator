import NewMessageContainer from "../NewMessageContainer/NewMessageContainer";

export default function NewMessagesBox() {
  return (
    <>
      <div className="grow shirnk-0 h-80 bg-primary-900 rounded-lg shadow px-3 sm:px-10 py-6">
        <h3 className="text-lg text-white font-bold">New Messages</h3>

        <div className="mt-4 w-full">
            <NewMessageContainer />
            <NewMessageContainer />
            <NewMessageContainer />
            <NewMessageContainer />
        </div>
      </div>
    </>
  );
}
