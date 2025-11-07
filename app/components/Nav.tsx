"use client";

import Image from "next/image";
import Logo from "../../public/Logo.png";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [navState, setNavState] = useState(true);

  function handleClick() {
    setNavState((prev) => !prev);
  }

  return (
    <header className="px-[5%] pt-2.5 border-b">
      <nav className="flex justify-between items-center  mb-2.5 ">
        <Image src={Logo} width="50" height="50" alt="site logo" />

        {/* MOBILE VIEW MENU BUTTON */}
        <button onClick={handleClick} className="block md:hidden">
          <div className="p-[5px] border flex flex-col gap-1 hover:cursor-pointer  hover:bg-[#3232324f] ">
            {navState ? (
              "x"
            ) : (
              <>
                <span className="block w-5 h-1  bg-black"></span>
                <span className="block w-5 h-1  bg-black"></span>
                <span className="block w-5 h-1  bg-black"></span>
              </>
            )}
          </div>
        </button>

        {/* DESKTOP VIEW NAV LINKS */}
        <div className="hidden md:block">Hello there </div>
      </nav>

      {/* MOBILE VIEW NAVLINKS */}
      <ul className={` flex flex-col gap-1 ${navState ? "block" : "hidden"}`}>
        <li className="w-full">
          <Link
            href="#services"
            className="block w-full h-full px-2.5 py-[5px] hover:bg-[yellow]"
          >
            Home
          </Link>
        </li>

        <li className="w-full">
          <Link
            href="#services"
            className="block w-full h-full px-2.5 py-[5px] hover:bg-[yellow]"
          >
            Services
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="#about"
            className="block w-full h-full px-2.5 py-[5px] hover:bg-[yellow]"
          >
            Who we are
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="contact"
            className="block w-full h-full px-2.5 py-[5px] hover:bg-[yellow]"
          >
            Contact us
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="#about"
            className="block w-full h-full px-2.5 py-[5px] hover:bg-[yellow]"
          >
            Get Started
          </Link>
        </li>
      </ul>
    </header>
  );
}
