// // components/Hero.jsx
// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-scroll';
// import { ArrowDown } from 'lucide-react';
// import Typed from 'typed.js';
// import { motion } from 'framer-motion';
// import CursorBubbles from './CursorBubbles';
// import govindPhoto from '../assets/images/govindPhoto.jpg';
// import heroVideo from "../assets/Hero-Video.mp4"

// const Hero = () => {
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ['Frontend Developer', 'UI/UX Designer', 'React Expert', 'Coder', 'Engineer', 'Web Enthusiast'],
//       typeSpeed: 50,
//       backSpeed: 50,
//       backDelay: 1000,
//       loop: true,
//     });
//     return () => typed.destroy();
//   }, []);

//   return (
//     <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
//       {/* Background Video Animation */}
//       <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
//         <source src={heroVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Optional Dark Overlay for Contrast */}
//       <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

//       {/* Gradient and Blob Overlays
//       <div className="absolute inset-0 z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
//           <div className="absolute inset-0 opacity-10 dark:opacity-20">
//             <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl animate-blob"></div>
//             <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-purple-400 filter blur-3xl animate-blob animation-delay-2000"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-pink-400 filter blur-3xl animate-blob animation-delay-4000"></div>
//           </div>
//         </div>
//       </div> */}

//       <div className="container mx-auto px-6 md:px-12 relative z-20">
//         <motion.div
//           className="flex flex-col items-center text-center"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//         >
//           <img
//             src={govindPhoto}
//             alt="Profile"
//             className="w-42 h-42 rounded-full object-cover border border-white dark:border-gray-800 shadow-lg mb-6"
//           />

//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  text-white mb-4 ">
//             Govind Mishra
//           </h1>

//           <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 h-12 text-white">
//             I'm a <span ref={el} className="text-blue-600 dark:text-blue-400"></span>
//           </h2>

//           <p className="max-w-xl text-gray-600 dark:text-gray-300 mb-8 text-lg">
//             I craft responsive websites where technologies meet creativity. Building exceptional digital experiences that inspire and engage.
//           </p>

//           <div className="flex space-x-4">
//             <Link
//               to="contact"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               Hire Me
//             </Link>
//             <Link
//               to="projects"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
//             >
//               My Work
//             </Link>
//           </div>
//         </motion.div>
//       </div>

//       {/* Render the Cursor Bubbles Overlay */}
//       <CursorBubbles />

//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
//         <Link
//           to="about"
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md hover:shadow-lg cursor-pointer"
//         >
//           <ArrowDown size={20} />
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// // components/Hero.jsx
// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-scroll";
// import { ArrowDown, X } from "lucide-react"; // X icon for close button
// import Typed from "typed.js";
// import { motion } from "framer-motion";
// import CursorBubbles from "./CursorBubbles";
// import govindPhoto from "../assets/images/govind1.jpg"; // fallback image
// import govindPhotoMobile from "../assets/images/govind2removebg.png"; // for small screens
// import govindPhotoDesktop from "../assets/images/govind1removebg.png"; // for md and larger screens
// import heroVideo from "../assets/Hero-Video.mp4";

// const Hero = () => {
//   const el = useRef(null);
//   const [showModal, setShowModal] = useState(false);

//   const fullText =
// `I am a passionate and results-driven software professional with a proven record of delivering innovative IT solutions.
// With deep expertise in HTML, CSS, and modern front-end frameworks like React.js, React Native, and Tailwind CSS, I bring creative designs to life with smooth animations using Framer Motion.
// My technical foundation is further reinforced by strong coding practices in JavaScript, C Programming, and SQL, complemented by hands-on experience with Next.js and Node.js.
// I thrive in fast-paced, dynamic environments where I continuously push the boundaries of technology.
// Whether I'm developing interactive user interfaces or crafting robust back-end systems, my goal is to create digital experiences that are not only visually appealing but also scalable and efficient.
// I am committed to leveraging my skills to make a lasting impact and drive meaningful change in every project I undertake.`;
//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         "Web Enthusiast",
//         "Frontend Developer",
//         "UI/UX Designer",
//         "React js Developer",
//         "React Native Developer",
//         "Software Engineer",
//         "Figma Designer",
//         "Canva Designer",
//       ],
//       typeSpeed: 50,
//       backSpeed: 50,
//       backDelay: 1000,
//       loop: true,
//     });
//     return () => typed.destroy();
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center pt-20 md:pt-32 lg:pt-40 overflow-hidden"
//     >
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20">
//         <motion.div
//           className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {/* Left Content */}
//           <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-1">
//               Govind Mishra
//             </h1>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-medium h-12 text-white mb-4">
//               I'm a{" "}
//               <span
//                 ref={el}
//                 className="text-blue-600 dark:text-blue-400"
//               ></span>
//             </h2>
//             <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto md:mx-0">
//               I am a passionate software professional with a proven record of
//               delivering innovative IT solutions.....
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="text-blue-400 hover:underline mb-6"
//               >
//                 See More
//               </button>
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Link
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 Hire Me
//               </Link>
//               <Link
//                 to="projects"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
//               >
//                 My Work
//               </Link>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             <div className="relative group max-w-xs sm:max-w-sm md:max-w-md">
//               {/* Multi-color Running Border */}
//               {/* <div className="absolute -inset-1 rounded-lg overflow-hidden p-px z-0">
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 border-t-violet-950 via-red-500 to-green-500 rounded-lg animate-[border-flow_3s_linear_infinite] bg-[length:400%_100%]"></div>
//               </div> */}
//               {/* Blur Effect */}
//               {/* <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition duration-300" /> */}
//               {/* Responsive Image */}
//               <div className="relative rounded-lg overflow-hidden z-10">
//                 <picture>
//                   <source
//                     media="(max-width: 639px)"
//                     srcSet={govindPhotoMobile}
//                   />
//                   <source
//                     media="(min-width: 768px)"
//                     srcSet={govindPhotoDesktop}
//                   />
//                   <img
//                     src={govindPhoto}
//                     alt="Govind Mishra"
//                     className="w-full max-sm:w-40 h-auto aspect-square transform transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </picture>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <CursorBubbles />

//       <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
//         <Link
//           to="about"
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md hover:shadow-lg cursor-pointer"
//         >
//           <ArrowDown size={20} />
//         </Link>
//       </div>

//       {/* Modal for "See More" Content */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
//           <div className="relative mx-4 max-w-xl">
//             {/* Running Border Wrapper */}
//             <div className="absolute -inset-1 rounded-lg overflow-hidden p-px z-0">
//               <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-lg animate-[border-flow_3s_linear_infinite] bg-[length:400%_100%]"></div>
//             </div>
//             {/* Modal Content */}
//             <div className="bg-black dark:bg-gray-800 rounded-lg p-6 relative z-10">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-2 right-2 text-white dark:text-gray-300 hover:text-[#F0F2F6] dark:hover:text-white cursor-pointer"
//               >
//                 <X size={24} />
//               </button>
//               <h3 className="text-2xl font-bold mb-4 text-white dark:text-gray-100">
//                 About Me
//               </h3>
//               <p className="text-white dark:text-gray-300">{fullText}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;

// components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { ArrowDown, X, Download, ExternalLink } from "lucide-react";
import Typed from "typed.js";
import { motion, AnimatePresence } from "framer-motion";
import CursorBubbles from "./CursorBubbles";
import govindPhoto from "../assets/images/govind1.jpg"; // fallback image
import govindPhotoMobile from "../assets/images/govind2removebg.png"; // for small screens
import govindPhotoDesktop from "../assets/images/govind1removebg.png"; // for md and larger screens

const Hero = () => {
  const el = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const fullText = `I am a passionate and results-driven software professional with a proven record of delivering innovative IT solutions. 
With deep expertise in HTML, CSS, and modern front-end frameworks like React.js, React Native, and Tailwind CSS, I bring creative designs to life with smooth animations using Framer Motion. 
My technical foundation is further reinforced by strong coding practices in JavaScript, C Programming, and SQL, complemented by hands-on experience with Next.js and Node.js. 
I thrive in fast-paced, dynamic environments where I continuously push the boundaries of technology. 
Whether I'm developing interactive user interfaces or crafting robust back-end systems, my goal is to create digital experiences that are not only visually appealing but also scalable and efficient. 
I am committed to leveraging my skills to make a lasting impact and drive meaningful change in every project I undertake.`;

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Enthusiast",
        "Frontend Developer",
        "UI/UX Designer",
        "React js Developer",
        "React Native Developer",
        "Software Engineer",
        "Figma Designer",
        "Canva Designer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    // Simulate loading completed
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => {
      typed.destroy();
      clearTimeout(timer);
    };
  }, []);

  // Particle background config
  const generateParticles = (count) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100, // % position
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        color:
          i % 5 === 0
            ? "#60a5fa" // blue
            : i % 5 === 1
            ? "#8b5cf6" // purple
            : i % 5 === 2
            ? "#10b981" // green
            : i % 5 === 3
            ? "#f59e0b" // amber
            : "#ef4444", // red
        duration: Math.random() * 20 + 10,
      });
    }
    return particles;
  };

  const particles = generateParticles(50);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 md:pt-32 lg:pt-40 overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-70"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              animation: `float ${particle.duration}s infinite ease-in-out`,
            }}
          />
        ))}

        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.2),transparent_70%),radial-gradient(ellipse_at_bottom_left,_rgba(124,58,237,0.2),transparent_70%)]"></div>

        {/* Animated lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.5"
              ></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-2"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Govind Mishra
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-medium h-12 text-white mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I'm a{" "}
              <span
                ref={el}
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              ></span>
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto md:mx-0 mb-2">
                I am a passionate software professional with a proven record of
                delivering innovative IT solutions.....
                <button
                  onClick={() => setShowModal(true)}
                  className="ml-1 text-blue-400 hover:text-blue-300 hover:underline focus:outline-none transition-colors"
                >
                  See More
                </button>
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Hire Me</span>
                <ExternalLink size={18} />
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/20 border border-white/20 flex items-center justify-center gap-2"
              >
                <span>My Work</span>
                <ArrowDown size={18} />
              </Link>
              <a
                href="/resume.pdf"
                className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-gray-300 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-800/70 border border-gray-700/30 flex items-center justify-center gap-2"
                download
              >
                <span>Resume</span>
                <Download size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative group max-w-xs sm:max-w-sm md:max-w-md">
              {/* Image glow effect */}
              <motion.div
                className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.75, scale: 1 }}
                transition={{ duration: 1 }}
              />

              {/* Moving gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full bg-[length:200%_auto] animate-border-flow"></div>

              {/* Responsive Image with mask */}
              <div className="relative rounded-full overflow-hidden z-10 border-2 border-white/20">
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <picture>
                    <source
                      media="(max-width: 639px)"
                      srcSet={govindPhotoMobile}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={govindPhotoDesktop}
                    />
                    <img
                      src={govindPhoto}
                      alt="Govind Mishra"
                      className="w-full max-sm:w-40 h-auto aspect-square transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </picture>
                </motion.div>

                {/* Overlay with subtle pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Floating elements around the image */}
              <motion.div
                className="absolute -right-4 -top-4 w-12 h-12 bg-blue-500 rounded-lg z-10 flex items-center justify-center text-white shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <i className="fab fa-react text-2xl"></i>
              </motion.div>

              <motion.div
                className="absolute -left-2 bottom-4 w-10 h-10 bg-purple-500 rounded-full z-10 flex items-center justify-center text-white shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <i className="fab fa-js text-xl"></i>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech badges
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-12 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {["React", "JavaScript", "Tailwind", "Node.js", "MongoDB", "TypeScript"].map((tech, index) => (
            <motion.span 
              key={tech}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/10 flex items-center gap-1"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + (index * 0.1) }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              {tech}
            </motion.span>
          ))}
        </motion.div> */}
      </div>

      <CursorBubbles
        colors={["bg-red-500", "bg-green-500", "bg-blue-500"]}
        minSize={10}
        maxSize={30}
        duration={1.2}
        clickEffect={true}
        trail={true}
        trailLength={8}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-blue-400 shadow-md hover:shadow-lg cursor-pointer border border-white/20 hover:bg-white/20 transition-all duration-300 group"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown
              size={20}
              className="group-hover:text-blue-300 transition-colors"
            />
          </motion.div>
        </Link>
      </motion.div>

      {/* Modal for "See More" Content */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative mx-4 max-w-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              {/* Running Border Wrapper */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl animate-border-flow bg-[length:200%_auto]"></div>

              {/* Modal Content */}
              <div className="bg-gray-900 rounded-xl p-6 relative z-10 border border-gray-800">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white cursor-pointer bg-gray-800/50 p-1.5 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
                <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-400 to-purple-500">
                  About Me
                </h3>
                <p className="text-gray-300 leading-relaxed">{fullText}</p>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
