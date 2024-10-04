import { Models } from "appwrite";
import { IMessage } from "../../../../entities/messages/interfaces/message.interface";
import Message from "../Message/Message";

export default function MessagesContainer({ messages }: { messages: Array<IMessage> | Models.Document[] | undefined }) {
    return (
        <>
            <div className="w-full overflow-x-hidden h-max py-2">
                <Message isFavourite={true} isRead={false}/>
                <Message isFavourite={false} isRead={true}/>
                <Message isFavourite={true} isRead={false}/>
            </div>
        </>
    )
}