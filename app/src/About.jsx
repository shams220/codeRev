"use client";
import React from "react";
import FadeContent from "./components/FadeContent";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
const About = () => {
  const navigate = useNavigate();
  const gobackbtn = () => navigate('/');

  return (
    <FadeContent>
        <Navbar/>
      <div className="relative w-full min-h-[121vh] bg-black text-white flex flex-col items-center justify-center overflow-hidden">

        {/* Back Button */}
        <button 
          className="absolute top-6 left-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white text-sm" 
          onClick={gobackbtn}
        >
          ← Back
        </button>

        {/* Main content */}
        <div className="relative z-10 max-w-4xl px-6 py-12 text-center space-y-12">

          {/* Project Section */}
         <section>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About CodeReviewer
            </h1>
            <p className="text-lg md:text-xl mb-4">
              CodeReviewer is an AI-powered platform designed to help developers
              improve their code. Paste your code, get instant feedback, and learn
              best practices for clean, efficient, and maintainable code.
            </p>
            <p className="text-lg md:text-xl mb-4">
              Built with React.js, TailwindCSS, and AI APIs, the app offers a
              seamless experience with real-time code analysis and beautiful
              interactive backgrounds.
            </p>
            <p className="text-lg md:text-xl">
              Whether you're a beginner or an experienced developer, CodeReviewer
              is your companion for writing better code and mastering programming
              skills.
            </p>
          </section>

          {/* About Me Section */}
         <section>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="absolute inset-0 z-0">
        </div>
            <p className="text-lg md:text-xl mb-4">
              Hi! I'm Shams Alam, a MERN stack developer passionate about building
              interactive web applications and learning new technologies. I love
              experimenting with UI animations, React features, and AI-driven
              tools.
            </p>
            <p className="text-lg md:text-xl mb-4">
              I enjoy creating projects that help others learn and grow in their
              coding journey. In my free time, I also like dancing, exploring new
              web trends, and contributing to open-source projects.
            </p>
            <p className="text-lg md:text-xl">
              This project, CodeReviewer, is one of my favorite creations because
              it combines my love for coding, frontend design, and AI-powered
              solutions.
            </p>
          </section>

        </div>
        
      </div>
      
    </FadeContent>
  );
};

export default About;
