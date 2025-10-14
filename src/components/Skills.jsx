import React from 'react';
import { motion } from 'motion/react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDatabase 
} from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiExpress, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'JavaScript (ES6+)', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'SQL (Basic)', icon: <FaDatabase className="text-blue-700" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 text-center">
      <motion.h2 
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Teknologi & Keahlian
      </motion.h2>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex items-center space-x-2 bg-white dark:bg-gray-800 shadow-md rounded-full px-5 py-3"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }} 
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;