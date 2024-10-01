import Message from "../Message/Message";

export default function MessagesContainer() {
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