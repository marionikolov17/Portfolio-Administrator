import { CiCirclePlus, CiImageOn } from "react-icons/ci";
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { SiReact } from "react-icons/si";

export default function CreateProject() {
    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] h-max overflow-x-hidden py-1 px-1">
                    <div className="w-full">
                            <form className="w-full px-4 pb-4">
                                {/* Project Header information */}
                                <h1 className="text-white font-bold text-2xl">Create Project</h1>
                                <div className="w-full flex flex-wrap gap-x-4">
                                    {/* Project Name */}
                                    <div className="mt-4">
                                        <label htmlFor="" className="block text-base font-medium text-white">Project Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="e.g Awesome Project" 
                                            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
                                        />
                                    </div>
                                    {/* Project short description */}
                                    <div className="mt-4 grow w-full">
                                        <label htmlFor="" className="block text-base font-medium text-white">Short Description</label>
                                        <input 
                                            type="text" 
                                            placeholder="e.g Incoming app that will help people." 
                                            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
                                        />
                                    </div>
                                    {/* Project Github URL */}
                                    <div className="mt-4 grow">
                                        <label htmlFor="" className="block text-base font-medium text-white">Github URL</label>
                                        <input 
                                            type="text" 
                                            placeholder="You can leave it empty." 
                                            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
                                        />
                                    </div>
                                    {/* Project Demo URL */}
                                    <div className="mt-4 grow">
                                        <label htmlFor="" className="block text-base font-medium text-white">Demo URL</label>
                                        <input 
                                            type="text" 
                                            placeholder="You can leave it empty." 
                                            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
                                        />
                                    </div>
                                </div>
                                {/* Project tech stack */}
                                <div className="w-full mt-4">
                                    <h4 className="font-bold text-white">Tech Stack</h4>
                                    {/* Added field */}
                                    <div className="w-full flex flex-wrap gap-y-2 items-center mt-2">
                                        <input type="text" placeholder="e.g Front-End" className="py-2 px-4 bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600" />
                                        <CiCirclePlus className="text-3xl ms-4 cursor-pointer hover:text-brand-600 text-white"/>
                                        {/* Selected */}
                                        {/* Technology container */}
                                        <div className="relative p-4">
                                            <SiReact className="text-3xl text-[#61dbfb]" />
                                            <IoCloseOutline className="absolute top-0 right-0 cursor-pointer bg-strongRed rounded-full text-white text-sm hover:text-brand-600" />
                                        </div>
                                        {/* Technology container */}
                                        <div className="relative p-4">
                                            <SiReact className="text-3xl text-[#61dbfb]" />
                                            <IoCloseOutline className="absolute top-0 right-0 cursor-pointer bg-strongRed rounded-full text-white text-sm hover:text-brand-600" />
                                        </div>
                                    </div>
                                    {/* Add new field */}
                                    <div className="w-full flex justify-center mt-2">
                                        <button type="button" className="flex items-center text-white py-2 px-4 border border-primary-800 transition duration-300 rounded-lg hover:ring-2 hover:ring-brand-600">
                                            <IoAddOutline className="text-xl me-2"/>
                                            Add new field
                                        </button>
                                    </div>
                                </div>
                                {/* Project Thumbnail */}
                                <div className="mt-4">
                                    <h4 className="font-bold text-white">Thumbnail</h4>
                                    <div className="mt-2 h-32 w-32 border border-primary-800 border-dashed rounded-lg flex flex-col items-center justify-center">
                                        <CiImageOn className="text-3xl text-brand-600"/>
                                        <label htmlFor="" className="text-white hover:text-brand-600 text-sm font-bold mt-2 cursor-pointer">Upload a file</label>
                                    </div>
                                </div>
                                {/* Project Images */}
                                <div className="mt-4">
                                    <h4 className="font-bold text-white">Images</h4>
                                    <p className="text-xs text-slate-400">Up to 7 images</p>
                                    {/* Images container */}
                                    <div className="flex flex-wrap items-center mt-4">
                                        {/* Show images here */}
                                        <div className="w-32 h-28 flex overflow-hidden rounded-lg me-4 relative">
                                            <img src="/images/zynkle-1.jpg" alt="" className="object-cover" />
                                            <IoCloseOutline className="absolute z-30 top-0 right-0 m-2 text-xl cursor-pointer bg-white rounded-full shadow"/>
                                        </div>
                                        <label htmlFor="">
                                            <CiCirclePlus className="text-4xl cursor-pointer hover:text-brand-600 text-white"/>
                                        </label>
                                    </div>
                                </div>
                                {/* Project features */}
                                <div className="mt-4">
                                    <h4 className="font-bold text-white">Features</h4>
                                    {/* Features here */}
                                    {/* Feature */}
                                    <div className="w-full flex items-center border border-primary-800 rounded-lg mt-2 overflow-hidden transition duration-300 hover:ring-2 hover:ring-brand-600">
                                        <input 
                                            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm text-white mt-1"
                                            placeholder="e.g Complex user authentication"
                                            type="text" 
                                        />
                                        <div className="h-full sm:w-14 flex items-center justify-center p-2">
                                            <MdOutlineDelete className="text-red-600 cursor-pointer text-2xl hover:text-red-700"/>
                                        </div>
                                    </div>
                                    <button 
                                        type="button"
                                        className="flex items-center justify-center w-full text-white border border-primary-800 rounded-lg py-2 mt-2 hover:ring-2 hover:ring-brand-600 transition duration-300"
                                    >
                                        <IoAddOutline className="me-2 text-xl"/>
                                        Add new feature
                                    </button>
                                </div>
                                {/* Project what I've learned */}
                                <div className="mt-4">
                                    <h4 className="font-bold text-white">What I've learned</h4>
                                    {/* skills here */}
                                    {/* skill */}
                                    <div className="w-full flex items-center border border-primary-800 rounded-lg mt-2 overflow-hidden transition duration-300 hover:ring-2 hover:ring-brand-600">
                                        <input 
                                            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm text-white mt-1"
                                            placeholder="e.g Polished my React skills"
                                            type="text" 
                                        />
                                        <div className="h-full sm:w-14 flex items-center justify-center p-2">
                                            <MdOutlineDelete className="text-red-600 hover:text-red-700 cursor-pointer text-2xl"/>
                                        </div>
                                    </div>
                                    <button 
                                        type="button"
                                        className="flex items-center justify-center w-full text-white border border-primary-800 rounded-lg py-2 mt-2 hover:ring-2 hover:ring-brand-600 transition duration-300"
                                    >
                                        <IoAddOutline className="me-2 text-xl"/>
                                        Add new skill
                                    </button>
                                </div>
                                {/* Project card action buttons */}
                                <div className="mt-4 mb-2 flex items-center justify-end">
                                    <button className="me-4 py-2 text-sm text-white hover:text-gray-500" type="button">
                                        Cancel
                                    </button>
                                    <button className="py-2 px-4 bg-brand-600 text-white rounded-lg text-sm hover:shadow hover:bg-brand-700">
                                        Create
                                    </button>
                                </div>
                            </form>
                    </div>
                </div>
            </section>
        </>
    )
}