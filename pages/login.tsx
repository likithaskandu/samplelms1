"use client"; 

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful! ✅");
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex flex-col">
      <Head>
        <title>Login - E-Learning Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-2xl font-extrabold text-white" href="#">E-Learning</a>
          <ul className="flex space-x-6">
            {[
              { name: "Home", link: "/" },
              { name: "Courses", link: "/courses" },
              { name: "About", link: "/about" },
              { name: "Contact", link: "/contact" },
              { name: "Login", link: "/login" },
              { name: "Sign Up", link: "/signup" },
            ].map((item, index) => (
              <li key={index}>
                <Link className="text-white text-lg hover:text-yellow-300 transition-all duration-300" href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.h1 
          className="text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome Back to <span className="text-purple-600">E-Learning</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Login to access your courses, track progress, and continue learning!
        </p>
      </section>

      {/* Login Form */}
      <section className="container mx-auto px-6 py-8 max-w-md bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-gray-700 font-bold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </motion.div>

          <motion.div 
            className="mb-4 flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              Remember Me
            </label>
            <a href="#" className="text-purple-600 hover:underline">Forgot Password?</a>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>

          <p className="text-center text-gray-700 mt-4">
            Don't have an account? <Link href="/signup" className="text-purple-600 hover:underline">Sign Up</Link>
          </p>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 shadow-md hover:bg-gray-100 transition-all">
              <img src="/images/google.jpg" alt="Google" className="w-6 h-6 mr-2" />
              Continue with Google
            </button>

            <button className="w-full flex items-center justify-center bg-gray-900 text-white rounded-lg py-2 shadow-md hover:bg-gray-800 transition-all">
              <img src="/images/github.jpg" alt="GitHub" className="w-6 h-6 mr-2" />
              Continue with GitHub
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 mt-12">
        <p>&copy; 2025 E-Learning. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
