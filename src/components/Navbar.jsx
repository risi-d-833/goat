import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineCube } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="w-full bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <HiOutlineCube className="text-xl text-gray-700" />
          <h1 className="font-semibold text-gray-800 text-lg">NeoVision</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          {menus.map((menu, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-black transition"
            >
              {menu}
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-[320px]">
          <input
            type="text"
            placeholder="I am looking for.."
            className="flex-1 outline-none text-sm bg-transparent"
          />
          <FiSearch className="text-gray-500 text-lg cursor-pointer" />
        </div>

        {/* Mobile Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#f5f5f5] px-6 pb-5">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium mb-4">
            {menus.map((menu, i) => (
              <li key={i} className="border-b pb-2">
                {menu}
              </li>
            ))}
          </ul>

          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="I am looking for.."
              className="flex-1 outline-none text-sm bg-transparent"
            />
            <FiSearch className="text-gray-500 text-lg" />
          </div>
        </div>
      )}
    </nav>
  );
}