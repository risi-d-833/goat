import React from "react";
import { FaVrCardboard, FaRocket, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6">
            About <span className="font-semibold">NeoVision</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            NeoVision is redefining the digital world by merging virtual
            reality, artificial intelligence, and immersive technologies
            to build the next generation of futuristic experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
              alt="VR Tech"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-3xl font-light mb-6">
              Building the Future of Technology
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Our mission is to create immersive technologies that transform
              how humans interact with digital environments. We combine
              cutting-edge innovation with modern design to craft powerful
              virtual experiences.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From VR development to AI-driven solutions, NeoVision delivers
              futuristic platforms that empower businesses and inspire users.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10 mt-24">

          <div className="bg-[#111] p-8 rounded-2xl hover:bg-[#1a1a1a] transition">
            <FaVrCardboard className="text-3xl mb-5 text-gray-300" />
            <h4 className="text-xl mb-3">Virtual Reality</h4>
            <p className="text-gray-400 text-sm">
              Immersive VR experiences that transform the digital world.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl hover:bg-[#1a1a1a] transition">
            <FaBrain className="text-3xl mb-5 text-gray-300" />
            <h4 className="text-xl mb-3">AI Innovation</h4>
            <p className="text-gray-400 text-sm">
              Intelligent technologies powering futuristic solutions.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-2xl hover:bg-[#1a1a1a] transition">
            <FaRocket className="text-3xl mb-5 text-gray-300" />
            <h4 className="text-xl mb-3">Future Vision</h4>
            <p className="text-gray-400 text-sm">
              Building next-generation digital platforms for tomorrow.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}