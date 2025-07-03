import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    "Programming Languages": ["JavaScript", "C++", "C", "Python", "Java", "TypeScript", "Golang", "SQL"],
    "Web Technologies": ["HTML", "CSS", "ReactJS", "NextJS", "Tailwind CSS", "Bootstrap"],
    "Backend & Database": ["NodeJS", "ExpressJS", "MongoDB", "Firebase", "REST APIs"],
    "AI & Data": ["Pandas", "Numpy", "TensorFlow"],
    "Tools & Platforms": ["Git", "Postman", "VS Code", "Figma", "Vercel", "Render"],
    "UI Libraries": ["ShadCN", "MaterialUI", "Leaflet Maps"],
    "Core Subjects": ["Computer Networks", "Operating Systems", "DBMS", "DSA", "OOPs"]
  };

  const projects = [
    {
      name: "Polly",
      demo: "https://polly-frontend.vercel.app",
      github: "https://github.com/AmanKhare28/Polly_Backend",
      skills: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
      description: "A modern polling application with real-time features"
    },
    {
      name: "TripShare",
      demo: "https://trip-share-cabs.vercel.app/",
      github: "https://github.com/AmanKhare28/TripShareCabs",
      skills: ["NextJS", "Firebase", "Leaflet Maps", "Geoapify"],
      description: "Cab sharing platform with interactive maps"
    },
    {
      name: "Taskly",
      github: "https://github.com/AmanKhare28/Taskly",
      skills: ["GoLang", "Command Line Interface"],
      description: "Efficient task management CLI tool"
    },
    {
      name: "Clima",
      demo: "https://amankhare28.github.io/Clima/",
      github: "https://github.com/AmanKhare28/Clima",
      skills: ["RapidAPI", "HTML", "CSS", "JavaScript"],
      description: "Beautiful weather application with API integration"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "Indian Institute Of Information Technology(IIIT), Kota",
      year: "2022-26",
      current: true
    },
    {
      degree: "12th Standard",
      institution: "Kendriya Vidyalaya",
      year: "2021"
    },
    {
      degree: "10th Standard",
      institution: "St. Joseph Vaz Vidya Niketan",
      year: "2019"
    }
  ];

  const ScrollIndicator = () => (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        <div className={`text-center z-10 px-4 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hello, I am Aman Khare
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-8 font-light">
            A Passionate{" "}
            <span className="text-blue-400 font-semibold">Developer</span>, {" "}
            <span className="text-purple-400 font-semibold">Designer</span>, {" "}
            <span className="text-pink-400 font-semibold">Problem Solver</span>
          </p>
          <button
            onClick={() => window.open("https://drive.google.com/file/d/1SX2_Icak3F3QdOMHvZemkkJ4J-bB4aVt/view?usp=sharing", "_blank")}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="flex items-center space-x-2">
              <span>View My Resume</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
        <ScrollIndicator />
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-500">
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed">
              <p className="mb-6">
                👋 Hey there! I'm <span className="text-blue-400 font-semibold">Aman Khare</span>, a tech enthusiast, problem solver, and full-stack developer with a knack for turning ideas into interactive, user-friendly applications. From building smart web apps with Next.js to diving deep into AI and machine learning, I love pushing the boundaries of what's possible.
              </p>
              <p>
                When I'm not coding, you'll probably find me leading tech workshops, designing cool interfaces, or solving complex algorithms just for fun! 🚀 Always up for a challenge and excited to build the next big thing. Let's connect and create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="grid gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div 
                key={category}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white rounded-full text-sm font-medium border border-blue-400/30 hover:border-blue-400 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${(categoryIndex * skillList.length + index) * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demo && (
                    <button
                      onClick={() => window.open(project.demo, "_blank")}
                      className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  )}
                  <button
                    onClick={() => window.open(project.github, "_blank")}
                    className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <span>GitHub</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Journey Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Academic Journey
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="flex items-center space-x-6 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg ${edu.current ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-600'} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {edu.year.split('-')[0] || edu.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.year}</p>
                  {edu.current && (
                    <span className="inline-block mt-2 px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-xs font-medium">
                      Current
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect!</h3>
          <p className="text-gray-300 mb-6">Ready to build something amazing together?</p>
          <div className="flex justify-center space-x-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white font-bold">💼</span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white font-bold">📧</span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white font-bold">🚀</span>
            </div>
          </div>
          <p className="text-gray-500 mt-8">&copy; 2024 Aman Khare. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
