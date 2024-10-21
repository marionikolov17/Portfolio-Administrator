import { useState } from "react";
import { techIconsKeys } from "../../../../shared/constants/tech-icons.constant";
import IconSelect from "../IconSelect/IconSelect";
import { sortIconsByQuery } from "../utils/sortIconsByQuery";

export default function AddIconsForm() {
    const [query, setQuery] = useState("");

    const sortedKeys = sortIconsByQuery(techIconsKeys, query)

    return (
        <>
            <div className="absolute z-20 w-full h-screen flex items-start justify-center">
                <div className="-z-50 w-full h-full absolute"></div>
                <div className="w-96 h-96 overflow-y-scroll rounded-lg shadow bg-primary-900 no-scrollbar z-10">
                    <input 
                        type="text" 
                        placeholder="Search..."
                        className="w-full bg-transparent outline-none border-b border-b-primary-800 px-4 py-3 text-white"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {/* Displaying icons here */}
                    {sortedKeys.map(key => (
                        <IconSelect name={key} key={key}/>
                    ))}
                </div>
            </div>
        </>
    )
}