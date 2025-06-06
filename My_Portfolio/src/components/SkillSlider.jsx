// components/SkillSlider.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import your skill icons – update these paths with your actual asset locations
import htmlIcon from '../assets/SkillsImage/html.png';
import cssIcon from '../assets/SkillsImage/css.png';
import jsIcon from '../assets/SkillsImage/javascript.png';
import reactIcon from '../assets/SkillsImage/reactJs.png';
import reactNativeIcon from '../assets/SkillsImage/reactNative.png';
import tailwindIcon from '../assets/SkillsImage/icons8-tailwindcss.png';
import nodeIcon from '../assets/SkillsImage/nodejs.png';
import nextIcon from '../assets/SkillsImage/nuxt-js.png';
import githubIcon from '../assets/SkillsImage/github.png';
import Figma from '../assets/SkillsImage/figma.png';
import Canva from '../assets/SkillsImage/canva.png';

const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'React Native', icon: reactNativeIcon },
  { name: 'Tailwind', icon: tailwindIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Next.js', icon: nextIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Figma', icon: Figma },
  { name: 'Canva', icon: Canva },
];

// Separate skills into two groups
const topSkills = skills.slice(0, 5);
const bottomSkills = skills.slice(5);

// Define slider animation variants for the two rows
const topSliderVariants = {
  animate: {
    x: ['-100%', '100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      },
    },
  },
};

const bottomSliderVariants = {
  animate: {
    x: ['100%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      },
    },
  },
};

const SkillSlider = () => {
  return (
    <div className="w-full bg-white shadow-xl rounded-md dark:bg-gray-800 mt-20">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
        My Skills
      </h2>
      
      {/* Top Row: 5 Skills */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex space-x-6"
          variants={topSliderVariants}
          animate="animate"
        >
          {topSkills.concat(topSkills).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 w-24 h-24 p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain mb-2"
              />
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row: 6 Skills */}
      <div className="overflow-hidden relative mt-6">
        <motion.div
          className="flex space-x-6"
          variants={bottomSliderVariants}
          animate="animate"
        >
          {bottomSkills.concat(bottomSkills).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 w-24 h-24 p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillSlider;
