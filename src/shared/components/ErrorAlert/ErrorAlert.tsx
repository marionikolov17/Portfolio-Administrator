import { IoAlertCircleOutline } from "react-icons/io5";

export default function ErrorAlert() {
    return (
        <>
            <div className="fixed w-full min-h-screen flex justify-center items-center z-50 error-bg font-poppins">
                <div className="w-full h-full absolute -z-10"></div>
                <div className="w-[450px] max-h-max py-8 rounded-lg shadow bg-primary-900 flex flex-col items-center px-4 z-30">
                    <IoAlertCircleOutline className="text-white mb-4 text-6xl"/>
                    <p className="text-red-600">A critical error has occurred. Please contact admin!</p>
                    <button className="mt-4 py-2 flex w-full justify-center text-white border border-white rounded-lg transition duration-300 hover:bg-white hover:text-primary-950">
                        Done
                    </button>
                </div>
            </div>
        </>
    )
}