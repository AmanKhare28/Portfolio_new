import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Github, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Code, 
  Palette, 
  Lightbulb,
  GraduationCap,
  Calendar
} from 'lucide-react';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

const HeroSection = () => {
  const roles = ['Developer', 'Designer', 'Problem Solver'];
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200 rounded-full opacity-20 animate-bounce-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hello, I am <span className="gradient-text">Aman Khare</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold text-gray-700 mb-8 flex flex-wrap justify-center items-center gap-4">
            A Passionate
            <div className="flex items-center gap-2">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  className="inline-flex items-center gap-2 text-blue-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.3, duration: 0.6 }}
                >
                  {index === 0 && <Code size={32} />}
                  {index === 1 && <Palette size={32} />}
                  {index === 2 && <Lightbulb size={32} />}
                  {role}
                  {index < roles.length - 1 && <span className="text-gray-400">,</span>}
                </motion.span>
              ))}
            </div>
          </div>
          
          <motion.a
            href="https://drive.google.com/file/d/1SX2_Icak3F3QdOMHvZemkkJ4J-bB4aVt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={24} />
            Open My Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                👋 Hey there! I'm <span className="font-semibold text-blue-600">Aman Khare</span>, a tech enthusiast, problem solver, and full-stack developer with a knack for turning ideas into interactive, user-friendly applications. From building smart web apps with Next.js to diving deep into AI and machine learning, I love pushing the boundaries of what's possible.
              </p>
              <br />
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                When I'm not coding, you'll probably find me leading tech workshops, designing cool interfaces, or solving complex algorithms just for fun! 🚀 Always up for a challenge and excited to build the next big thing. Let's connect and create something amazing together!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "C++", "C", "Python", "Java", "TypeScript", "Golang", "SQL", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["ReactJS", "NextJS", "Tailwind CSS", "Firebase", "NodeJS", "ExpressJS", "MongoDB", "REST APIs", "Vercel", "Bootstrap", "ShadCN", "MaterialUI"]
    },
    {
      title: "Data Science & Tools",
      skills: ["Pandas", "Numpy", "TensorFlow", "Git", "Postman", "VS Code", "Figma", "Leaflet Maps", "Render"]
    },
    {
      title: "Computer Science Fundamentals",
      skills: ["Computer Networks", "Operating Systems", "DBMS", "DSA", "OOPs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + skillIndex * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      name: "Polly",
      description: "A comprehensive polling application with real-time updates and analytics.",
      demo: "https://polly-frontend.vercel.app",
      github: "https://github.com/AmanKhare28/Polly_Backend",
      skills: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "TripShare",
      description: "Cab sharing platform with interactive maps and location services.",
      demo: "https://trip-share-cabs.vercel.app/",
      github: "https://github.com/AmanKhare28/TripShareCabs",
      skills: ["NextJS", "Firebase", "Leaflet Maps", "Geoapify"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Taskly",
      description: "Command-line task management tool built with Go for efficiency.",
      github: "https://github.com/AmanKhare28/Taskly",
      skills: ["GoLang", "Command Line Interface"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Clima",
      description: "Weather application with beautiful UI and real-time weather data.",
      demo: "https://amankhare28.github.io/Clima/",
      github: "https://github.com/AmanKhare28/Clima",
      skills: ["RapidAPI", "HTML", "CSS", "JavaScript"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`h-32 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill) => (
                      <span key={skill} className="skill-tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AcademicSection = () => {
  const academic = [
    {
      degree: "10th Standard",
      institution: "St. Joseph Vaz Vidya Niketan",
      year: "2019",
      icon: <GraduationCap className="text-blue-600" size={24} />
    },
    {
      degree: "12th Standard",
      institution: "Kendriya Vidyalaya",
      year: "2021",
      icon: <GraduationCap className="text-green-600" size={24} />
    },
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "Indian Institute Of Information Technology(IIIT), Kota",
      year: "2022-26",
      icon: <GraduationCap className="text-purple-600" size={24} />
    }
  ];

  return (
    <section id="academic" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {academic.map((item, index) => (
              <motion.div
                key={item.degree}
                className="flex items-center gap-6 bg-white rounded-2xl p-6 mb-6 shadow-lg card-hover"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.degree}</h3>
                  <p className="text-gray-600 mb-2">{item.institution}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span className="font-medium">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to build something amazing together? Let's turn your ideas into reality!
          </p>
          
          <div className="flex justify-center gap-6">
            <motion.a
              href="mailto:aman@example.com"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/amankhare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AcademicSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
