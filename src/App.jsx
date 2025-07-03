import "./App.css";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const academicRef = useRef(null);

  const heroInView = useInView(heroRef, { threshold: 0.3 });
  const aboutInView = useInView(aboutRef, { threshold: 0.3 });
  const skillsInView = useInView(skillsRef, { threshold: 0.3 });
  const projectsInView = useInView(projectsRef, { threshold: 0.3 });
  const academicInView = useInView(academicRef, { threshold: 0.3 });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.8, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Update active section based on which section is in view
  useEffect(() => {
    if (heroInView) setActiveSection(0);
    else if (aboutInView) setActiveSection(1);
    else if (skillsInView) setActiveSection(2);
    else if (projectsInView) setActiveSection(3);
    else if (academicInView) setActiveSection(4);
  }, [heroInView, aboutInView, skillsInView, projectsInView, academicInView]);

  // Smooth scroll to section function
  const scrollToSection = (sectionIndex) => {
    const sections = [heroRef, aboutRef, skillsRef, projectsRef, academicRef];
    const targetRef = sections[sectionIndex];
    
    if (targetRef && targetRef.current) {
      const navHeight = 80; // Account for fixed navbar height
      const targetPosition = targetRef.current.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionIndex);
  };

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      rotateY: -15,
      z: -100
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      z: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      rotateY: 5,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0],
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: i % 2 === 0 ? '#4b607f' : '#f3701e' }} />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen font-inter" style={{ backgroundColor: '#e8d8c9' }}>
      <FloatingElements />
      
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 p-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      >
        <div className="flex justify-center">
          <motion.div 
            className="bg-white rounded-full px-8 py-3 shadow-lg border border-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
          >
                                      <div className="flex space-x-8">
               {['Home', 'About', 'Skills', 'Projects', 'Education'].map((item, index) => (
                 <motion.button
                   key={item}
                   className="relative text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg"
                   style={{ 
                     color: activeSection === index ? '#f3701e' : '#4b607f' 
                   }}
                   whileHover={{ 
                     scale: 1.1,
                     backgroundColor: activeSection === index ? 'rgba(243, 112, 30, 0.1)' : 'rgba(75, 96, 127, 0.1)'
                   }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => scrollToSection(index)}
                 >
                   {activeSection === index && (
                     <motion.div
                       className="absolute inset-0 rounded-lg border-2"
                       style={{ borderColor: '#f3701e' }}
                       layoutId="activeNavIndicator"
                       initial={false}
                       transition={{ type: "spring", damping: 15, stiffness: 300 }}
                     />
                   )}
                   <span className="relative z-10">{item}</span>
                 </motion.button>
               ))}
             </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative px-4"
        style={{ y, opacity }}
      >
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6"
              style={{ color: '#4b607f' }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                damping: 10,
                stiffness: 100,
                delay: 0.2
              }}
            >
              Hello, I am{" "}
              <motion.span
                style={{ color: '#f3701e' }}
                animate={{ 
                  textShadow: [
                    "0 0 0px #f3701e",
                    "0 0 20px #f3701e",
                    "0 0 0px #f3701e"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Aman Khare
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <p className="text-2xl md:text-4xl font-light mb-8" style={{ color: '#4b607f' }}>
              A Passionate{" "}
              <motion.span
                style={{ color: '#f3701e' }}
                className="font-semibold"
                whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
              >
                Developer
              </motion.span>, {" "}
              <motion.span
                style={{ color: '#4b607f' }}
                className="font-semibold"
                whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
              >
                Designer
              </motion.span>, {" "}
              <motion.span
                style={{ color: '#f3701e' }}
                className="font-semibold"
                whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
              >
                Problem Solver
              </motion.span>
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
          >
            <motion.button
              onClick={() => window.open("https://drive.google.com/file/d/1SX2_Icak3F3QdOMHvZemkkJ4J-bB4aVt/view?usp=sharing", "_blank")}
              className="group relative overflow-hidden bg-white border-2 text-lg font-bold py-6 px-12 rounded-full shadow-lg"
              style={{ 
                borderColor: '#4b607f',
                color: '#4b607f'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(75, 96, 127, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: '#f3701e' }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center space-x-3 group-hover:text-white transition-colors duration-300">
                <span>View My Resume</span>
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#4b607f' }}>
            <motion.div 
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: '#f3701e' }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        ref={aboutRef}
        className="py-32 px-4"
        style={{ backgroundColor: 'white' }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-center mb-20"
            style={{ color: '#4b607f' }}
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={aboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="bg-white border-2 rounded-3xl p-12 shadow-xl relative overflow-hidden"
              style={{ borderColor: '#4b607f' }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(75, 96, 127, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-2 rounded-t-3xl"
                style={{ backgroundColor: '#f3701e' }}
                initial={{ scaleX: 0 }}
                animate={aboutInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <div className="text-lg md:text-xl leading-relaxed" style={{ color: '#4b607f' }}>
                <motion.p 
                  className="mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  👋 Hey there! I'm <span className="font-bold" style={{ color: '#f3701e' }}>Aman Khare</span>, a tech enthusiast, problem solver, and full-stack developer with a knack for turning ideas into interactive, user-friendly applications. From building smart web apps with Next.js to diving deep into AI and machine learning, I love pushing the boundaries of what's possible.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  When I'm not coding, you'll probably find me leading tech workshops, designing cool interfaces, or solving complex algorithms just for fun! 🚀 Always up for a challenge and excited to build the next big thing. Let's connect and create something amazing together!
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        ref={skillsRef}
        className="py-32 px-4"
        style={{ backgroundColor: '#e8d8c9' }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-center mb-20"
            style={{ color: '#4b607f' }}
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
          >
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div 
                key={category}
                variants={itemVariants}
                className="bg-white border-2 rounded-2xl p-8 shadow-lg"
                style={{ borderColor: '#4b607f' }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(75, 96, 127, 0.15)"
                }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: '#f3701e' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: categoryIndex * 0.1 + 0.3 }}
                >
                  {category}
                </motion.h3>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate={skillsInView ? "visible" : "hidden"}
                >
                  {skillList.map((skill, index) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      whileHover="hover"
                      className="px-6 py-3 border-2 rounded-full text-sm font-semibold cursor-default"
                      style={{ 
                        backgroundColor: 'white',
                        borderColor: '#4b607f',
                        color: '#4b607f'
                      }}
                      custom={index}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        ref={projectsRef}
        className="py-32 px-4"
        style={{ backgroundColor: 'white' }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-center mb-20"
            style={{ color: '#4b607f' }}
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.name}
                variants={projectVariants}
                whileHover="hover"
                className="group relative bg-white border-2 rounded-2xl p-8 shadow-lg"
                style={{ borderColor: '#4b607f' }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                  style={{ backgroundColor: '#f3701e' }}
                  initial={{ scaleX: 0 }}
                  animate={projectsInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
                <motion.h3 
                  className="text-3xl font-bold mb-4"
                  style={{ color: '#4b607f' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {project.name}
                </motion.h3>
                <p className="mb-6 text-lg" style={{ color: '#4b607f' }}>{project.description}</p>
                <motion.div 
                  className="flex flex-wrap gap-3 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate={projectsInView ? "visible" : "hidden"}
                >
                  {project.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skill} 
                      className="px-4 py-2 rounded-full text-sm font-medium border-2"
                      style={{ 
                        backgroundColor: '#f3701e',
                        color: 'white',
                        borderColor: '#f3701e'
                      }}
                      variants={skillVariants}
                      custom={skillIndex}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="flex space-x-4">
                  {project.demo && (
                    <motion.button
                      onClick={() => window.open(project.demo, "_blank")}
                      className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold border-2"
                      style={{ 
                        backgroundColor: '#f3701e',
                        color: 'white',
                        borderColor: '#f3701e'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 20px rgba(243, 112, 30, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Live Demo</span>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </motion.svg>
                    </motion.button>
                  )}
                  <motion.button
                    onClick={() => window.open(project.github, "_blank")}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold border-2 bg-white"
                    style={{ 
                      borderColor: '#4b607f',
                      color: '#4b607f'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: '#4b607f',
                      color: 'white'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>GitHub</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Academic Journey Section */}
      <motion.section 
        ref={academicRef}
        className="py-32 px-4"
        style={{ backgroundColor: '#e8d8c9' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-center mb-20"
            style={{ color: '#4b607f' }}
            initial={{ opacity: 0, y: 50 }}
            animate={academicInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            Academic Journey
          </motion.h2>
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={academicInView ? "visible" : "hidden"}
          >
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-8 bg-white border-2 rounded-2xl p-8 shadow-lg group"
                style={{ borderColor: '#4b607f' }}
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  boxShadow: "0 20px 40px rgba(75, 96, 127, 0.15)"
                }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl border-4"
                  style={{ 
                    backgroundColor: edu.current ? '#f3701e' : '#4b607f',
                    color: 'white',
                    borderColor: edu.current ? '#f3701e' : '#4b607f'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    boxShadow: edu.current ? "0 0 20px #f3701e" : "0 0 20px #4b607f"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {edu.year.split('-')[0] || edu.year}
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold mb-2"
                    style={{ color: '#4b607f' }}
                    whileHover={{ color: '#f3701e' }}
                  >
                    {edu.degree}
                  </motion.h3>
                  <p className="text-lg mb-1" style={{ color: '#4b607f' }}>{edu.institution}</p>
                  <p className="text-sm" style={{ color: '#4b607f', opacity: 0.7 }}>{edu.year}</p>
                  {edu.current && (
                    <motion.span 
                      className="inline-block mt-3 px-4 py-2 rounded-full text-sm font-bold border-2"
                      style={{ 
                        backgroundColor: '#f3701e',
                        color: 'white',
                        borderColor: '#f3701e'
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                      whileHover={{ scale: 1.1, boxShadow: "0 5px 15px rgba(243, 112, 30, 0.4)" }}
                    >
                      Current
                    </motion.span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-20 px-4" style={{ backgroundColor: '#4b607f' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect!
          </motion.h3>
          <motion.p 
            className="text-xl text-white mb-12 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to build something amazing together?
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {['💼', '📧', '🚀'].map((emoji, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl cursor-pointer"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: '#f3701e',
                  boxShadow: "0 10px 30px rgba(243, 112, 30, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
          <motion.p 
            className="text-white opacity-60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            &copy; 2024 Aman Khare. Built with React, Framer Motion & Tailwind CSS
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;
