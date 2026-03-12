import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-5xl font-light mb-6">
            Contact <span className="font-semibold">NeoVision</span>
          </h2>

          <p className="text-gray-400">
            Have questions about our futuristic technology or VR solutions?
            Reach out to our team and we'll be happy to help you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-xl text-gray-300 mt-1" />
              <div>
                <h4 className="text-lg mb-1">Email</h4>
                <p className="text-gray-400">contact@neovision.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-xl text-gray-300 mt-1" />
              <div>
                <h4 className="text-lg mb-1">Phone</h4>
                <p className="text-gray-400">+1 (800) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-xl text-gray-300 mt-1" />
              <div>
                <h4 className="text-lg mb-1">Address</h4>
                <p className="text-gray-400">
                  NeoVision Technologies  
                  <br /> 123 FutureTech Blvd
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-[#111] p-8 rounded-2xl">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#1a1a1a] p-4 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#1a1a1a] p-4 rounded-lg outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-[#1a1a1a] p-4 rounded-lg outline-none"
            ></textarea>

            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}