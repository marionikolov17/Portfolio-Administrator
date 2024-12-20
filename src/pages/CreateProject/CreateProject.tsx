import { useCreateProject } from "../../entities/projects/contexts/create-project.context";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createProject } from "../../entities/projects/services/project.service.js";
import { Feature, Image, Skill, Tech } from "../../entities/projects/interfaces/project-inputs.interface";
import Project from "../../entities/projects/interfaces/project.interface.js";

import Features from "../../features/createProject/components/Features/Features";
import Skills from "../../features/createProject/components/Skills/Skills";
import Images from "../../features/createProject/components/Images/Images";
import Thumbnail from "../../features/createProject/components/Thumbnail/Thumbnail.js";
import TechStack from "../../features/createProject/components/TechStack/TechStack";
import AddIconsForm from "../../features/projects/components/AddIconsForm/AddIconsForm";
import HeaderDetails from "../../features/createProject/components/HeaderDetails/HeaderDetails.js";

import editProjectInputData from "../../entities/projects/utils/editInputData.js";
import validateProjectInputData from "../../entities/projects/utils/validateInputData.js";

export default function CreateProject() {
  const [addedFeatures, setAddedFeatures] = useState<Feature[]>([]);
  const [addedSkills, setAddedSkills] = useState<Skill[]>([]);
  const [addedImages, setAddedImages] = useState<Image[]>([]);
  const [addedTech, setAddedTech] = useState<Tech[]>([]);
  const [isSubmitedOnce, setIsSubmitedOnce] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { isIconsShow } = useCreateProject();

  const mutation = useMutation({
    mutationFn: (data: Project) => createProject(data),
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      navigate("/projects");
    },
    onError: () => {
      //console.log(error)
      setError("Could not create project");
    },
    onSettled: () => {
      setIsLoading(false);
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCreate = async (data: any) => {
    setIsSubmitedOnce(true);
    // 1) Edit the data
    const editedData = editProjectInputData({ ...data, tech: addedTech, images: addedImages, features: addedFeatures, skills: addedSkills });
    // 2) Add validation
    if(!validateProjectInputData(editedData)) return setError("Please fullfil all fields correctly");
    // 3) Create request
    mutation.mutate(editedData);
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
              
              <HeaderDetails register={register} errors={errors}/>
              <TechStack addedTech={addedTech} setAddedTech={setAddedTech}/>
              {/* Tech Stack Error */}
              {isSubmitedOnce && addedTech.length === 0 && <p className="text-red-600 text-sm mt-2">You must add tech stack</p>}
              <Thumbnail setValue={setValue}/>
              {/* Thumbnail Error */}
              {isSubmitedOnce && (getValues("imageUrl") === undefined || getValues("imageUrl") === null) && 
                <p className="text-red-600 text-sm mt-2">You must add thumbnail</p>
              }
              <Images addedImages={addedImages} setAddedImages={setAddedImages}/>
              {/* Images Error */}
              {isSubmitedOnce && addedImages.length === 0 && <p className="text-red-600 text-sm mt-2">You must add at least one image</p>}
              <Features addedFeatures={addedFeatures} setAddedFeatures={setAddedFeatures}/>
              {/* Features Error */}
              {isSubmitedOnce && addedFeatures.length === 0 && <p className="text-red-600 text-sm mt-2">You must add at least one feature</p>}
              <Skills addedSkills={addedSkills} setAddedSkills={setAddedSkills}/>
              {/* Skills Error */}
              {isSubmitedOnce && addedSkills.length === 0 && <p className="text-red-600 text-sm mt-2">You must add at least one skill</p>}

              {/* Project card action buttons */}
              <div className="mt-4 mb-2 flex items-center justify-end">
                <button
                  className="me-4 py-2 text-sm text-white hover:text-gray-500"
                  type="button"
                >
                  Cancel
                </button>
                <button 
                  className="py-2 px-4 bg-brand-600 text-white rounded-lg text-sm hover:shadow hover:bg-brand-700 disabled:bg-gray-100"
                  disabled={isLoading}
                >
                  Create
                </button>
              </div>

              {error && error !== "" && <p className="mt-2 text-red-600 text-center">{error}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
