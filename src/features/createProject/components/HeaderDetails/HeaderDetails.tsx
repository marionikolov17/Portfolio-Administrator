import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export default function HeaderDetails({
  register,
  errors,
}: {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}) {
  return (
    <>
      <div className="w-full flex flex-wrap gap-x-4">
        {/* Project Name */}
        <div className="mt-4">
          <label htmlFor="" className="block text-base font-medium text-white">
            Project Name
          </label>
          <input
            type="text"
            placeholder="e.g Awesome Project"
            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
          />
        </div>
        {/* Project short description */}
        <div className="mt-4 grow w-full">
          <label htmlFor="" className="block text-base font-medium text-white">
            Short Description
          </label>
          <input
            type="text"
            placeholder="e.g Incoming app that will help people."
            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
          />
        </div>
        {/* Project Github URL */}
        <div className="mt-4 grow">
          <label htmlFor="" className="block text-base font-medium text-white">
            Github URL
          </label>
          <input
            type="text"
            placeholder="You can leave it empty."
            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
          />
        </div>
        {/* Project Demo URL */}
        <div className="mt-4 grow">
          <label htmlFor="" className="block text-base font-medium text-white">
            Demo URL
          </label>
          <input
            type="text"
            placeholder="You can leave it empty."
            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
          />
        </div>
      </div>
    </>
  );
}
