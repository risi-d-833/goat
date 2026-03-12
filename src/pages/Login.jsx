import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Email */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email address"
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

          {/* Forgot */}
          <div className="text-right text-sm">
            <Link to="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 border"></div>
        </div>

        {/* Social Login */}
        <div className="space-y-3">

          <button className="w-full border py-2 rounded-lg hover:bg-gray-50">
            Continue with Google
          </button>

          <button className="w-full border py-2 rounded-lg hover:bg-gray-50">
            Continue with GitHub
          </button>

        </div>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-black font-semibold">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}