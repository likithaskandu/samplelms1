"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Chatbot from "./Chatbot";
import { useRouter } from "next/navigation"; // Import useRouter

export default function Home() {
  const router = useRouter(); // Initialize useRouter
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [openIndex, setOpenIndex] = useState(null); // State to track open FAQ

  // Function to handle search
  const handleSearch = () => {
    if (!searchTerm.trim()) return; // Ignore empty search
    router.push(`/courses?query=${encodeURIComponent(searchTerm)}`); // Redirect to courses page with query
  };

  // Function to handle Enroll Now button click
  const handleEnroll = () => {
    router.push("/login"); // Redirect to the login page
  };

  // Function to toggle FAQ answers
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Data
  const faqData = [
    {
      question: "What is the difference between coding and programming?",
      answer: "Coding is the process of writing code using a programming language (e.g., Python, JavaScript, C++). It involves translating logical instructions into a syntax that a machine can understand.",
    },
    {
      question: "What are HTML and CSS?",
      answer: "HTML is the structure of a webpage. It defines the content and layout using elements like headings, paragraphs, images, and links. CSS styles the webpage and controls the layout, colors, and responsiveness.",
    },
    {
      question: "What's the difference between a designer and a developer?",
      answer: "Both designers and developers play crucial roles in building websites and apps, but they focus on different aspects of the process. Designers create the visual elements and UX, while developers code the functionality.",
    },
    {
      question: "What computer program do people use to write code?",
      answer: "Developers use code editors and IDEs (Integrated Development Environments) to write and manage their code. Popular options include VS Code, IntelliJ, and PyCharm.",
    },
  ];

  // Course Data
  const courses = [
    { id: "reactjs", title: "React Js", image: "/images/01.jpg", price: "₹2999", students: "5 Students | 4 Lectures" },
    { id: "full-stack", title: "Full Stack", image: "/images/02.jpg", price: "₹4999", students: "2 Students | 3 Lectures" },
    { id: "cloud-computing", title: "Cloud Computing", image: "/images/03.jpg", price: "₹1999", students: "1 Student | 3 Lectures" },
    { id: "data-structures", title: "Data Structures", image: "/images/04.jpg", price: "₹3999", students: "15 Students | 7 Lectures" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>E-Learning Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navbar */}
      <nav className="bg-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-extrabold text-blue-600">
            🚀 E-Learning
          </Link>
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
                <Link
                  href={item.link}
                  className="text-blue-600 text-lg hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center p-8">
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/images/g.jpg.png" alt="Coding" className="w-full rounded-lg shadow-xl" />
        </motion.div>

        <motion.div
          className="md:w-1/2 p-4 text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-blue-600">Boost Your Coding Skills 🚀</h1>
          <p className="text-gray-600 text-lg mt-3">Join our interactive courses and get hands-on experience with real-world projects.</p>
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Search Courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Trigger search on Enter
              className="border p-3 w-full rounded-l-lg bg-white text-gray-600 outline-none"
            />
            <button
              onClick={handleSearch} // Trigger search on button click
              className="bg-blue-600 text-white px-5 rounded-r-lg font-bold hover:bg-blue-500 transition-all duration-300"
            >
              Search 🔍
            </button>
          </div>
        </motion.div>
      </section>

      {/* Chatbot */}
      <Chatbot />

      {/* Program Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-blue-600 mb-10">✨ Program Highlights ✨</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Convenient Learning Format",
                description: "Online learning format with mentorship from industry experts.",
                icon: "📖",
                image: "/images/c1.jpg",
                bgColor: "bg-pink-500", // Bright Pink
              },
              {
                title: "Dedicated Career Services",
                description: "Resume & interview preps with industry experts & exclusive job board.",
                icon: "🎓",
                image: "/images/c2.jpg",
                bgColor: "bg-purple-500", // Bright Purple
              },
              {
                title: "Learn from the Best",
                description: "Award-winning faculties in Full Stack domain from top IT background.",
                icon: "👤",
                image: "/images/c3.jpg",
                bgColor: "bg-blue-500", // Bright Blue
              },
              {
                title: "Structured Program Support",
                description: "Dedicated program manager to ensure progress and learning outcomes.",
                icon: "📈",
                image: "/images/c4.jpg",
                bgColor: "bg-green-500", // Bright Green
              },
              {
                title: "Hands-on Learning",
                description: "Become job-ready by applying what you learn and build real-life projects.",
                icon: "💼",
                image: "/images/c5.jpg",
                bgColor: "bg-orange-500", // Bright Orange
              },
              {
                title: "Global Networking Opportunities",
                description: "Connect with peers, alumni, and industry leaders worldwide for collaboration and career growth.",
                icon: "🌍",
                image: "/images/c2.jpg",
                bgColor: "bg-yellow-400", // Bright Yellow
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 bg-white"
              >
                {/* Background Image */}
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover brightness-50" />
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center p-6 text-white">
                  {/* Icon on the Left */}
                  <div className={`w-14 h-14 ${item.bgColor} flex items-center justify-center rounded-full text-2xl shadow-lg mr-4`}>
                    {item.icon}
                  </div>
                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-lg">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="p-8 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">🔥 Popular Courses 🔥</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="relative border rounded-lg overflow-hidden shadow-lg bg-white text-gray-600 hover:shadow-2xl transform transition-all duration-500 hover:scale-105"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Course Image */}
              <Link href={`/${course.id}`} passHref>
                <motion.img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              </Link>

              {/* Course Info & Enroll Button */}
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-blue-600">{course.title}</h3>
                <p className="text-blue-500 font-semibold text-lg mt-2">{course.price}</p>
                <p className="text-gray-600 mt-1">{course.students}</p>
                <motion.button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleEnroll} // Redirect to login page
                >
                  Enroll Now 🚀
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto p-8 bg-blue-50 rounded-2xl shadow-xl mt-12">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">🤔 Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-lg bg-white p-5 transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center text-xl font-semibold text-blue-600 hover:text-blue-400 transition-all"
                onClick={() => toggleAnswer(index)}
              >
                <span>{item.question}</span>
                <span className="text-2xl">{openIndex === index ? "🔽" : "▶️"}</span>
              </button>
              <motion.div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-3" : "max-h-0"}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              >
                <p className="text-gray-600 text-lg p-2">{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-black text-white p-8 mt-12 shadow-lg">
        <div className="w-full flex whitespace-nowrap">
          {/* Marquee Section */}
          <motion.div
            className="flex gap-20 animate-marquee"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[
              { title: "About", items: ["Our Story", "Privacy Policy", "FAQ"] },
              { title: "Quick Links", items: ["Courses", "My Account", "Dashboard"] },
              { title: "Social Links", items: ["YouTube", "Instagram", "GitHub"] },
            ].map((section, index) => (
              <div
                key={index}
                className="min-w-[280px] text-center transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-bold mb-2 text-silver-400 animate-pulse">{section.title}</h3>
                {section.items.map((item, i) => (
                  <p key={i} className="text-gray-300 text-md hover:text-white transition duration-200">{item}</p>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Static Contact Section */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-2 text-silver-400">Contact</h3>
          <p className="text-gray-300 text-md">Call: +91 00000 00000</p>
          <p className="text-gray-300 text-md">Bengaluru, Karnataka</p>
          <p className="text-gray-300 text-md">Email: hello@techspira.com</p>
        </div>

        {/* Copyright */}
        <p className="text-center mt-6 text-gray-300 text-lg">&copy; 2025 E-Learning | All Rights Reserved</p>
      </footer>
    </div>
  );
}