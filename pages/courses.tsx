"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

// Course Data
const courses = [
  { id: "reactjs", title: "React Js", image: "/images/01.jpg", price: 2999 },
  { id: "full-stack", title: "Full Stack", image: "/images/02.jpg", price: 4999 },
  { id: "cloud-computing", title: "Cloud Computing", image: "/images/03.jpg", price: 1999 },
  { id: "data-structures", title: "Data Structures", image: "/images/04.jpg", price: 3999 },
  { id: "ai-ml", title: "AI & Machine Learning", image: "/images/05.jpg", price: 4999 },
  { id: "data-science", title: "Data Science & Analytics", image: "/images/06.jpg", price: 1999 },
  { id: "cybersecurity", title: "Cybersecurity", image: "/images/07.jpg", price: 3999 },
  { id: "blockchain", title: "Blockchain & Web3", image: "/images/08.jpg", price: 1999 },
  { id: "robotics", title: "Robotics & Automation", image: "/images/09.jpg", price: 3999 },
];

export default function Courses() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState(query);

  // Filter courses based on search query
  useEffect(() => {
    if (query) {
      const results = courses.filter((course) =>
        course.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCourses(results);
    } else {
      setFilteredCourses(courses);
    }
  }, [query]);

  // Handle search functionality
  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    router.push(`/courses?query=${encodeURIComponent(searchTerm)}`);
  };

  // Handle enrollment (redirect to login page)
  const handleEnrollment = () => {
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Courses - E-Learning Platform</title>
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

      {/* Search Box */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-md bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search Courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 p-3 outline-none text-gray-700"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-5 py-3 hover:bg-blue-500 transition-all"
          >
            Search
          </button>
        </div>
      </div>

      {/* Courses List */}
      <section className="p-10">
        <h2 className="text-5xl font-extrabold text-center text-blue-600 mb-8">
          🎓 Explore Our Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* Course Image */}
                <Link href={`/${course.id}`} passHref>
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                  />
                </Link>

                {/* Course Info & Enroll Button */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-blue-600">{course.title}</h3>
                  <p className="text-gray-600 mt-2">Price: ₹{course.price}</p>
                  <button
                    onClick={handleEnrollment} // Redirect to login page
                    className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-300"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-2xl">No courses found.</p>
          )}
        </div>
      </section>
    </div>
  );
}