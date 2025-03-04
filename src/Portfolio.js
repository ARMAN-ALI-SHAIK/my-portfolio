import React, { useState } from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "./profile.png"; // Add your profile picture

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </nav>
      
      {/* Hero Section */}
      <header className="text-center py-20">
        <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full mx-auto shadow-lg" />
        <h2 className="text-4xl font-bold mt-4">Hello, I'm <span className="text-blue-500">Your Name</span></h2>
        <p className="text-lg mt-2">A Passionate Web Developer</p>
      </header>
      
      {/* Projects Section */}
      <section className="p-6">
        <h3 className="text-3xl font-bold text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800">
            <img src="https://via.placeholder.com/300" alt="Project 1" className="rounded-md" />
            <h4 className="text-xl font-bold mt-2">Project 1</h4>
            <p className="text-sm">Description of your project.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800">
            <img src="https://via.placeholder.com/300" alt="Project 2" className="rounded-md" />
            <h4 className="text-xl font-bold mt-2">Project 2</h4>
            <p className="text-sm">Description of your project.</p>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="p-6 text-center">
        <h3 className="text-3xl font-bold">Skills</h3>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">JavaScript</span>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">React</span>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">Tailwind CSS</span>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="p-6 text-center">
        <h3 className="text-3xl font-bold">Contact Me</h3>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="hover:text-blue-500" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="hover:text-blue-500" />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope size={30} className="hover:text-blue-500" />
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="p-4 text-center border-t mt-6">
        <p>&copy; 2025 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
