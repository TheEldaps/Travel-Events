import Link from "next/link";

export default function NavLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <li className="w-full">
      <Link
        href={href}
        className="block sm:inline sm:px-2 sm:py-2 w-full h-full px-2.5 py-[5px] hover:bg-[black] hover:text-white sm:text-nowrap sm:text-[0.9rem] md:text-[1.2rem] font-medium lg:text-[1.rem]"
      >
        {title}
      </Link>
    </li>
  );
}
