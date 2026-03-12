import React from "react";
import { FaVrCardboard, FaBrain, FaCube } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaVrCardboard />,
      title: "VR Development",
      desc: "Immersive virtual reality experiences designed for the future of digital interaction.",
    },
    {
      icon: <FaBrain />,
      title: "AI Integration",
      desc: "Smart artificial intelligence systems that enhance automation and decision making.",
    },
    {
      icon: <FaCube />,
      title: "3D Experiences",
      desc: "Interactive 3D environments and visual technologies for next-generation platforms.",
    },
  ];

  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-5xl font-light mb-6">
            Our <span className="font-semibold">Services</span>
          </h2>

          <p className="text-gray-400">
            We provide cutting-edge digital solutions that combine virtual
            reality, artificial intelligence, and interactive technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#111] p-8 rounded-2xl border border-[#1f1f1f] hover:bg-[#1a1a1a] transition duration-300"
            >
              <div className="text-3xl mb-6 text-gray-300">
                {service.icon}
              </div>

              <h3 className="text-xl mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}