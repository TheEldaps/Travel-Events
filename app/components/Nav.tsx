"use client";

import Image from "next/image";
import Logo from "../../public/Logo.png";
import { useState } from "react";
import NavLink from "../components/NavLink";
import Button from "../components/Button";

export default function Nav() {
  const [navState, setNavState] = useState(true);

  function handleClick() {
    setNavState((prev) => !prev);
  }

  return (
    <header className={`px-[5%] w-full bg-white pt-2.5 z-1 sticky top-0 border-b `}>
      <nav className="flex justify-between items-center  mb-2.5 ">
        <Image
          src={Logo}
          width="50"
          height="50"
          alt="site logo"
          className="h-auto sm:w-20"
        />

        {/* MOBILE VIEW MENU BUTTON */}
        <button onClick={handleClick} className="block sm:hidden">
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
        <ul className="hidden ml-[8%] sm:flex items-center gap-4 list-none grow">
          <NavLink title="Home" href="#home" />
          <NavLink title="Services" href="#services" />
          <NavLink title="Who we are" href="#about-us" />
          <NavLink title="Contact us" href="#contact-us" />
          <Button title="Get Started" />
        </ul>
      </nav>

      {/* MOBILE VIEW NAVLINKS */}
      <ul
        className={` flex flex-col gap-1 sm:hidden ${navState ? "block" : "hidden"
          }`}
      >
        <NavLink title="Home" href="#home" />
        <NavLink title="Services" href="#services" />
        <NavLink title="Who we are" href="#who-we-are" />
        <NavLink title="Contact us" href="#contact-us" />
        <NavLink title="Get Started" href="#get-started" />
      </ul>
    </header>
  );
}
