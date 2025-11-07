export default function Button({
  title,
  text = "0.8rem",
}: {
  title: string;
  text?: string;
}) {
  return (
    <button
      className={`block px-5 py-3 mx-auto bg-[#026EFF] hover:bg-[#0270ffcc] text-[${text}] text-nowrap text-white hover:text-[#ffffffbc] font-semibold cursor-pointer font-sans rounded-xl`}
    >
      {title}
    </button>
  );
}
