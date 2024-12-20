import { CiCirclePlus } from "react-icons/ci";
import { useCreateProject } from "../../../../entities/projects/contexts/create-project.context";
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";
import { Tech } from "../../../../entities/projects/interfaces/project-inputs.interface";
import { Dispatch, SetStateAction, useEffect } from "react";
import { techIcons } from "../../../../shared/data/tech-icons";

interface InputProps {
  addedTech: Tech[];
  setAddedTech: Dispatch<SetStateAction<Tech[]>>;
}

export default function TechStack({ addedTech, setAddedTech }: InputProps) {
  const addNewTech = () => {
    setAddedTech(currentTech => {
      const newTech = currentTech.slice(0);
      newTech.push({ name: "", technologies: [] });
      return newTech;
    })
  }

  return (
    <>
      {/* Project tech stack */}
      <div className="w-full mt-4">
        <h4 className="font-bold text-white">Tech Stack</h4>
        {
          addedTech.map((tech, index) => (
            <AddedTech key={index} tech={tech} index={index} setAddedTech={setAddedTech}/>
          ))
        }
        {/* Add new field */}
        <div className="w-full flex justify-center mt-2">
          <button
            type="button"
            className="flex items-center text-white py-2 px-4 border border-primary-800 transition duration-300 rounded-lg hover:ring-2 hover:ring-brand-600"
            onClick={addNewTech}
          >
            <IoAddOutline className="text-xl me-2" />
            Add new field
          </button>
        </div>
      </div>
    </>
  );
}

function AddedTech({ tech, index, setAddedTech }: { tech: Tech, index: number, setAddedTech: Dispatch<SetStateAction<Tech[]>> }) {
  const { setIsIconsShow, setTechStackIndex, techStackIndex, selectedTechnology } = useCreateProject();

  const showIconsForm = () => {
    setTechStackIndex(index);
    setIsIconsShow(true);
  }

  const changeTechName = (value: string) => {
    setAddedTech(currentTech => {
      const newTech = currentTech.slice(0);

      newTech[index].name = value;

      return newTech;
    });
  }

  useEffect(() => {
    /* If not chosed technology */
    if (selectedTechnology === "") return;
    /* If technology already chosed */
    if (tech.technologies.includes(selectedTechnology)) return;

    setAddedTech(currentTech => {
      //console.log("updating")
      const newTech = currentTech.slice(0);
      const selectedTechnologies = newTech[techStackIndex].technologies.slice();

      if (selectedTechnologies.includes(selectedTechnology)) return newTech;

      selectedTechnologies.push(selectedTechnology);
      newTech[techStackIndex].technologies = selectedTechnologies;

      return newTech;
    })
  }, [selectedTechnology, setAddedTech, tech.technologies, techStackIndex])

  const removeTechnology = (name: string) => {
    setAddedTech(currentTech => {
      const newTech = currentTech.slice(0);
      let selectedTechnologies = newTech[index].technologies.slice(0);
      selectedTechnologies = selectedTechnologies.filter(value => value !== name);
      newTech[index].technologies = selectedTechnologies;

      return newTech;
    })
  }

  return (
    <>
      {/* Added field */}
      <div className="w-full flex flex-wrap gap-y-2 items-center mt-2">
        <input
          type="text"
          placeholder="e.g Front-End"
          className="py-2 px-4 bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
          onChange={(e) => changeTechName(e.target.value)}
        />
        <CiCirclePlus
          className="text-3xl ms-4 cursor-pointer hover:text-brand-600 text-white"
          onClick={showIconsForm}
        />
        {/* Selected */}
        {tech.technologies.map((name, index) => {
          return <TechnologyContainer key={index} name={name} removeTechnology={removeTechnology}/>
        })}
      </div>
    </>
  );
}

function TechnologyContainer({ name, removeTechnology }: { name: string, removeTechnology: (name: string) => void }) {
  return (
    <>
      {/* Technology container */}
      <div className="relative p-4">
        {techIcons[name]}
        <IoCloseOutline 
          className="absolute top-0 right-0 cursor-pointer bg-strongRed rounded-full text-white text-sm hover:text-brand-600" 
          onClick={() => removeTechnology(name)}
        />
      </div>
    </>
  )
}