import React from "react";
import about from "../assets/about.jpg";

export default function About() {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={about}
            alt="Digital Helmet"
            className="w-full max-w-xl lg:max-w-2xl object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl">

          <p className="text-sm tracking-[8px] text-gray-400 mb-8">
            ABOUT US
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-10">
            THE DIGITAL <br />
            FRONTIER
          </h2>

          {/* Tags */}
          <div className="flex gap-4 mb-10 flex-wrap">

            <span className="border border-gray-600 px-5 py-2 rounded-full text-sm text-gray-300">
              Digital
            </span>

            <span className="border border-gray-600 px-5 py-2 rounded-full text-sm text-gray-300">
              Reality
            </span>

            <span className="border border-gray-600 px-5 py-2 rounded-full text-sm text-gray-300">
              Next
            </span>

          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Step into The Digital Frontier, where the boundaries between
            reality and virtual innovation disappear. This is the next
            era of immersive technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-8">

            <button className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg text-base transition">
              Learn More
            </button>

            <button className="flex items-center gap-3 text-gray-300 hover:text-white transition">
              <span className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full">
                ▶
              </span>
              Watch a Video
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}