// src/components/Footer.jsx
import React from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-gray-200 dark:border-gray-800 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }} 
    >
      <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
          © {currentYear} Ageng Prayoga. Dibuat dengan 😎 menggunakan React & Tailwind.
        </p>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/Consep33t"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="www.linkedin.com/in/ageng-prayoga-789b652a9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        
      </div>
    </motion.footer>
  );
};

export default Footer;