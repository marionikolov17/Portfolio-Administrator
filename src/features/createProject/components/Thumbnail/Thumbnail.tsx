import { CiImageOn } from "react-icons/ci";

export default function Thumbnail() {
  return (
    <>
      {/* Project Thumbnail */}
      <div className="mt-4">
        <h4 className="font-bold text-white">Thumbnail</h4>
        <div className="mt-2 h-32 w-32 border border-primary-800 border-dashed rounded-lg flex flex-col items-center justify-center">
          <CiImageOn className="text-3xl text-brand-600" />
          <label
            htmlFor=""
            className="text-white hover:text-brand-600 text-sm font-bold mt-2 cursor-pointer"
          >
            Upload a file
          </label>
        </div>
      </div>
    </>
  );
}
