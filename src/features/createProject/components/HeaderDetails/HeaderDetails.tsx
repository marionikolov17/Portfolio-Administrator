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
          <label htmlFor="name" className="block text-base font-medium text-white">
            Project Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g Awesome Project"
            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.name.message as string}
                </p>
          )}
        </div>
        {/* Project short description */}
        <div className="mt-4 grow w-full">
          <label htmlFor="summary" className="block text-base font-medium text-white">
            Short Description
          </label>
          <input
            id="summary"
            type="text"
            placeholder="e.g Incoming app that will help people."
            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
            {...register("summary", { required: "This field is required" })}
          />
          {errors.summary && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.summary.message as string}
                </p>
          )}
        </div>
        {/* Project Github URL */}
        <div className="mt-4 grow">
          <label htmlFor="githubUrl" className="block text-base font-medium text-white">
            Github URL
          </label>
          <input
            id="githubUrl"
            type="text"
            placeholder="You can leave it empty."
            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
            {...register("githubUrl")}
          />
        </div>
        {/* Project Demo URL */}
        <div className="mt-4 grow">
          <label htmlFor="demoUrl" className="block text-base font-medium text-white">
            Demo URL
          </label>
          <input
            id="demoUrl"
            type="text"
            placeholder="You can leave it empty."
            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
            {...register("demoUrl")}
          />
        </div>
      </div>
    </>
  );
}
