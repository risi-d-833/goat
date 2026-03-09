import React from "react";
import { FaVrCardboard, FaRobot, FaGamepad } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaVrCardboard />,
      title: "Reality Development",
      desc: "Step into the future with our custom VR development services, designed to create immersive digital experiences.",
    },
    {
      icon: <FaRobot />,
      title: "Digital Assistants",
      desc: "Enhance customer engagement and operational efficiency with our AI-driven virtual assistants.",
    },
    {
      icon: <FaGamepad />,
      title: "Gaming Solutions",
      desc: "Revolutionize the gaming industry with our next-generation VR game development services.",
    },
  ];

  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center justify-between mb-16">

          <h2 className="text-6xl md:text-7xl font-light tracking-wide">
            OUR SERVICE
          </h2>

          {/* Navigation buttons */}
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#2a2a2a]">
              ‹
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#2a2a2a]">
              ›
            </button>
          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#141414] rounded-3xl p-12 text-center hover:bg-[#1c1c1c] transition duration-300"
            >

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#1f1f1f] flex items-center justify-center text-xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* Link */}
              <button className="text-sm text-gray-300 hover:text-white">
                Learn More
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}