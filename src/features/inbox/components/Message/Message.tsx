import { IoStarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IMessage } from "../../../../entities/messages/interfaces/message.interface";
import { Models } from "appwrite";
import { dateConverter } from "../../../../shared/utils/dateConverter";

export default function Message({ message }: { message: IMessage | Models.Document | undefined }) {
    const navigate = useNavigate();

    const handleClick = () => navigate(`/inbox/${message?.$id}`);

    return (
        <>
            <div className={`w-full cursor-pointer flex items-center py-3 px-4 overflow-hidden ${!message?.isRead && "bg-primary-900"}`} onClick={handleClick}>
                <IoStarOutline className={`${message?.isFavourite ? "text-brand-600" : "text-white"} text-xl`}/>
                <h3 className={`text-white ${!message?.isRead && "font-bold"} my-auto ms-4 text-sm hidden sm:inline-block`}>{message?.name}</h3>
                <div className="ms-4 sm:ms-12 grow block">
                    <h3 className={`text-white ${!message?.isRead && "font-bold"} my-auto mb-1 text-sm block sm:hidden`}>{message?.name}</h3>
                    <h4 className={`text-white ${!message?.isRead && "font-bold"} text-sm`}>{message?.title}</h4>
                </div>
                <p className="text-primary-700 text-sm">{dateConverter(message?.$createdAt as string)}</p>
            </div>
        </>
    )
}