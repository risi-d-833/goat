import React from "react";
import {
  FaCube,
  FaDribbble,
  FaBehance,
  FaInstagram,
  FaTwitter,
  FaAtom,
  FaGlobe,
  FaBolt,
  FaCircle
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-14 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14">

          {/* Logo + Contact */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaCube className="text-white text-xl" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                NeoVision
              </h2>
            </div>

            <div className="space-y-7 text-sm">
              <div>
                <p className="text-white mb-1">Email</p>
                <p className="text-gray-500">contact@neovision.com</p>
              </div>

              <div>
                <p className="text-white mb-1">Phone Number</p>
                <p className="text-gray-500">+1 (800) 123-4567</p>
              </div>

              <div>
                <p className="text-white mb-1">Address</p>
                <p className="text-gray-500">NeoVision Technologies 123</p>
                <p className="text-gray-500">FutureTech Blvd</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-7">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white transition cursor-pointer">Home</li>
              <li className="hover:text-white transition cursor-pointer">About Us</li>
              <li className="hover:text-white transition cursor-pointer">Services</li>
              <li className="hover:text-white transition cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white mb-7">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white transition cursor-pointer">Product Demos</li>
              <li className="hover:text-white transition cursor-pointer">Case Studies</li>
              <li className="hover:text-white transition cursor-pointer">Testimonials</li>
              <li className="hover:text-white transition cursor-pointer">Media & Press</li>
              <li className="hover:text-white transition cursor-pointer">Events & Webinars</li>
            </ul>
          </div>

          {/* Description */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg mb-6 leading-snug">
              FUTURISTIC TECH & <br /> VR WEBSITE
            </h3>

            <p className="text-sm text-gray-500 mb-8 max-w-md leading-relaxed">
              Dive into a world where technology and virtual reality
              converge to create mind-blowing experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-white hover:text-black transition">
                <FaDribbble />
              </div>

              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-white hover:text-black transition">
                <FaBehance />
              </div>

              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-white hover:text-black transition">
                <FaInstagram />
              </div>

              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-white hover:text-black transition">
                <FaTwitter />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Logos */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-10 text-gray-500 text-sm">

          <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 transition">
            <FaAtom />
            Logolpsum
          </div>

          <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 transition">
            <FaCircle />
            Logolpsum
          </div>

          <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 transition">
            <FaGlobe />
            Logolpsum
          </div>

          <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 transition">
            <FaBolt />
            Logolpsum
          </div>

          <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 transition">
            <FaCube />
            Logolpsum
          </div>

        </div>

      </div>
    </footer>
  );
}