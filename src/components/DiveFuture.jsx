import React from "react";
import girl from "../assets/girl.jpg";
import { FaPlay } from "react-icons/fa";

export default function DiveFuture() {
  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Card */}
        <div className="relative rounded-[32px] overflow-hidden">

          {/* Background Image */}
          <img
            src={girl}
            alt="Future VR"
            className="w-full h-[420px] object-cover"
          />

          {/* Updated Overlay Background */}
          <div className="absolute inset-0 bg-[#2a2a2a]/70"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-between px-16">

            {/* Left Text */}
            <h2 className="text-white text-6xl font-light leading-tight tracking-wide">
              DIVE INTO THE <br /> FUTURE
            </h2>

            {/* Right Content */}
            <div className="flex flex-col items-start max-w-xs text-gray-300 text-sm">

              {/* Play Button */}
              <button className="w-14 h-14 mb-6 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition">
                <FaPlay className="text-white text-sm ml-[2px]" />
              </button>

              <p className="leading-relaxed">
                Invites you to immerse yourself in the groundbreaking world
                of NeoVision. Explore the limitless possibilities of
                futuristic technology and virtual reality.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}