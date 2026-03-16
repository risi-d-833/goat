import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import axios from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form,setForm] = useState({
    email:"",
    password:""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("/auth/login", form);
      const token = res.data.token;
      localStorage.setItem("token", token);
      login(token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiMail className="text-gray-400 mr-2"/>
            <input
              type="email"
              name="email"
              placeholder="Email address"
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
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

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