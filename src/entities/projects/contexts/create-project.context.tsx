import { createContext, useContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreateProjectContext = createContext<any>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useCreateProject() {
    return useContext(CreateProjectContext);
}

export function CreateProjectProvider({ children }: { children: React.ReactElement }) {
    return (
        <CreateProjectContext.Provider value={{}}>
            {children}
        </CreateProjectContext.Provider>
    )
}