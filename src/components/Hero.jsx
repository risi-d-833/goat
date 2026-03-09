import React from "react";
import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] min-h-screen flex items-center relative overflow-hidden">

      {/* Background futuristic line */}
      <div className="absolute bottom-40 left-0 w-full h-[6px] bg-gray-200"></div>
      <div className="absolute bottom-40 left-[30%] w-[40%] h-[6px] bg-gray-300"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}
        <div>

          <p className="text-xs tracking-[6px] text-gray-500 mb-6">
            FUTURISTIC
          </p>

          <p className="text-gray-400 text-sm mb-2">05</p>

          <h1 className="text-[64px] lg:text-[78px] font-light leading-tight mb-8">
            NEW DIGITAL
            <br />
            UNIVERSE
          </h1>

          {/* Buttons */}
          <div className="flex items-center gap-6 mb-16">

            <button className="bg-black text-white px-8 py-3 rounded-md text-sm hover:bg-gray-800 transition">
              Get Started
            </button>

            <button className="text-gray-700 text-sm hover:text-black">
              Contact Us
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-end">

          <img
            src={hero}
            alt="VR"
            className="w-[520px] object-contain"
          />

          {/* Percentage */}
          <div className="absolute left-[-60px] top-[60%] text-center">
            <p className="text-2xl font-semibold">47.2%</p>
            <p className="text-gray-500 text-sm">Reality</p>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="absolute bottom-12 left-0 w-full">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Clients */}
          <div>

            <p className="text-sm text-gray-500 mb-3">
              Trusted by Clients
            </p>

            <div className="flex items-center gap-4">

              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              <span className="text-xl font-semibold">20+</span>

            </div>
          </div>

          {/* Center icon */}
          <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
            %
          </div>

          
          <div className="max-w-sm text-sm text-gray-500 leading-relaxed ">
            In this futuristic realm, users can explore hyper-realistic
            virtual environments, interact with AI-driven avatars.
          </div>

        </div>
      </div>

    </section>
  );
}