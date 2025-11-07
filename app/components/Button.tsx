export default function Button({ title }: { title: string }) {
  return (
    <button className="px-5 py-5 bg-[#026EFF] text-[0.8rem] rounded-2">
      {title}
    </button>
  );
}
