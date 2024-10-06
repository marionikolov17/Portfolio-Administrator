import React from "react";

export default function FilterButtons({ setPeriod, period }: { setPeriod: React.Dispatch<React.SetStateAction<string>>, period: string }) {
  return (
    <>
      <div className="w-full flex justify-center items-center mb-8">
        <div className="flex gap-x-1 bg-primary-900 rounded-lg shadow p-1">
          <FilterButton text="Last 7 days" isActive={period === "last-7"} handleClick={() => setPeriod("last-7")}/>
          <FilterButton text="Last 30 days" isActive={period === "last-30"} handleClick={() => setPeriod("last-30")}/>
          <FilterButton text="All time" isActive={period === "all"} handleClick={() => setPeriod("all")}/>
        </div>
      </div>
    </>
  );
}

function FilterButton({ text, isActive, handleClick }: { text: string; isActive: boolean, handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <>
      <button
        disabled={isActive}
        className={`text-sm text-gray-200 py-1 px-4 hover:bg-brand-600 transition duration-300 ${
          isActive && "bg-brand-600"
        } rounded-lg`}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
}
