import React, { useState } from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      {/* Navbar */}
      <nav className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </nav>
      
      {/* Hero Section */}
      <header className="text-center py-20">
        <h2 className="text-4xl font-bold">Hello, I'm <span className="text-blue-500">Your Name</span></h2>
        <p className="text-lg mt-4">A Passionate Web Developer</p>
      </header>
      
      {/* Projects Section */}
      <section className="p-6">
        <h3 className="text-2xl font-bold text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800">
            <h4 className="text-xl font-bold">Project 1</h4>
            <p>Description of your project.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800">
            <h4 className="text-xl font-bold">Project 2</h4>
            <p>Description of your project.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="p-6 text-center">
        <h3 className="text-2xl font-bold">Contact Me</h3>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope size={30} />
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
