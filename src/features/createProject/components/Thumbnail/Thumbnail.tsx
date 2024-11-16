import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { allowedImageMimeTypes } from "../../../../shared/constants/allowed-files.constant";
import { UseFormSetValue } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Thumbnail({ setValue }: { setValue: UseFormSetValue<any> }) {
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<string | undefined>();

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
      {/* Project Thumbnail */}
      <div className="mt-4">
        <h4 className="font-bold text-white">Thumbnail</h4>
        {!image &&
        <div 
          className="mt-2 h-32 w-32 border border-primary-800 border-dashed rounded-lg flex flex-col items-center justify-center"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <CiImageOn className="text-3xl text-brand-600" />
          <label
            htmlFor="file-upload"
            className="text-white hover:text-brand-600 text-sm font-bold mt-2 cursor-pointer"
          >
            Upload a file
          </label>
          <input 
            id="file-upload"
            name="file-upload"
            type="file" 
            className="hidden"
            onChange={(e) => onImageUpload(e)}
          />
        </div>
        }
        {image &&
          <Visualizer image={image} onImageRemove={onImageRemove}/>
        }
        {error && error !== "" &&
          <p className="text-red-600 text-sm mt-2">{error}</p>
        }
      </div>
    </>
  );
}

function Visualizer({ image, onImageRemove }: { image: string | undefined, onImageRemove: () => void }) {
  return (
    <>
      <div className="mt-2 h-32 w-32 border border-primary-800 border-dashed rounded-lg flex flex-col items-center justify-center overflow-hidden relative">
        <img src={image} alt="Thumbnail" className="object-cover h-full z-10" />
        <IoCloseOutline 
          className="absolute top-0 right-0 m-2 z-20 text-lg bg-white shadow rounded-full cursor-pointer"
          onClick={onImageRemove}
        />
      </div>
    </>
  )
}