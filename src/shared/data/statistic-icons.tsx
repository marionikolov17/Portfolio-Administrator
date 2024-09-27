import { IoEyeOutline } from "react-icons/io5";

const containerClassName = "w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-brand-600";
const iconClassName = "text-3xl text-white";

export const statisticIcons = {
  visits: (
    <div className={containerClassName}>
      <IoEyeOutline className={iconClassName} />
    </div>
  ),
};
