import { IoChatbubblesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IMessage } from "../../../../entities/messages/interfaces/message.interface";
import { Models } from "appwrite";

export default function NewMessageContainer({ message }: { message: IMessage | Models.Document }) {
    return (
        <>
            <div className="w-full flex items-center shrink-0 py-2.5">
                <IoChatbubblesOutline className="text-4xl text-brand-600"/>
                <div className="ms-4 grow shrink-0">
                    <p className="text-white font-bold">{message?.name}</p>
                </div>
                <Link to={`/inbox/${message?.$id}`} className="py-1.5 px-4 text-white bg-brand-600 rounded-lg shadow text-sm hover:bg-blue-800 transition duration-300">
                    Read
                </Link>
            </div>
        </>
    )
}