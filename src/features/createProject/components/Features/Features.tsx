import { Dispatch, SetStateAction, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { Feature } from "../../../../entities/projects/interfaces/project-inputs.interface";

interface InputProps {
  addedFeatures: Feature[];
  setAddedFeatures: Dispatch<SetStateAction<Feature[]>>;
}

export default function Features({
  addedFeatures,
  setAddedFeatures,
}: InputProps) {
  const handleAddNewFeature = () => {
    setAddedFeatures((features) => {
      const newFeatures = features.slice();
      if (newFeatures.length > 0) {
        newFeatures.push({
          index: newFeatures[newFeatures.length - 1].index + 1,
          text: "",
        });
      } else {
        newFeatures.push({
          index: 0,
          text: "",
        });
      }
      return newFeatures;
    });
  };

  const handleUpdateFeature = (index: number, value: string) => {
    setAddedFeatures((features) => {
      const newFeatures = features.slice();
      newFeatures[index].text = value;

      return newFeatures;
    });
  };

  const handleDeleteFeature = (index: number) => {
    setAddedFeatures((features) => {
        let newFeatures = features.slice();
        const delEl = newFeatures[index];
        // Update indexes
        for (let i = index + 1; i < newFeatures.length; i++) {
            newFeatures[i].index -= 1;
        }
        // Delete element
        newFeatures = newFeatures.filter(el => el != delEl);

        return newFeatures;
    })
  };

  return (
    <>
      {/* Project features */}
      <div className="mt-4">
        <h4 className="font-bold text-white">Features</h4>
        {/* Features here */}
        {/* Feature */}
        {addedFeatures.map((feature) => (
          <AddedFeature
            key={feature.index}
            index={feature.index}
            text={feature.text}
            handleUpdateFeature={handleUpdateFeature}
            handleDeleteFeature={handleDeleteFeature}
          />
        ))}
        <button
          type="button"
          className="flex items-center justify-center w-full text-white border border-primary-800 rounded-lg py-2 mt-2 hover:ring-2 hover:ring-brand-600 transition duration-300"
          onClick={handleAddNewFeature}
        >
          <IoAddOutline className="me-2 text-xl" />
          Add new feature
        </button>
      </div>
    </>
  );
}

function AddedFeature({
  index,
  text,
  handleUpdateFeature,
  handleDeleteFeature
}: {
  index: number;
  text: string;
  handleUpdateFeature: (index: number, value: string) => void;
  handleDeleteFeature: (index: number) => void
}) {
  const [isTouched, setIsTouched] = useState(false);

  const touch = () => {
    if (isTouched === false) setIsTouched(true);
  }

  return (
    <>
      <div className="w-full flex items-center border border-primary-800 rounded-lg mt-2 overflow-hidden transition duration-300 hover:ring-2 hover:ring-brand-600">
        <input
          className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm text-white mt-1"
          placeholder="e.g Complex user authentication"
          type="text"
          value={text}
          onChange={(e) => handleUpdateFeature(index, e.target.value)}
          onClick={touch}
        />
        <div className="h-full sm:w-14 flex items-center justify-center p-2">
          <MdOutlineDelete className="text-red-600 cursor-pointer text-2xl hover:text-red-700" onClick={() => handleDeleteFeature(index)} />
        </div>
      </div>
      {isTouched && text === "" && <p className="text-red-500 text-sm mt-1">You must fill this field</p>}
    </>
  );
}
