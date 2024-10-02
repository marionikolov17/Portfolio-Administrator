import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

export default function InboxMessage() {
    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] h-max overflow-x-hidden">
                    <Link to="/inbox" className="text-white text-2xl">
                        <IoArrowBackOutline />
                    </Link>
                </div>
            </section>
        </>
    )
}