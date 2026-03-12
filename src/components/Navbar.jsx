import React, { useState } from "react";
import { FiSearch, FiMenu, FiX, FiUser } from "react-icons/fi";
import { HiOutlineCube } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#f5f5f5] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <HiOutlineCube className="text-xl text-gray-700" />
          <h1 className="font-semibold text-gray-800 text-lg">NeoVision</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          {menus.map((menu, i) => (
            <li key={i} className="hover:text-black transition">
              <Link to={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-[260px]">
          <input
            type="text"
            placeholder="I am looking for.."
            className="flex-1 outline-none text-sm bg-transparent"
          />
          <FiSearch className="text-gray-500 text-lg cursor-pointer" />
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4 ml-6">

          <Link
            to="/login"
            className="flex items-center gap-1 text-gray-700 hover:text-black transition"
          >
            <FiUser />
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition"
          >
            Sign Up
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#f5f5f5] px-6 pb-6">

          <ul className="flex flex-col gap-4 text-gray-700 font-medium mb-4">
            {menus.map((menu, i) => (
              <li key={i} className="border-b pb-2">
                <Link to={menu.path}>{menu.name}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Search */}
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 mb-4">
            <input
              type="text"
              placeholder="I am looking for.."
              className="flex-1 outline-none text-sm bg-transparent"
            />
            <FiSearch className="text-gray-500 text-lg" />
          </div>

          {/* Mobile Auth */}
          <div className="flex flex-col gap-3">

            <Link
              to="/login"
              className="border text-center py-2 rounded-full text-gray-700"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-black text-white text-center py-2 rounded-full"
            >
              Sign Up
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}