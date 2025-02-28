"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FullStackCourse() {
  const router = useRouter();
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnrollment = () => {
    setIsEnrolled(true);
    setTimeout(() => {
      router.push("/payment?course=full-stack&price=4999");
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-r from-green-700 via-teal-700 to-blue-500 min-h-screen">
      <Head>
        <title>Full Stack Development Course - E-Learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* ✅ Navbar */}
      <nav className="bg-black bg-opacity-70 p-4 fixed top-0 left-0 w-full shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-extrabold text-yellow-400">
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
                  className="text-white text-lg hover:text-yellow-300 transition-all duration-300 hover:scale-110"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ✅ Full Stack Course Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white"
        >
          🌐 Master Full Stack Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-xl text-gray-200 max-w-3xl"
        >
          Learn **Frontend + Backend** technologies and build powerful,
          production-ready web applications from scratch.
        </motion.p>
        <motion.img
          src="/images/02.jpg"
          alt="Full Stack Course"
          className="mt-8 w-96 rounded-xl shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </section>

      {/* ✅ Course Modules */}
      <section className="bg-white text-gray-900 py-20 px-6 rounded-t-3xl">
        <h2 className="text-4xl font-extrabold text-center text-blue-700">
          📚 Course Modules
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 container mx-auto">
          {[
            "HTML, CSS & JavaScript Fundamentals",
            "Frontend Development with React.js",
            "Backend Development with Node.js & Express",
            "Database Management with PostgreSQL",
            "Building APIs & Authentication",
            "Deployment & CI/CD",
            "Security & Performance Optimization",
            "Building Real-world Full Stack Projects",
          ].map((module, index) => (
            <motion.div
              key={index}
              className="bg-teal-500 text-white p-6 rounded-lg shadow-lg text-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              ✅ {module}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Why Learn Full Stack? */}
      <section className="text-center text-white py-16 px-6">
        <h2 className="text-4xl font-extrabold text-yellow-300">
          🔥 Why Learn Full Stack Development?
        </h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Become a highly skilled Full Stack Developer",
            "Work on both Frontend & Backend",
            "Huge job opportunities worldwide",
            "Master databases, APIs, and server-side logic",
            "High salaries & demand in the industry",
            "Develop end-to-end web applications",
          ].map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              🌟 {reason}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Enroll Now */}
      <section className="bg-black text-white text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold text-yellow-400">
          🎓 Start Your Full Stack Journey!
        </h2>
        <p className="mt-4 text-xl text-gray-300">
          Become a **Full Stack Developer** and build end-to-end applications!
        </p>

        {isEnrolled ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-6 text-green-400 text-lg font-bold"
          >
            ✅ Enrollment Successful! Redirecting to Payment...
          </motion.div>
        ) : (
          <motion.button
            onClick={handleEnrollment}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-700 transition-all duration-300"
          >
            💳 Enroll Now for ₹4,999
          </motion.button>
        )}
      </section>
    </div>
  );
}
