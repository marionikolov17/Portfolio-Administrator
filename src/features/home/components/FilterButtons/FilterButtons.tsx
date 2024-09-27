export default function FilterButtons() {
  return (
    <>
      <div className="w-full flex justify-center items-center mb-8">
        <div className="flex gap-x-1 bg-primary-900 rounded-lg shadow p-1">
          <FilterButton text="Last 7 days" isActive={true}/>
          <FilterButton text="Last 30 days" isActive={false}/>
          <FilterButton text="All time" isActive={false}/>
        </div>
      </div>
    </>
  );
}

function FilterButton({ text, isActive }: { text: string; isActive: boolean }) {
  return (
    <>
      <button
        disabled={isActive}
        className={`text-sm text-gray-200 py-1 px-4 hover:bg-brand-600 transition duration-300 ${
          isActive && "bg-brand-600"
        } rounded-lg`}
      >
        {text}
      </button>
    </>
  );
}
