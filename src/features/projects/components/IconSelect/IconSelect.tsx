import { techIcons } from "../../../../shared/data/tech-icons";

export default function IconSelect({ name }: { name: string }) {
  return (
    <>
      <div className="w-full flex px-4 py-3 border-b border-b-primary-800 cursor-pointer hover:bg-brand-600 transition duration-300">
        {techIcons[name]}
        <p className="text-white">{name}</p>
      </div>
    </>
  );
}
