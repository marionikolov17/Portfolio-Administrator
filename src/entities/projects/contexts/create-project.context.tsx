import { createContext, useContext, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreateProjectContext = createContext<any>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useCreateProject() {
  return useContext(CreateProjectContext);
}

export function CreateProjectProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [isIconsShow, setIsIconsShow] = useState(false);
  const [techStackIndex, setTechStackIndex] = useState(0);
  const [selectedTechnology, setSelectedTechnology] = useState("");

  return (
    <CreateProjectContext.Provider
      value={{
        isIconsShow,
        setIsIconsShow,
        techStackIndex,
        setTechStackIndex,
        selectedTechnology,
        setSelectedTechnology
      }}
    >
      {children}
    </CreateProjectContext.Provider>
  );
}
