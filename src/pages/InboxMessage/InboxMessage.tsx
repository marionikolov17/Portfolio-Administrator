import { Link } from "react-router-dom";
import { IoArrowBackOutline, IoPersonCircleOutline, IoStarOutline } from "react-icons/io5";

export default function InboxMessage() {
    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] min-h-80 h-max overflow-x-hidden">
                    <Link to="/inbox" className="text-white text-2xl">
                        <IoArrowBackOutline />
                    </Link>
                    {/* Title */}
                    <h1 className="mt-8 text-white font-bold text-2xl sm:text-3xl">Exciting Job Opportunity!</h1>
                    {/* Sender */}
                    <div className="mt-4 flex">
                        <div className="flex grow justify-start items-center">
                            <IoPersonCircleOutline className="text-brand-600 text-4xl"/>
                            <h3 className="ms-2 text-white font-bold text-lg">Mario Nikolov</h3>
                        </div>
                        <div className="grow flex items-center justify-end">
                            <p className="text-primary-700 text-sm me-3">20:43</p>
                            <IoStarOutline className="text-white text-xl cursor-pointer"/>
                        </div>
                    </div>
                    {/* Message */}
                    <div className="mt-4 overflow-x-hidden w-full min-h-80">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus praesentium perferendis ipsa earum, at suscipit fugit fuga blanditiis corporis temporibus magnam voluptas ea beatae amet sequi illo minima. Totam, atque.</p>
                    </div>
                </div>
            </section>
        </>
    )
}