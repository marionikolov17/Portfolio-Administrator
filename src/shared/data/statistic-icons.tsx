import React from "react";
import { IoAccessibilityOutline, IoAlarmOutline, IoEyeOutline, IoHourglassOutline } from "react-icons/io5";

const containerClassName = "w-16 h-16 rounded-full overflow-hidden flex items-center justify-center ";
const iconClassName = "text-3xl text-white";

export const statisticIcons: Record<string, React.ReactElement> = {
  visits: (
    <div className={containerClassName + "bg-brand-600"}>
      <IoEyeOutline className={iconClassName} />
    </div>
  ),
  uniqueVisits: (
    <div className={containerClassName + "bg-[#075985]"}>
      <IoAccessibilityOutline className={iconClassName} />
    </div>
  ),
  avgTime: (
    <div className={containerClassName + "bg-[#166534]"}>
      <IoAlarmOutline className={iconClassName} />
    </div>
  ),
  totalTime: (
    <div className={containerClassName + "bg-[#854d0e]"}>
      <IoHourglassOutline className={iconClassName} />
    </div>
  ),
};
