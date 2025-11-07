import Image from "next/Image";
import Logo from "../../public/Logo.png";

export default function Nav() {
  return (
    <nav>
      <Image src={Logo} width="50" height="50" alt="site logo" />

      <div>
        <button className="p-[5px]">
          <span className="block w-2.5 h-2 pb-[5px]"></span>
          <span className="block w-2.5 h-2 pb-[5px]"></span>
          <span className="block w-2.5 h-2 pb-[5px]"></span>
        </button>
      </div>
    </nav>
  );
}
