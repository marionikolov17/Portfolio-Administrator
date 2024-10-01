import InboxHeader from "../../features/inbox/components/InboxHeader/InboxHeader";

export default function Inbox() {
  return (
    <>
      <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
        <div className="w-full 2xl:w-[70%] h-max overflow-x-hidden">
          <InboxHeader />
        </div>
      </section>
    </>
  );
}
