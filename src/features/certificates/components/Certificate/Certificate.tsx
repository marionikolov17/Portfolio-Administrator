import { Link } from "react-router-dom";
import { IoArrowDownOutline, IoArrowUpOutline, IoCreateOutline, IoTrashOutline } from "react-icons/io5";

export default function Certificate() {
  return (
    <>
      <div className="w-full flex flex-wrap items-center overflow-hidden min-h-14 bg-primary-900 rounded-lg shadow">
        {/* Certificate image */}
        <div className="shrink-0 w-max h-full flex justify-center overflow-hidden">
          <img
            className="object-cover w-20 max-h-14"
            src="https://cloud.appwrite.io/v1/storage/buckets/670571e3001ab6e74ef8/files/670572110013b202a8cc/view?project=66fe98e400350a2afae6&project=66fe98e400350a2afae6&mode=admin"
            alt="certificate image"
          />
        </div>
        <div className="grow shrink-0 flex items-center">
          <h3 className="ms-4 text-white font-bold">Programming Fundam...</h3>
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center px-4 w-full grow py-4 border-t border-t-primary-800 sm:border-none sm:py-0 sm:grow-0 sm:w-auto">
          <Link to="/certificates/edit/1"><IoCreateOutline className="text-brand-600 hover:text-brand-700 text-2xl cursor-pointer mx-1.5"/></Link>
          <IoTrashOutline className="text-red-600 hover:text-red-700 text-2xl cursor-pointer mx-1.5"/>
          <IoArrowUpOutline className="text-white hover:text-brand-600 text-2xl cursor-pointer mx-1.5"/>
          <IoArrowDownOutline className="text-white hover:text-brand-600 text-2xl cursor-pointer mx-1.5"/>
        </div>
      </div>
    </>
  );
}
