export default function Button({ title }: { title: string }) {
  return (
    <button className="block px-5 py-3 mx-auto bg-[#026EFF] hover:bg-[#0270ffcc] text-[0.8rem] text-nowrap text-white hover:text-[#ffffffbc] font-semibold cursor-pointer font-sans rounded-xl">
      {title}
    </button>
  );
}
