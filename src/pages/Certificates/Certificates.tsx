import { MdOutlineNoteAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Certificate from "../../features/certificates/components/Certificate/Certificate";

export default function Certificates() {
    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] h-max overflow-x-hidden py-1 px-1">
                    <h1 className="text-white font-bold text-2xl">Certificates</h1>
                    <Link to="/certificates/create" className="mt-4 w-max text-sm flex justify-center items-center px-4 py-2 text-white rounded-lg border border-primary-800 hover:ring-2 hover:ring-blue-900 transition duration-300">
                        <MdOutlineNoteAdd  className="me-2 text-xl"/>
                        Add Certificate
                    </Link>
                    {/* Fetched certificates here */}
                    <div className="w-full mt-6 flex flex-col gap-y-4">
                        <Certificate />
                        <Certificate />
                    </div>
                </div>
            </section>
        </>
    )
}