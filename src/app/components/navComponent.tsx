import Image from "next/image";
import React, { useState } from "react";
import { navItems } from "../helper/constants";

const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="px-5 py-4 flex flex-row justify-between items-center md:px-20 md:py-10">
      <div className="flex flex-row items-center cursor-pointer">
        <Image src="/images/green-logo.png" alt="Logo" width={20} height={20} />
        <div className="text-4xl font-bold">Boldo</div>
      </div>

      <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-row items-center">
        {navItems.map((c, i) => (
          <div className="mr-10 font-bold cursor-pointer" key={i}>
            {c}
          </div>
        ))}
        <button className="border-2 font-bold border-white text-black px-10 py-2 rounded-full bg-white ml-5">
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 mt-5 w-4/5 bg-primary-teal shadow-lg md:hidden z-10">
          {navItems.map((c, i) => (
            <div
              className="py-5 px-10 font-bold cursor-pointer border-b border-gray-200"
              key={i}
              onClick={toggleMenu}
            >
              {c}
            </div>
          ))}
          <button className="block w-full border-2 font-bold border-black text-black px-10 py-2 rounded-full bg-white mt-2">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default NavComponent;
