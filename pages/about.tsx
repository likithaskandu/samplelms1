"use client"; 

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen">
      <Head>
        <title>About - E-Learning Platform</title>
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
          What is <span className="text-purple-600">E-Learning?</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Unlock your programming potential with the best online courses and a supportive community.
        </p>
      </section>

      {/* About Details */}
      <section className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {[
          "E-Learning is your gateway to mastering programming.",
          "Our courses are affordable and designed for all skill levels.",
          "Join a supportive community and advance your career.",
          "Learn from industry experts with hands-on projects.",
          "Your dream tech career starts here, let's build it together!",
          "Get lifetime access to our courses and learn at your own pace." // ✅ NEW EXTRA POINT
        ].map((text, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="text-gray-800">{text}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 mt-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <h2 className="text-3xl font-bold">Start Your Learning Journey Today</h2>
        <p className="mt-2 text-lg">Join thousands of students and level up your skills.</p>
        <Link href="/courses" className="mt-4 inline-block bg-yellow-400 text-purple-800 font-bold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all">
          Explore Courses
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 mt-12">
        <p>&copy; 2025 E-Learning. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
