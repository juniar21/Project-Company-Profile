"use client"
import { useState } from "react";
import { GiCoffeePot } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full max-w-[1100px] mx-auto h-[100px] px-4 md:flex-nowrap border-b-2 border-black font-bold text-sm">
      {/* Logo */}
      <div className="flex items-center">
        <GiCoffeePot className="h-[50px] w-[40px]" />
      </div>

      {/* Burger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Navigation Links (Desktop & Mobile) */}
      <div
        className={`absolute top-[100px] left-0 w-full md:mt-[80px] md:static md:flex md:w-auto md:gap-9 h-auto md:h-[100px] p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <Link href={"/"} className="block py-2 md:py-0 hover:border-b-2">HOME</Link>
        <Link href={"/about"} className="block py-2 md:py-0 hover:border-b-2">ABOUT US</Link>
        <Link href={"/gallery"} className="block py-2 md:py-0 hover:border-b-2">GALLERY</Link>
        <Link href={"/contact"} className="block py-2 md:py-0 hover:border-b-2">CONTACT</Link>
      </div>

      {/* Explore Now Button (Hidden in Mobile) */}
      <div className="hidden md:block">
        <p className="outline p-2">Explore Now</p>
      </div>
    </div>
  );
}
