import { BsFiletypePng } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function EditCertificate() {
  const handleDrop = () => {};

  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
        <div className="w-full sm:w-[450px] h-max overflow-x-hidden py-1 px-1">
          <h1 className="text-white font-bold text-2xl">Edit Certificate</h1>
          <form className="mt-8">
            {/* Certificate Name */}
            <div className="mt-6 w-full">
              <label
                htmlFor="title"
                className="block text-sm font-bold text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="title"
                required
                placeholder="e.g ReactJS - June 2024"
                className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
              />
            </div>
            {/* Certificate Image */}
            <div className="col-span-full mt-4">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-white"
              >
                Upload photo
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="mt-2 flex justify-center rounded-lg border border-dashed border-primary-800 px-6 py-10"
              >
                <div className="text-center">
                  {/* <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" /> */}
                  <BsFiletypePng className="mx-auto h-12 w-12 text-gray-300" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-semibold text-mainGreen"
                    >
                      <span className="text-white">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={(e) => onImageUpload(e)}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 50MB
                  </p>
                </div>
              </div>
            </div>
            {/* Certificate Credential URL */}
            <div className="mt-4 w-full">
              <label
                htmlFor="credentialUrl"
                className="block text-sm font-bold text-white"
              >
                Credential Url
              </label>
              <input
                type="text"
                id="credentialUrl"
                required
                placeholder="e.g https://www.cert.com/"
                className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
              />
            </div>
            <div className="flex w-full justify-end items-center h-max mt-6">
                <button className="rounded-lg flex grow justify-center px-8 py-1.5 text-white bg-brand-600 hover:bg-brand-700">
                    Edit
                </button>
                <Link to="/certificates" className="py-1.5 ps-8 flex items-center text-white text-sm">
                    Cancel
                </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
