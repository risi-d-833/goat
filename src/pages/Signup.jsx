import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Sign up to get started
        </p>

        <form className="space-y-4">

          {/* Name */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none"
            />
          </div>

          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Create Account
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-semibold">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}