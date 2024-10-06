import React, { createContext, useContext, useState } from "react";

const ErrorContext = createContext<any>(null);

export function useError() {
    return useContext(ErrorContext);
}

export function ErrorProvider({ children }: { children: React.ReactElement }) {
    const [isOpened, setIsOpened] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Critical error has occurred. Please contact support!");

    return (
        <ErrorContext.Provider value={{ isOpened, setIsOpened, errorMessage, setErrorMessage }}>
            {children}
        </ErrorContext.Provider>
    )
}