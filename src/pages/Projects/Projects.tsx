import { RiStickyNoteAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Project from "../../features/projects/components/Project/Project";

export default function Projects() {
    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] h-max overflow-x-hidden py-1 px-1">
                    <h1 className="text-white font-bold text-2xl">Projects</h1>
                    <Link to="/projects/create" className="mt-4 w-max text-sm flex justify-center items-center px-4 py-2 text-white rounded-lg border border-primary-800 hover:ring-2 hover:ring-blue-900 transition duration-300">
                        <RiStickyNoteAddLine  className="me-2 text-xl"/>
                        Add Project
                    </Link>

                    <div className="w-full mt-6 flex flex-col gap-y-4">
                        <Project />
                    </div>
                </div>
            </section>
        </>
    )
}