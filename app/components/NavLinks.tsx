import Link from "next/link";

export default function NavLinks({
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
        className="block w-full h-full px-2.5 py-[5px] hover:bg-[yellow]"
      >
        {title}
      </Link>
    </li>
  );
}
