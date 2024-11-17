import { IoArrowDownOutline, IoArrowUpOutline, IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Project() {
  const handleClickUp = () => {}

  const handleClickDown = () => {}

  const handleDelete = () => {}

  return (
    <>
      <div className="w-full flex flex-wrap items-center overflow-hidden min-h-14 bg-primary-900 rounded-lg shadow">
        {/* Project thumbnail */}
        <div className="shrink-0 w-max h-full flex justify-center overflow-hidden relative">
          <img
            className="object-cover w-20 h-14"
            src="https://www.marionikolovdev.com/images/administrator/image-7.jpg"
            alt="Thumbnail"
          />
        </div>
        <div className="grow shrink-0 flex items-center">
          <h3 className="ms-4 text-white font-bold xl:hidden">
            Portfolio Administrator
          </h3>
          <h3 className="ms-4 text-white font-bold hidden xl:inline-block">
            Portfolio Administrator
          </h3>
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center px-4 w-full grow py-4 border-t border-t-primary-800 sm:border-none sm:py-0 sm:grow-0 sm:w-auto">
          <Link to="">
            <IoCreateOutline className="text-brand-600 hover:text-brand-700 text-2xl cursor-pointer mx-1.5" />
          </Link>
          <IoTrashOutline
            className="text-red-600 hover:text-red-700 text-2xl cursor-pointer mx-1.5"
            onClick={handleDelete}
          />
          <IoArrowUpOutline
            className="text-white hover:text-brand-600 text-2xl cursor-pointer mx-1.5"
            onClick={handleClickUp}
          />
          <IoArrowDownOutline
            className="text-white hover:text-brand-600 text-2xl cursor-pointer mx-1.5"
            onClick={handleClickDown}
          />
        </div>
      </div>
    </>
  );
}
