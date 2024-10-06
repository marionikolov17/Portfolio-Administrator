import { IoAlertCircleOutline } from "react-icons/io5";
import { useError } from "../../context/error.context";

export default function ErrorAlert() {
    const { setIsOpened, errorMessage } = useError();

    return (
        <>
            <div className="fixed w-full min-h-screen flex justify-center items-center z-50 error-bg font-poppins px-4">
                <div className="w-full h-full absolute -z-10" onClick={() => setIsOpened(false)}></div>
                <div className="w-full sm:w-[450px] max-h-max py-4 rounded-lg shadow bg-primary-900 flex flex-col items-center px-4 z-30">
                    <IoAlertCircleOutline className="text-white mb-4 text-6xl"/>
                    <p className="text-red-600 text-center">{errorMessage}</p>
                    <button onClick={() => setIsOpened(false)} className="mt-4 py-2 flex w-full justify-center text-white border border-white rounded-lg transition duration-300 hover:bg-white hover:text-primary-950">
                        Done
                    </button>
                </div>
            </div>
        </>
    )
}