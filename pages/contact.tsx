"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! ✅");
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen">
      <Head>
        <title>Contact Us - E-Learning Platform</title>
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
              { name: "Login", link: "login" },
              { name: "Sign Up", link: "signup" },
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
          Get in <span className="text-purple-600">Touch</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Have questions? We’d love to hear from you! Reach out to us using the form below.
        </p>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 py-8 max-w-lg bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-gray-700 font-bold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
            />
          </motion.div>

          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Email"
            />
          </motion.div>

          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-gray-700 font-bold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Message"
              
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 mt-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <h2 className="text-3xl font-bold">Stay Connected</h2>
        <p className="mt-2 text-lg">Follow us on social media and join our learning community.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://twitter.com" // Replace with your Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-all"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://youtube.com" // Replace with your YouTube URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-all"
          >
            YouTube
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 mt-12">
        <p>&copy; 2025 E-Learning. All Rights Reserved.</p>
      </footer>
    </div>
  );
}