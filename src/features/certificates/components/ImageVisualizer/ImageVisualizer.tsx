import { IoTrashOutline } from "react-icons/io5";

export default function ImageVisualizer({
  image,
  onImageRemove,
}: {
  image: any;
  onImageRemove: any;
}) {
  return (
    <>
      <div className="col-span-full rounded-lg border-2 border-dashed border-gray-900/25 mt-2 sm:mt-8">
        <div
          className="relative w-full overflow-hidden max-h-[500px]"
        >
          <button
            className="absolute top-0 right-0 p-4 z-30"
            type="button"
            onClick={() => onImageRemove()}
          >
            <IoTrashOutline className="text-3xl text-red-700" />
          </button>
          <img
            src={image}
            className={`object-cover`}
            alt="Uploaded picture"
          />
        </div>
      </div>
    </>
  );
}
