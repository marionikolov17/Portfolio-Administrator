import { CiCirclePlus, CiImageOn } from "react-icons/ci";
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import AddIconsForm from "../../features/projects/components/AddIconsForm/AddIconsForm";
import { useCreateProject } from "../../entities/projects/contexts/create-project.context";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Features from "../../features/createProject/components/Features/Features";
import Skills from "../../features/createProject/components/Skills/Skills";
import Images from "../../features/createProject/components/Images/Images";

interface Feature {
  index: number;
  text: string;
}

interface Skill {
  index: number;
  text: string
}

interface Image {
  index: number;
  file: File;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageSrc: any
}

export default function CreateProject() {
  const [addedFeatures, setAddedFeatures] = useState<Feature[]>([]);
  const [addedSkills, setAddedSkills] = useState<Skill[]>([]);
  const [addedImages, setAddedImages] = useState<Image[]>([]);

  const { isIconsShow, setIsIconsShow } = useCreateProject();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCreate = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
        <div className="w-full 2xl:w-[70%] h-max overflow-x-hidden py-1 px-1 relative">
          {isIconsShow && <AddIconsForm />}
          <div className={`w-full ${isIconsShow && "blur-md"}`}>
            <form
              className="w-full px-4 pb-4"
              onSubmit={handleSubmit(onCreate)}
            >
              {/* Project Header information */}
              <h1 className="text-white font-bold text-2xl">Create Project</h1>
              <div className="w-full flex flex-wrap gap-x-4">
                {/* Project Name */}
                <div className="mt-4">
                  <label
                    htmlFor=""
                    className="block text-base font-medium text-white"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g Awesome Project"
                    className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
                  />
                </div>
                {/* Project short description */}
                <div className="mt-4 grow w-full">
                  <label
                    htmlFor=""
                    className="block text-base font-medium text-white"
                  >
                    Short Description
                  </label>
                  <input
                    type="text"
                    placeholder="e.g Incoming app that will help people."
                    className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
                  />
                </div>
                {/* Project Github URL */}
                <div className="mt-4 grow">
                  <label
                    htmlFor=""
                    className="block text-base font-medium text-white"
                  >
                    Github URL
                  </label>
                  <input
                    type="text"
                    placeholder="You can leave it empty."
                    className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
                  />
                </div>
                {/* Project Demo URL */}
                <div className="mt-4 grow">
                  <label
                    htmlFor=""
                    className="block text-base font-medium text-white"
                  >
                    Demo URL
                  </label>
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
                  <input
                    type="text"
                    placeholder="e.g Front-End"
                    className="py-2 px-4 bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
                  />
                  <CiCirclePlus
                    className="text-3xl ms-4 cursor-pointer hover:text-brand-600 text-white"
                    onClick={() => setIsIconsShow(true)}
                  />
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
                  <button
                    type="button"
                    className="flex items-center text-white py-2 px-4 border border-primary-800 transition duration-300 rounded-lg hover:ring-2 hover:ring-brand-600"
                  >
                    <IoAddOutline className="text-xl me-2" />
                    Add new field
                  </button>
                </div>
              </div>
              {/* Project Thumbnail */}
              <div className="mt-4">
                <h4 className="font-bold text-white">Thumbnail</h4>
                <div className="mt-2 h-32 w-32 border border-primary-800 border-dashed rounded-lg flex flex-col items-center justify-center">
                  <CiImageOn className="text-3xl text-brand-600" />
                  <label
                    htmlFor=""
                    className="text-white hover:text-brand-600 text-sm font-bold mt-2 cursor-pointer"
                  >
                    Upload a file
                  </label>
                </div>
              </div>
              
              <Images addedImages={addedImages} setAddedImages={setAddedImages}/>
              <Features addedFeatures={addedFeatures} setAddedFeatures={setAddedFeatures}/>
              <Skills addedSkills={addedSkills} setAddedSkills={setAddedSkills}/>

              {/* Project card action buttons */}
              <div className="mt-4 mb-2 flex items-center justify-end">
                <button
                  className="me-4 py-2 text-sm text-white hover:text-gray-500"
                  type="button"
                >
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
  );
}
