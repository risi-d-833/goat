import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import axios from "../api/axios";

export default function Contact() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  });

  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post("/contact/send",form);

      alert(res.data.message);

      setForm({
        name:"",
        email:"",
        message:""
      });

    } catch (error) {

      console.log(error);
      alert("Message failed");

    } finally {

      setLoading(false);

    }

  };

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

        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-xl text-gray-300 mt-1"/>
              <div>
                <h4 className="text-lg mb-1">Email</h4>
                <p className="text-gray-400">contact@neovision.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-xl text-gray-300 mt-1"/>
              <div>
                <h4 className="text-lg mb-1">Phone</h4>
                <p className="text-gray-400">+1 (800) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-xl text-gray-300 mt-1"/>
              <div>
                <h4 className="text-lg mb-1">Address</h4>
                <p className="text-gray-400">
                  NeoVision Technologies
                  <br/>123 FutureTech Blvd
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#111] p-8 rounded-2xl"
          >

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-[#1a1a1a] p-4 rounded-lg outline-none"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-[#1a1a1a] p-4 rounded-lg outline-none"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full bg-[#1a1a1a] p-4 rounded-lg outline-none"
              required
            />

            <button
              disabled={loading}
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}