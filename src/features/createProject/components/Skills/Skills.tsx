import { Dispatch, SetStateAction } from "react";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { Skill } from "../../../../entities/projects/interfaces/project-inputs.interface";

interface InputProps {
  addedSkills: Skill[];
  setAddedSkills: Dispatch<SetStateAction<Skill[]>>;
}

export default function Skills({ addedSkills, setAddedSkills }: InputProps) {
  const handleAddNewSkill = () => {
    setAddedSkills((skills) => {
      const newSkills = skills.slice();
      if (newSkills.length > 0) {
        newSkills.push({
          index: newSkills[newSkills.length - 1].index + 1,
          text: "",
        });
      } else {
        newSkills.push({
          index: 0,
          text: "",
        });
      }
      return newSkills;
    });
  };

  const handleUpdateSkill = (index: number, value: string) => {
    setAddedSkills((skills) => {
      const newSkills = skills.slice();
      newSkills[index].text = value;

      return newSkills;
    });
  };

  const handleDeleteSkill = (index: number) => {
    setAddedSkills((skills) => {
      let newSkills = skills.slice();
      const delEl = newSkills[index];
      // Update indexes
      for (let i = index + 1; i < newSkills.length; i++) {
        newSkills[i].index -= 1;
      }
      // Delete element
      newSkills = newSkills.filter((el) => el != delEl);

      return newSkills;
    });
  };

  return (
    <>
      <div className="mt-4">
        <h4 className="font-bold text-white">What I've learned</h4>

        {addedSkills.map((skill) => (
          <AddedSkill
            key={skill.index}
            index={skill.index}
            text={skill.text}
            handleUpdateSkill={handleUpdateSkill}
            handleDeleteSkill={handleDeleteSkill}
          />
        ))}

        <button
          type="button"
          className="flex items-center justify-center w-full text-white border border-primary-800 rounded-lg py-2 mt-2 hover:ring-2 hover:ring-brand-600 transition duration-300"
          onClick={handleAddNewSkill}
        >
          <IoAddOutline className="me-2 text-xl" />
          Add new skill
        </button>
      </div>
    </>
  );
}

function AddedSkill({
  index,
  text,
  handleUpdateSkill,
  handleDeleteSkill,
}: {
  index: number;
  text: string;
  handleUpdateSkill: (index: number, value: string) => void;
  handleDeleteSkill: (index: number) => void;
}) {
  return (
    <>
      {/* skill */}
      <div className="w-full flex items-center border border-primary-800 rounded-lg mt-2 overflow-hidden transition duration-300 hover:ring-2 hover:ring-brand-600">
        <input
          className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm text-white mt-1"
          placeholder="e.g Polished my React skills"
          type="text"
          value={text}
          onChange={(e) => handleUpdateSkill(index, e.target.value)}
        />
        <div className="h-full sm:w-14 flex items-center justify-center p-2">
          <MdOutlineDelete className="text-red-600 hover:text-red-700 cursor-pointer text-2xl" onClick={() => handleDeleteSkill(index)} />
        </div>
      </div>
    </>
  );
}
