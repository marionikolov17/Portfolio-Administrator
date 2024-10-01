import { IoSearchOutline } from "react-icons/io5";

export default function InboxHeader() {
  return (
    <>
      <header className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-1 px-1">
        <div className="grow flex justify-start">
            <h1 className="text-white font-bold text-2xl">Inbox</h1>
        </div>
        {/* Search bar */}
        <div className="grow flex justify-end">
            <div className="overflow-hidden flex items-center rounded-lg shadow border border-primary-800 py-2 px-4 w-full sm:w-96 hover:ring-2 hover:ring-blue-900 transition duration-300">
            <IoSearchOutline className="text-brand-600 text-lg" />
            <input
                type="text"
                placeholder="Search"
                className="ms-2 bg-transparent outline-none text-white grow"
            />
            </div>
        </div>
      </header>
    </>
  );
}
