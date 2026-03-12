import React from "react";
import heal from "../assets/heal.jpg";

export default function DigitalFuture() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-light leading-tight tracking-wide mb-16">
          LIMITLESS POSSIBILITIES <br />
          WITH <span className="font-medium">NEOVISION</span>
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-center">

          {/* LEFT MENU */}
          <div className="flex flex-col space-y-6 text-gray-400 text-sm">
            <span className="hover:text-white cursor-pointer">Innovation</span>
            <span className="hover:text-white cursor-pointer">Technology</span>
            <span className="hover:text-white cursor-pointer">Experience</span>
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-2">
            <div className="bg-gray-300 rounded-3xl overflow-hidden">
              <img
                src={heal}
                alt="VR Future"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-semibold mb-4">
              How VR is Transforming Our Digital World
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Virtual Reality (VR) is no longer a concept of the future—it's
              a reality reshaping how we interact, work, and entertain
              ourselves.
            </p>

            <button className="text-sm border-b border-white hover:text-gray-300">
              Learn More
            </button>

            <div className="flex justify-between text-gray-500 text-xs mt-12">
              <span>08 February 2025</span>
              <span>Henry Leonardo</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}