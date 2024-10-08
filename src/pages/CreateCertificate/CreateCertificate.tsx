import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFiletypePng } from "react-icons/bs";
import { allowedImageMimeTypes } from "../../shared/constants/allowed-files.constant";
import ImageVisualizer from "../../features/certificates/components/ImageVisualizer/ImageVisualizer";
import { createCertificate } from "../../entities/certificates/services/certificate.service";
import { useNavigate } from "react-router-dom";
import { CreateCertificateData } from "../../entities/certificates/interfaces/certificate.interface";

export default function CreateCertificate() {
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onCreate = async (data: CreateCertificateData) => {
    setIsLoading(true);

    try {
      await createCertificate(data);
      navigate("/certificates");
    } catch (error: unknown) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const file = files[files.length - 1];
    handleFile(file);
  };

  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    const file = files[files.length - 1];
    handleFile(file);
  };

  const handleFile = (file: File) => {
    if (!allowedImageMimeTypes.includes(file.type)) {
      // Show message
      return setError("Invalid file type. Only images allowed");
    }
    // Visualize image
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (readerEvent) => {
      setImage(readerEvent.target?.result as string);
    };
    setError(null);
    setValue("imageUrl", file);
  };

  const onImageRemove = () => {
    setValue("imageUri", undefined);
    setImage(undefined);
  };

  return (
    <>
      <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
        <div className="w-full sm:w-[450px] h-max overflow-x-hidden py-1 px-1">
          <h1 className="text-white font-bold text-2xl">Create Certificate</h1>
          <form className="mt-8" onSubmit={handleSubmit(onCreate)}>
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
                {...register("title", { required: "This field is required" })}
                placeholder="e.g ReactJS - June 2024"
                className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
              />
              {errors.title && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.title.message as string}
                </p>
              )}
            </div>
            {/* Certificate Image */}
            {!image && (
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
            )}

            {image && (
              <ImageVisualizer image={image} onImageRemove={onImageRemove} />
            )}

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
                {...register("credentialUrl", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
                    message: "This field should be valid Url",
                  },
                })}
                placeholder="e.g https://www.cert.com/"
                className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
              />
              {errors.credentialUrl && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.credentialUrl.message as string}
                </p>
              )}
            </div>
            <button disabled={isLoading} className="mt-6 w-full rounded-lg flex justify-center py-2 text-white bg-brand-600 hover:bg-brand-700 disabled:bg-brand-200">
              Create
            </button>
            {error && (
              <p className="text-center text-red-600 text-sm mt-2">{error}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
