import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import axios from "../api/axios";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("/auth/signup", form);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Sign up to get started
        </p>

        <form className="space-y-4" onSubmit={handleSignup}>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiUser className="text-gray-400 mr-2"/>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full outline-none"
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiMail className="text-gray-400 mr-2"/>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full outline-none"
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiLock className="text-gray-400 mr-2"/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full outline-none"
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button 
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Account"}
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
