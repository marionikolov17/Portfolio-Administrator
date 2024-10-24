/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { allowedImageMimeTypes } from "../../../../shared/constants/allowed-files.constant";

interface Image {
  index: number;
  file: File;
  imageSrc: any;
}

interface InputProps {
  addedImages: Image[];
  setAddedImages: Dispatch<SetStateAction<Image[]>>;
}

export default function Images({ addedImages, setAddedImages }: InputProps) {
  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    const file = files[files.length - 1];
    handleAddImage(file);
  };

  const handleAddImage = (file: File) => {
    // Add file validation here
    if (!allowedImageMimeTypes.includes(file.type)) {
      // Show message
    }

    // Visualize image
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (readerEvent) => {
      // Update state
      setAddedImages((images) => {
        const newImages = images.slice();

        if (newImages.length > 0) {
          newImages.push({
            index: newImages[newImages.length - 1].index + 1,
            file: file,
            imageSrc: readerEvent.target?.result,
          });
        } else {
          newImages.push({
            index: 0,
            file: file,
            imageSrc: readerEvent.target?.result,
          });
        }

        return newImages;
      });
    };
  };

  const handleDeleteImage = (index: number) => {
    setAddedImages((images) => {
      let newImages = images.slice();
      const delEl = newImages[index];
      // Update indexes
      for (let i = index + 1; i < newImages.length; i++) {
        newImages[i].index -= 1;
      }
      // Delete element
      newImages = newImages.filter((el) => el != delEl);

      return newImages;
    });
  };

  return (
    <>
      {/* Project Images */}
      <div className="mt-4">
        <h4 className="font-bold text-white">Images</h4>
        <p className="text-xs text-slate-400">Up to 7 images</p>
        {/* Images container */}
        <div className="flex flex-wrap items-center mt-4">
          {/* Show images here */}
          {addedImages.map((image) => (
            <AddedImage key={image.index} image={image} handleDeleteImage={handleDeleteImage} />
          ))}
          <input
            type="file"
            className="hidden"
            id="uploadImage"
            onChange={(e) => onImageUpload(e)}
          />
          <label htmlFor="uploadImage">
            <CiCirclePlus className="text-4xl cursor-pointer hover:text-brand-600 text-white" />
          </label>
        </div>
      </div>
    </>
  );
}

function AddedImage({ image, handleDeleteImage }: { image: Image; handleDeleteImage: (index: number) => void }) {
  return (
    <>
      <div className="w-32 h-28 flex overflow-hidden rounded-lg me-4 relative">
        <img
          src={image.imageSrc}
          alt="Project Image"
          className="object-cover"
        />
        <IoCloseOutline 
            className="absolute z-30 top-0 right-0 m-2 text-xl cursor-pointer bg-white rounded-full shadow"
            onClick={() => handleDeleteImage(image.index)}
        />
      </div>
    </>
  );
}
