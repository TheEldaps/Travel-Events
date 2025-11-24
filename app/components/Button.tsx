import Link from "next/link";

export default function Button({
  title,
  text = "text-[0.8rem]",
}: {
  title: string;
  text?: string;
}) {
  return (
    <Link href='#request-quote'>
      <button
        className={`block px-5 py-3 mx-auto bg-[#026EFF] hover:bg-[#0270ffcc] ${text} text-nowrap text-white hover:text-[#ffffffbc] font-medium cursor-pointer font-[dmsans] rounded-xl`}
      >
        {title}
      </button></Link>
  );
}
